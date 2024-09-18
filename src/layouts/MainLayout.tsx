import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import { FC } from "react";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div id="main-container" className="h-screen">
      <Navbar />
      <div id="wrap" className="flex h-[calc(100%-56px)]">
        <Sidebar />
        <div id="content-container" className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
