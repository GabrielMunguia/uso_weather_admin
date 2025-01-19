import { create } from 'zustand';

interface IFormAutoCompleteStore {
  inputs: { [key: string]: { isFocus: boolean } };
  setFocus: (name: string, isFocus: boolean) => void;
  addInput: (name: string) => void;
  getIsFocus: (name: string) => boolean;
}

export const useFormAutoCompleteStore = create<IFormAutoCompleteStore>(
  (set) => ({
    inputs: {},
    getIsFocus: (name) => {
      const state: IFormAutoCompleteStore = useFormAutoCompleteStore.getState();
      return state.inputs[name]?.isFocus ?? false;
    },
    addInput: (name) => {
      set((state) => ({
        inputs: {
          ...state.inputs,
          [name]: { isFocus: false },
        },
      }));
    },
    setFocus: (name, isFocus) => {
      set((state) => ({
        inputs: {
          ...Object.keys(state.inputs).reduce(
            (acc: { [key: string]: { isFocus: boolean } }, key: string) => {
              acc[key] = { isFocus: key === name ? isFocus : false };
              return acc;
            },
            {},
          ),
        },
      }));
    },
  }),
);
