import { useEffect } from "react";

export default function useAutoSlide(nextSlide, interval = 5000) {
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, interval);
    return () => clearInterval(autoSlide);
  }, [nextSlide]);
}
// This custom hook automatically triggers the next slide function at specified intervals.