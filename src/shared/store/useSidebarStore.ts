import { create } from 'zustand';

interface IUseSidebarStore {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<IUseSidebarStore>((set) => ({
  isOpen: true,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
