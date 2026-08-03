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
    { to: 'https://instagram.com', label: 'Instagram', isExternal: true, isIcon: true },
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
        className={`fixed top-0 left-0 h-full w-[300px] bg-[#1a0e05] text-white z-[70] shadow-2xl transition-transform duration-300 ease-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button onClick={() => setIsOpen(false)} className="focus:outline-none hover:opacity-70 transition-opacity p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col px-10 gap-6 text-[15px] capitalize font-jost font-light">
          {navLinks.map((link) => (
            link.isExternal ? (
              <a key={link.to} href={link.to} target="_blank" rel="noopener noreferrer" className="hover:text-[#d1b19a] transition-colors py-2 border-b border-white/10 flex items-center gap-3" onClick={() => setIsOpen(false)}>
                {link.isIcon ? (
                  <>
                    {instagramSvg}
                    <span>Instagram</span>
                  </>
                ) : link.label}
              </a>
            ) : (
              <Link key={link.to} to={link.to} className="hover:text-[#d1b19a] transition-colors py-2 border-b border-white/10" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
