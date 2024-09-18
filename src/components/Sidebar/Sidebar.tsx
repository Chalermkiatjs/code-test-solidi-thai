import { Navigation } from "configurations/navigation/navigation";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: FC = () => {
  const { pathname } = useLocation();

  return (
    <div id="side-bar-wrapper" className="relative w-fit">
      <nav id="side-bar-container" className="side-bar-container">
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
                  <div id="icon" >{item.icon}</div>
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
