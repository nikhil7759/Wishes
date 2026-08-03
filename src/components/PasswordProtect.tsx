import React, { useState, useEffect } from 'react';

interface PasswordProtectProps {
  children: React.ReactNode;
}

const PasswordProtect: React.FC<PasswordProtectProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const access = sessionStorage.getItem('site_access');
    if (access === 'granted') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'madlybykanika') {
      sessionStorage.setItem('site_access', 'granted');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#f8f0e5] font-jost">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl max-w-md w-full mx-4 text-center border border-[#e5d5c5]">
        <img
          src="/logo/wishes%20logo1.png"
          alt="Wishes Logo"
          className="h-16 w-auto object-contain mx-auto mb-8"
        />
        <h2 className="text-2xl text-[#2c1f18] font-light mb-2">Private Access</h2>
        <p className="text-sm text-[#6b5a4e] mb-8">Please enter the password to view this website.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter password"
              className={`w-full bg-[#faf7f4] border ${error ? 'border-red-400' : 'border-[#e5d5c5]'} focus:border-[#c19e6e] focus:bg-white focus:ring-1 focus:ring-[#c19e6e] rounded-md px-4 py-3 text-sm text-[#2c1f18] placeholder-[#a8978a] outline-none transition-all duration-300`}
            />
            {error && <p className="text-red-500 text-xs text-left mt-2 ml-1">Incorrect password. Please try again.</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#b49377] hover:bg-[#9a7b60] text-white uppercase text-xs tracking-widest py-3.5 rounded-md transition-colors duration-300 mt-2"
          >
            Enter Website
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtect;
