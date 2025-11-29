import { useState, useEffect, useCallback } from 'react';
import { api } from '../lib/api';
/**
 * Custom hook for API data fetching with loading and error states
 */
export function useApi(endpoint, options = { immediate: true }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(options.immediate);
    const [error, setError] = useState(null);
    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        const response = await api.get(endpoint);
        if (response.error) {
            setError(response.error);
            setData(null);
        }
        else {
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
