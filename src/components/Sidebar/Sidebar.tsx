import { Navigation } from "configurations/navigation/navigation";
import { FC, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { useClickOutside } from "hooks/useClickOutside";

interface SidebarProps {
  toggleSidebar: boolean;
  isMobile: boolean;
  setToggleSidebar: (e: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({
  setToggleSidebar,
  toggleSidebar,
  isMobile,
}) => {
  const { pathname } = useLocation();
  const sidebarRef = useRef(null);
  const handleCloseSidebar = () => {
    if (toggleSidebar === true) {
      setToggleSidebar(false);
    }
  };
  useClickOutside(sidebarRef, handleCloseSidebar);

  return (
    <div ref={sidebarRef} id="side-bar-wrapper" className={`relative w-fit`}>
      <nav
        id="side-bar-container"
        className={`${
          isMobile && !toggleSidebar
            ? "hidden"
            : !isMobile
            ? "block"
            : "absolute z-10 shadow-lg"
        } side-bar-container`}
      >
        <ul className="list">
          {Navigation.filter((item) => item.path !== "/sign-in").map((item) => (
            <Link to={item.path} key={item.label}>
              <li
                className={`list-item ${
                  pathname === item.path
                    ? "bg-default text-white hover:bg-default-dark"
                    : "text-slate-600"
                }`}
              >
                <div className="flex items-center gap-x-3">
                  <div id="icon">{item.icon}</div>
                  <p id={item.label}>{item.label}</p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
