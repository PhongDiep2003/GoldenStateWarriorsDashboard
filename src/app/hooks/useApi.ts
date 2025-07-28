// Resuable hook to fetch data from an API
import { useState, useEffect } from 'react';
import { ErrorMessage } from '../utils/types';
export default function useApi<T>(apiCall: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<ErrorMessage | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      const result = await apiCall();

      // If the result is in the form of {error: true, message: string}, it means there is an error when fetching the data
      if (
        result &&
        typeof result === 'object' &&
        'error' in result &&
        result.error
      ) {
        setError({
          error: true,
          message: (result as any)?.message || 'An error occurred',
        });
        setData(null);
        return;
      }
      setData(result);
    };

    fetchData();
  }, []);
  return { data, error };
}
