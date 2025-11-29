import { useState, useEffect, useCallback } from 'react';
import type { ApiResponse } from '@vidyut/types';
import { api } from '../lib/api';

interface UseApiOptions {
    immediate?: boolean;
}

interface UseApiReturn<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
}

/**
 * Custom hook for API data fetching with loading and error states
 */
export function useApi<T>(
    endpoint: string,
    options: UseApiOptions = { immediate: true }
): UseApiReturn<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(options.immediate);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        const response: ApiResponse<T> = await api.get(endpoint);

        if (response.error) {
            setError(response.error);
            setData(null);
        } else {
            setData(response.data || null);
            setError(null);
        }

        setLoading(false);
    }, [endpoint]);

    useEffect(() => {
        if (options.immediate) {
            fetchData();
        }
    }, [fetchData, options.immediate]);

    return {
        data,
        loading: loading ?? false,
        error,
        refetch: fetchData,
    };
}
