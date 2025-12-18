import { create } from 'zustand';

interface CarouselState {
  currentIndex: number;
  isAutoPlaying: boolean;
  setCurrentIndex: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  toggleAutoPlay: () => void;
  setAutoPlay: (value: boolean) => void;
}

export const useCarouselStore = create<CarouselState>((set) => ({
  currentIndex: 0,
  isAutoPlaying: true,
  setCurrentIndex: (index) => set({ currentIndex: index }),
  nextSlide: () => set((state) => ({ currentIndex: state.currentIndex + 1 })),
  prevSlide: () => set((state) => ({ currentIndex: state.currentIndex - 1 })),
  toggleAutoPlay: () => set((state) => ({ isAutoPlaying: !state.isAutoPlaying })),
  setAutoPlay: (value) => set({ isAutoPlay: value }),
}));
