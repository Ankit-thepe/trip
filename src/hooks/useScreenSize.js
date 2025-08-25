import { useState, useEffect } from 'react';

// This hook checks the screen size and returns booleans for different breakpoints.
export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640; // Tailwind's 'sm' breakpoint
      const tablet = window.innerWidth >= 768 && window.innerWidth < 1024; // 'md' to 'lg'

      setScreenSize({ isMobile: mobile, isTablet: tablet });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};