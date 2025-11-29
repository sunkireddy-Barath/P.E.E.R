import type { ApiResponse } from '@vidyut/types';
import { API_CONFIG } from './constants';

class ApiError extends Error {
    constructor(
        message: string,
        public statusCode?: number,
        public data?: any
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

interface RequestOptions extends RequestInit {
    timeout?: number;
    retries?: number;
}

/**
 * Generic API client with error handling and retry logic
 */
class ApiClient {
    private baseURL: string;
    private defaultTimeout: number;
    private defaultRetries: number;

    constructor(baseURL: string = API_CONFIG.BASE_URL) {
        this.baseURL = baseURL;
        this.defaultTimeout = API_CONFIG.TIMEOUT;
        this.defaultRetries = API_CONFIG.RETRY_ATTEMPTS;
    }

    private async fetchWithTimeout(
        url: string,
        options: RequestOptions = {},
        timeout: number = this.defaultTimeout
    ): Promise<Response> {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal,
            });
            clearTimeout(id);
            return response;
        } catch (error) {
            clearTimeout(id);
            throw error;
        }
    }

    private async request<T>(
        endpoint: string,
        options: RequestOptions = {}
    ): Promise<ApiResponse<T>> {
        const { timeout, retries = this.defaultRetries, ...fetchOptions } = options;
        const url = `${this.baseURL}${endpoint}`;

        let lastError: Error | null = null;

        for (let attempt = 0; attempt <= retries; attempt++) {
            try {
                const response = await this.fetchWithTimeout(url, fetchOptions, timeout);

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    throw new ApiError(
                        errorData.message || `HTTP ${response.status}`,
                        response.status,
                        errorData
                    );
                }

                const data = await response.json();
                return { data, message: 'Success' };
            } catch (error) {
                lastError = error as Error;

                // Don't retry on client errors (4xx)
                if (error instanceof ApiError && error.statusCode && error.statusCode < 500) {
                    break;
                }

                // Wait before retrying (exponential backoff)
                if (attempt < retries) {
                    await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
                }
            }
        }

        return {
            error: lastError?.message || 'Unknown error occurred',
        };
    }

    async get<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...options, method: 'GET' });
    }

    async post<T>(
        endpoint: string,
        data?: any,
        options?: RequestOptions
    ): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            body: JSON.stringify(data),
        });
    }

    async put<T>(
        endpoint: string,
        data?: any,
        options?: RequestOptions
    ): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            body: JSON.stringify(data),
        });
    }

    async delete<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, { ...options, method: 'DELETE' });
    }
}

// Export singleton instance
export const api = new ApiClient();
export { ApiError };
