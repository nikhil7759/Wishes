import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f0e5] py-16 px-6 md:px-16 lg:px-24 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12 items-start">

          {/* LEFT SIDE: LOGO, DESCRIPTION & CONTACT */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            {/* Logo brightness-0 turns the red logo black for premium luxury contrast */}
            <a href="/" className="mb-6 block">
              <img
                src="/logo/wishes%20logo1.png"
                alt="Wishes Logo"
                className="h-16 w-auto object-contain"
              />
            </a>

            {/* Brand Description */}
            <p className="font-jost font-light text-[14px] md:text-[15px] leading-relaxed text-black max-w-md">
              Indulge in luxury with every bite at WishesIndia, where tradition meets exquisite taste. Our handcrafted sweets are made with the finest ingredients, perfect for every occasion.
            </p>

            {/* Contact Information */}
            <div className="mt-6 font-jost text-[14px] md:text-[15px] text-black space-y-1">
              <span className="block font-medium">Contact us at</span>
              <a
                href="mailto:info@wishesindia.com"
                className="block hover:underline transition-colors duration-200"
              >
                info@wishesindia.com
              </a>
              <a
                href="tel:+919289714461"
                className="block hover:underline transition-colors duration-200"
              >
                +91 9289714461
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: COLUMN 1 (EXPLORE) */}
          <div className="md:col-span-3 flex flex-col items-start gap-3 md:mt-2">
            <span className="font-jost font-medium text-[11px] uppercase tracking-[0.2em] text-[#b49377] mb-1">
              Explore
            </span>
            <Link to="/" className="font-jost text-[14px] md:text-[15px] text-black hover:underline transition-all">
              Home
            </Link>
            <Link to="/shop" className="font-jost text-[14px] md:text-[15px] text-black hover:underline transition-all">
              Shop Menu
            </Link>
            <Link to="/bulk-order" className="font-jost text-[14px] md:text-[15px] text-black hover:underline transition-all">
              Bulk Order
            </Link>
            <a
              href="https://airmenus.in/wishes/order"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost text-[14px] md:text-[15px] text-black hover:underline transition-all"
            >
              Order Online
            </a>
            <Link to="/contact" className="font-jost text-[14px] md:text-[15px] text-black hover:underline transition-all">
              Contact Us
            </Link>
          </div>

          {/* RIGHT SIDE: COLUMN 2 (POLICIES) */}
          <div className="md:col-span-4 flex flex-col items-start gap-3 md:mt-2">
            <span className="font-jost font-medium text-[11px] uppercase tracking-[0.2em] text-[#b49377] mb-1">
              Customer Care &amp; Policies
            </span>
            <Link to="/shipping" className="font-jost text-[14px] md:text-[15px] text-black hover:underline transition-all">
              Shipping Policy
            </Link>
            <Link to="/cancellation" className="font-jost text-[14px] md:text-[15px] text-black hover:underline transition-all">
              Cancellation &amp; Refund Policy
            </Link>
            <Link to="/account-deletion" className="font-jost text-[14px] md:text-[15px] text-black hover:underline transition-all">
              Account Deletion Policy
            </Link>
            <Link to="/privacy" className="font-jost text-[14px] md:text-[15px] text-black hover:underline transition-all">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-jost text-[14px] md:text-[15px] text-black hover:underline transition-all">
              Terms &amp; Conditions
            </Link>
          </div>

        </div>

        {/* Bottom Bar: Copyright on Left, Policies & Socials on Right */}
        <div className="border-t border-black/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-jost text-[13px] md:text-[14px] text-black font-light order-2 md:order-1 text-center md:text-left">
            © {new Date().getFullYear()} Wishes by Om Sweets. All rights reserved.
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 order-1 md:order-2">
            {/* Privacy Policy & Terms of Conditions */}
            <div className="flex items-center gap-4 font-jost text-[13px] md:text-[14px] text-black font-light">
              <Link to="/privacy" className="hover:underline transition-colors">Privacy Policy</Link>
              <span className="text-black/30 select-none">|</span>
              <Link to="/terms" className="hover:underline transition-colors">Terms &amp; Conditions</Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/wishes.india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <defs>
                    <radialGradient id="instagram-gradient" r="150%" cx="30%" cy="107%">
                      <stop stopColor="#fdf497" offset="0%" />
                      <stop stopColor="#fdf497" offset="5%" />
                      <stop stopColor="#fd5949" offset="45%" />
                      <stop stopColor="#d6249f" offset="60%" />
                      <stop stopColor="#285AEB" offset="90%" />
                    </radialGradient>
                  </defs>
                  <path
                    fill="url(#instagram-gradient)"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051c-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61592080582387"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-md"
                aria-label="Facebook"
              >
                <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Studio Design Credit Line */}
        <div className="mt-10 pt-6 border-t border-black/10 text-center font-jost text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-[#5a4d41]">
          DESIGNED BY <span className="cursor-pointer underline underline-offset-4 font-normal hover:opacity-80 transition-opacity">MADLYN STUDIO DE DESIGN</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
