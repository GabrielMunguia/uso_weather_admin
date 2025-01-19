import { useRef } from 'react';
import { useConfirmStore } from '../store/confirmModalstore';

export const useConfirm = () => {
  const { isAsking, setNewAsking, resetAsking } = useConfirmStore();
  const timer = useRef<any>();

  const cancel = () => {
    resetAsking();
  };
  const ask = async (message: string): Promise<boolean> => {
    setNewAsking(message);

    clearTimeout(timer.current);
    return new Promise((resolve) => {
      timer.current = setInterval(() => {
        if (!useConfirmStore.getState().isAsking) {
          clearInterval(timer.current);
          resolve(useConfirmStore.getState().response);
        }
      }, 100);
    });
  };

  return { isAsking, cancel, ask };
};
