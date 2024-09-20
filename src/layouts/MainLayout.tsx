import Navbar from "components/Navbar/Navbar";
import Sidebar from "components/Sidebar/Sidebar";
import { useAuth } from "hooks/useAuth";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 830px)" });
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setToggleSidebar((prev) => !prev);
  };

  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    }
  }, [token, navigate]);

  return (
    <div
      id="main-container"
      className="h-screen w-screen max-h-screen max-w-[100vw]"
    >
      <Navbar isMobile={isMobile} handleToggleSidebar={handleToggleSidebar} />
      <div id="wrap" className="flex h-[calc(100%-56px)] w-full">
        <Sidebar
          isMobile={isMobile}
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        />
        <div
          id="content-container"
          className={`p-4  ${
            isMobile && toggleSidebar
              ? "w-full md:max-w-full lg:max-w-[calc(100%-260px)]"
              : "w-full"
          } overflow-auto`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
