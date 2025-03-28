import { useCallback, useEffect, useState } from 'react';
import { IApiBasePaginateResponse } from '../interfaces/interfaces';

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
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  // Implementación de debounce de 1 segundo
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1000); // 1000 ms = 1 segundo

    // Limpiar el timeout si el search cambia antes de 1 segundo
    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const getData = useCallback(async () => {
    setLoading(true);
    const response = await callback({ page, limit, search: debouncedSearch });
    setData(response.result.data);
    setTotalPages(response.result.totalPages);
    setLoading(false);
  }, [callback, limit, page, debouncedSearch]);

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
