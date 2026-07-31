import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    let isLoaded = document.readyState === 'complete';

    const handleLoad = () => {
      isLoaded = true;
    };

    if (!isLoaded) {
      window.addEventListener('load', handleLoad);
    }

    intervalId = setInterval(() => {
      setProgress((prev) => {
        if (isLoaded) {
          if (prev >= 100) {
            clearInterval(intervalId);
            setTimeout(() => {
              setIsFadingOut(true);
              setTimeout(() => {
                setIsHidden(true);
              }, 800);
            }, 300);
            return 100;
          }
          return Math.min(prev + 20, 100);
        } else {
          if (prev >= 90) {
            return 90;
          }
          return Math.min(prev + Math.floor(Math.random() * 8 + 3), 90);
        }
      });
    }, 60);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#f8f0e5] text-[#5a4d41] flex flex-col items-center justify-center transition-all duration-800 ease-in-out select-none ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        {/* Wishes Brand Logo */}
        <div className="mb-8 transform transition-transform duration-500 hover:scale-105">
          <img
            src="/logo/wishes%20logo1.png"
            alt="Wishes Logo"
            className="h-16 md:h-20 w-auto object-contain"
            decoding="async"
          />
        </div>

        {/* Custom Progress Bar Track */}
        <div className="w-64 h-[2px] bg-[#e5d5c5] rounded-full overflow-hidden relative shadow-sm">
          <div
            className="h-full bg-gradient-to-r from-[#c19e6e] via-[#d4ad70] to-[#c19e6e] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Status Text & Percentage */}
        <div className="mt-5 flex flex-col items-center space-y-1">
          <span className="font-jost text-xs tracking-[0.3em] text-[#8b7d72] uppercase font-medium antialiased">
            Loading {Math.round(progress)}%
          </span>
          <span className="font-jost text-[10px] tracking-[0.2em] text-[#a8927d] uppercase">
            Crafting Luxury Experiences
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

