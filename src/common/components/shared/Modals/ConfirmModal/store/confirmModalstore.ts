import { create } from 'zustand';

interface IConfirmStore {
  isAsking: boolean;
  response: boolean;
  message: string;
  resetAsking: () => void;
  setNewAsking: (message: string) => void;
  setResponse: (response: boolean) => void;
}

export const useConfirmStore = create<IConfirmStore>((set) => ({
  isAsking: false,
  response: false,
  message: '',
  resetAsking: () => set({ isAsking: false, message: '', response: false }),
  setNewAsking: (message: string) => set({ isAsking: true, message }),
  setResponse: (response: boolean) => set({ response, isAsking: false }),
}));
