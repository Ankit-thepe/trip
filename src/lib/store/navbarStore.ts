import { create } from 'zustand';

interface NavbarState {
  isScrolled: boolean;
  isMenuOpen: boolean;
  isProfileOpen: boolean;
  setIsScrolled: (value: boolean) => void;
  setIsMenuOpen: (value: boolean) => void;
  setIsProfileOpen: (value: boolean) => void;
  toggleMenuOpen: () => void;
  toggleProfileOpen: () => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isScrolled: false,
  isMenuOpen: false,
  isProfileOpen: false,
  setIsScrolled: (value) => set({ isScrolled: value }),
  setIsMenuOpen: (value) => set({ isMenuOpen: value }),
  setIsProfileOpen: (value) => set({ isProfileOpen: value }),
  toggleMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  toggleProfileOpen: () => set((state) => ({ isProfileOpen: !state.isProfileOpen })),
}));
