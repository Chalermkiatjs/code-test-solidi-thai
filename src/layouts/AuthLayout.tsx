import { FC } from "react";

interface AuthLayoutProps {
  children?: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div
      id="auth-container"
      className="min-w-[50dvh] h-screen flex justify-center items-center border-4 border-success"
    >
      {children}
    </div>
  );
};

export default AuthLayout;
