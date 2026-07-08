import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let intervalId: any;
    let pageLoaded = false;

    // Listen to window load event
    const handleLoad = () => {
      pageLoaded = true;
    };

    if (document.readyState === 'complete') {
      pageLoaded = true;
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Increment progress
    intervalId = setInterval(() => {
      setProgress((prev) => {
        if (pageLoaded) {
          // If page is fully loaded, accelerate to 100%
          if (prev >= 100) {
            clearInterval(intervalId);
            setTimeout(() => {
              setIsFadingOut(true);
              setTimeout(() => {
                setIsHidden(true);
              }, 700); // matches transition-all duration-700
            }, 300); // allow user to briefly see 100% completion
            return 100;
          }
          return Math.min(prev + 15, 100);
        } else {
          // If still loading, increment slowly up to 90%
          if (prev >= 90) {
            return 90;
          }
          return prev + Math.random() * 5 + 1;
        }
      });
    }, 100);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-all duration-700 ease-in-out select-none ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
    >
      <div className="flex flex-col items-center max-w-xs text-center">
        {/* Wishes Logo with subtle pulse animation */}
        <div className="mb-8 transform scale-90 animate-pulse duration-[2000ms]">
          <img
            src="/logo/wishes%20logo.png"
            alt="Wishes Logo"
            className="h-16 w-auto object-contain brightness-0"
          />
        </div>

        {/* Custom Progress Bar */}
        <div className="w-56 h-[3px] bg-gray-200/60 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-black transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <span className="mt-4 font-jost text-xs tracking-[0.25em] text-black/70 uppercase font-medium antialiased">
          Loading {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
};

export default Preloader;
