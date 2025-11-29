import { API_CONFIG } from './constants';
class ApiError extends Error {
    constructor(message, statusCode, data) {
        super(message);
        Object.defineProperty(this, "statusCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: statusCode
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: data
        });
        this.name = 'ApiError';
    }
}
/**
 * Generic API client with error handling and retry logic
 */
class ApiClient {
    constructor(baseURL = API_CONFIG.BASE_URL) {
        Object.defineProperty(this, "baseURL", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "defaultTimeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "defaultRetries", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.baseURL = baseURL;
        this.defaultTimeout = API_CONFIG.TIMEOUT;
        this.defaultRetries = API_CONFIG.RETRY_ATTEMPTS;
    }
    async fetchWithTimeout(url, options = {}, timeout = this.defaultTimeout) {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);
        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal,
            });
            clearTimeout(id);
            return response;
        }
        catch (error) {
            clearTimeout(id);
            throw error;
        }
    }
    async request(endpoint, options = {}) {
        const { timeout, retries = this.defaultRetries, ...fetchOptions } = options;
        const url = `${this.baseURL}${endpoint}`;
        let lastError = null;
        for (let attempt = 0; attempt <= retries; attempt++) {
            try {
                const response = await this.fetchWithTimeout(url, fetchOptions, timeout);
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    throw new ApiError(errorData.message || `HTTP ${response.status}`, response.status, errorData);
                }
                const data = await response.json();
                return { data, message: 'Success' };
            }
            catch (error) {
                lastError = error;
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
    async get(endpoint, options) {
        return this.request(endpoint, { ...options, method: 'GET' });
    }
    async post(endpoint, data, options) {
        return this.request(endpoint, {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            body: JSON.stringify(data),
        });
    }
    async put(endpoint, data, options) {
        return this.request(endpoint, {
            ...options,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
            body: JSON.stringify(data),
        });
    }
    async delete(endpoint, options) {
        return this.request(endpoint, { ...options, method: 'DELETE' });
    }
}
// Export singleton instance
export const api = new ApiClient();
export { ApiError };
