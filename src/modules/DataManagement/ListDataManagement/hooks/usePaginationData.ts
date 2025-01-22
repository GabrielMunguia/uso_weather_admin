import { IApiBasePaginateResponse } from '@/shared/interfaces/interfaces';
import { useCallback, useEffect, useState } from 'react';

interface IParams<T> {
  initialPage?: number;
  limit?: number;
  search?: string; // Nuevo campo opcional de búsqueda
  callback: ({
    page,
    limit,
    search,
  }: {
    page: number;
    limit: number;
    search?: string;
  }) => Promise<IApiBasePaginateResponse<T>>;
}

export const usePaginationApi = <T>({
  initialPage = 1,
  limit = 40,
  search = '', // Valor por defecto para el campo de búsqueda
  callback,
}: IParams<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  const getData = useCallback(async () => {
    setLoading(true);
    const response = await callback({ page, limit, search });
    setData(response.result.data);
    setTotalPages(response.result.totalPages);
    setLoading(false);
  }, [callback, limit, page, search]);

  useEffect(() => {
    getData();
  }, [getData]);
  const reset = useCallback(
    ({
      newPage,
      newTotalPages,
      newData,
    }: {
      newPage: number;
      newTotalPages: number;
      newData: T[];
    }) => {
      setPage(newPage);
      setTotalPages(newTotalPages);
      setData(newData);
    },
    [],
  );

  return {
    data,
    loading,
    setData,
    page,
    totalPages,
    setPage,
    reset,
  };
};
