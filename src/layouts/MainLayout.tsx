import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import { FC } from "react";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      id="main-container"
      className="h-screen w-screen max-h-screen max-w-[100vw]"
    >
      <Navbar />
      <div id="wrap" className="flex h-[calc(100%-56px)] w-full">
        <Sidebar />
        <div
          id="content-container"
          className="p-4 w-full max-w-[calc(100%-260px)] overflow-auto"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
