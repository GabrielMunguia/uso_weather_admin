import { useCallback, useEffect, useState } from 'react';

interface IProps<T> {
  cb: () => Promise<T>;
  manual?: boolean;
}

export const useQuery = <T>({ cb, manual = false }: IProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await cb();
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [cb]);

  useEffect(() => {
    if (!manual) {
      fetchData();
    }
  }, [fetchData, manual]);

  return { data, isLoading, error, fetchData };
};
