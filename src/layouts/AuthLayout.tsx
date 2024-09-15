import React from "react";

interface AuthProps {
  children?: React.ReactNode;
}

const AuthLayout: React.FC<AuthProps> = ({ children }) => {
  return (
    <div
      id="auth-container"
      className="min-w-[50dvh] flex justify-center items-center border-4 border-success h-[100dvh]"
    >
      {children}
    </div>
  );
};

export default AuthLayout;
