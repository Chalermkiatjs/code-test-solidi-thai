import React from "react";

interface AuthProps {
  children?: React.ReactNode;
}

const AuthLayout: React.FC<AuthProps> = ({ children }) => {
  return (
    <div
      id="auth-container"
      className="flex justify-center items-center border-4 border-success h-[100dvh]"
    >
      {children}
    </div>
  );
};

export default AuthLayout;
