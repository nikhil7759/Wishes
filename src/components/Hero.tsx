import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden bg-black font-jost h-[100vh]"

    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/Images/Sweets.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlays */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(180,120,200,0.35) 0%, rgba(220,160,200,0.15) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.25) 0%, transparent 50%)',
        }}
      />

      {/* Glassmorphism Content Card */}
      <div className="absolute inset-0 z-30 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div
            className="relative max-w-lg"
            style={{
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.25)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              padding: 'clamp(28px, 4vw, 48px)',
            }}
          >
            <h1
              className="font-jost font-light leading-[1.15]  mb-5"
              style={{
                fontSize: 'clamp(36px, 4.5vw, 36px)',
                color: '#fbede3',
              }}
            >
              <span className="font-burgues text-[65px]">T</span>aste the Magic of Wishes
            </h1>

            <p
              className="leading-relaxed mb-7 font-jost font-light"
              style={{
                fontSize: 'clamp(13px, 1.1vw, 15px)',
                color: '#fbede3',
                lineHeight: '1.7',
              }}
            >
              Wishes by Om Sweets creates delicious, high-quality treats that
              bring people together, making every moment sweeter with expertly
              crafted sweets, chocolates, and confections.
            </p>

            {/* <button
              className="group relative overflow-hidden font-jost font-medium uppercase tracking-[0.12em] cursor-pointer"
              style={{
                background:
                  'linear-gradient(135deg, #9b59b6 0%, #c06cc5 50%, #e080a0 100%)',
                color: '#fff',
                padding: '14px 36px',
                borderRadius: '50px',
                fontSize: '13px',
                border: 'none',
                boxShadow: '0 4px 20px rgba(155,89,182,0.4)',
              }}
            >
              <span className="relative z-10">Order Now</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    'linear-gradient(135deg, #8e44ad 0%, #a855a0 50%, #d070a0 100%)',
                }}
              />
            </button> */}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{
          height: '120px',
          background:
            'linear-gradient(to top, rgba(255,255,255,0.6) 0%, transparent 100%)',
        }}
      />
    </section>
  );
};

export default Hero;
