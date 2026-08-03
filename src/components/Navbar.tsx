import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Transparent at the very top of home page, otherwise white background
  const isTransparent = isHome && !scrolled;
  const navBg = isTransparent ? 'bg-transparent text-white' : 'bg-[#f8f0e5] text-[#5a4d41] shadow-md';
  const transformClass = isVisible ? 'translate-y-0' : '-translate-y-full';

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/bulk-order', label: 'Bulk Order' },

    { to: '/contact', label: 'Contact' },
    { to: 'https://airmenus.in/wishes/order', label: 'Order Online', isExternal: true },
    { to: 'https://www.instagram.com/wishes.india/', label: 'Instagram', isExternal: true, isIcon: true },
  ];

  const instagramSvg = (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051c-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );

  return (
    <>
      <nav className={`w-full fixed top-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between font-jost capitalize text-[12px] md:text-[13px] transition-all duration-300 ${navBg} ${transformClass}`}>
        {/* Left Area */}
        <div className="flex items-center gap-5 xl:gap-6 flex-1">
          {/* Mobile Hamburger */}
          <button onClick={() => setIsOpen(true)} className="lg:hidden focus:outline-none hover:opacity-70 transition-opacity flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16M4 15h16" />
            </svg>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.slice(0, 3).map((link) => (
              link.isExternal ? (
                <a key={link.to} href={link.to} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity whitespace-nowrap uppercase">
                  {link.isIcon ? instagramSvg : link.label}
                </a>
              ) : (
                <Link key={link.to} to={link.to} className="hover:opacity-70 transition-opacity whitespace-nowrap uppercase">
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center items-center">
          <Link to="/" className="flex flex-col items-center">
            <img src="/logo/wishes%20logo1.png" alt="Wishes Logo" className="h-10 md:h-15 w-auto object-contain transition-all duration-300" decoding="async" />
            {/* <span className="mt-1 text-[8px] md:text-[9px] tracking-[0.3em]">By Om Sweets</span> */}
          </Link>
        </div>

        {/* Right Area */}
        <div className="flex items-center justify-end gap-5 xl:gap-6 flex-1">
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.slice(3, 6).map((link) => (
              link.isExternal ? (
                <a key={link.to} href={link.to} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity whitespace-nowrap uppercase flex items-center gap-1.5" aria-label={link.label}>
                  {link.isIcon ? instagramSvg : link.label}
                </a>
              ) : (
                <Link key={link.to} to={link.to} className="hover:opacity-70 transition-opacity whitespace-nowrap uppercase">
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </nav>

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] sm:w-[320px] bg-[#1a0e05] text-white z-[70] shadow-2xl transition-transform duration-300 ease-out transform flex flex-col justify-between overflow-y-auto select-none ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header with Logo & Close Button */}
        <div className="relative z-10 px-6 pt-6 pb-5 flex items-center justify-between border-b border-white/10">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            <img
              src="/logo/wishes%20logo1.png"
              alt="Wishes Logo"
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-white/70 hover:text-white transition-colors p-1"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="relative z-10 flex-1 px-8 py-8 flex flex-col gap-1 font-jost">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c19e6e] font-medium mb-3 opacity-90">
            Navigation Menu
          </span>

          {navLinks.map((link, idx) => {
            const formattedIndex = String(idx + 1).padStart(2, '0');
            const isActive = location.pathname === link.to;

            return link.isExternal ? (
              <a
                key={link.to}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group py-3 flex items-center justify-between border-b border-white/5 transition-all duration-300 hover:pl-2"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-mono tracking-widest text-[#c19e6e]/60 group-hover:text-[#c19e6e] transition-colors">
                    {formattedIndex}
                  </span>
                  <span className="text-[15px] uppercase tracking-[0.18em] font-light text-[#f5ede0] group-hover:text-[#d4ad70] transition-colors flex items-center gap-2.5">
                    {link.isIcon ? (
                      <>
                        {instagramSvg}
                        <span>Instagram</span>
                      </>
                    ) : (
                      link.label
                    )}
                  </span>
                </div>
                <svg className="w-3.5 h-3.5 text-[#c19e6e]/40 group-hover:text-[#c19e6e] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`group py-3 flex items-center justify-between border-b border-white/5 transition-all duration-300 hover:pl-2 ${isActive ? 'text-[#c19e6e]' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-mono tracking-widest text-[#c19e6e]/60 group-hover:text-[#c19e6e] transition-colors">
                    {formattedIndex}
                  </span>
                  <span className={`text-[15px] uppercase tracking-[0.18em] font-light group-hover:text-[#d4ad70] transition-colors ${isActive ? 'text-[#c19e6e] font-normal' : 'text-[#f5ede0]'}`}>
                    {link.label}
                  </span>
                </div>
                {isActive ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c19e6e]" />
                ) : (
                  <svg className="w-3.5 h-3.5 text-white/20 group-hover:text-[#c19e6e] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                )}
              </Link>
            );
          })}
        </div>

        {/* Bottom Concierge / Social Block */}
        <div className="relative z-10 px-8 pb-8 pt-4 border-t border-white/10 flex flex-col gap-4 font-jost">
          <a
            href="https://airmenus.in/wishes/order"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-gradient-to-r from-[#d4ad70] to-[#c19e6e] text-[#1a0e05] uppercase text-[11px] font-medium tracking-[0.2em] py-3.5 rounded-sm hover:opacity-90 transition-opacity shadow-lg"
          >
            Order Online Now
          </a>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[11px] uppercase tracking-widest text-[#a8978a] font-light">
              Follow Us
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/wishes.india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-[#c19e6e]/30 flex items-center justify-center text-[#c19e6e] hover:bg-[#c19e6e] hover:text-[#1a0e05] transition-all"
                aria-label="Instagram"
              >
                {instagramSvg}
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61592080582387"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-[#c19e6e]/30 flex items-center justify-center text-[#c19e6e] hover:bg-[#c19e6e] hover:text-[#1a0e05] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
