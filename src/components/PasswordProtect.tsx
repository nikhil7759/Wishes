import React from 'react';

interface PasswordProtectProps {
  children: React.ReactNode;
}

const PasswordProtect: React.FC<PasswordProtectProps> = ({ children }) => {
  return <>{children}</>;
};

export default PasswordProtect;

