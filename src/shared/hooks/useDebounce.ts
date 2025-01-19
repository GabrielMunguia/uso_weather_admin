import { useEffect, useRef, useCallback } from 'react';

// Definición de tipos
type UseDebouncedCallbackArgs<T extends any[]> = {
  callback: (...args: T) => void;
  delay: number;
};

export function useDebounced<T extends any[]>({
  callback,
  delay = 500,
}: UseDebouncedCallbackArgs<T>) {
  const handlerRef = useRef<number>();

  const debouncedCallback = useCallback(
    (...args: T) => {
      if (handlerRef.current) {
        clearTimeout(handlerRef.current);
      }
      handlerRef.current = window.setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  useEffect(() => {
    return () => {
      if (handlerRef.current) {
        clearTimeout(handlerRef.current);
      }
    };
  }, []);

  return debouncedCallback;
}
