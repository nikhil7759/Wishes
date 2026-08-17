import React, { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Respect users who prefer reduced motion: fall back to native scrolling
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      delete (window as any).lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;

