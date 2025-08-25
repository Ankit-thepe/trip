import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

// This is the standalone AnimatedCounter component
export const AnimatedCounter = ({ to, isInteger = true }) => {
  const ref = useRef(null);
  // Trigger the animation when the element is in view
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      // Use framer-motion's animate function for a simple, robust animation
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            // Update the span's text content on each frame
            ref.current.textContent = isInteger 
              ? Math.round(latest).toLocaleString() 
              : latest.toFixed(1);
          }
        },
      });
      // Return a cleanup function to stop the animation if the component unmounts
      return () => controls.stop();
    }
  }, [inView, to, isInteger]);

  // The plus sign is added here to prevent it from showing during the animation
  const plusSign = isInteger ? '+' : '';

  return (
    <>
      <span ref={ref}>{isInteger ? '0' : '0.0'}</span>
      {plusSign}
    </>
  );
};