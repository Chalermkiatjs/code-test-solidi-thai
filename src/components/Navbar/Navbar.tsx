import Button from "components/Button/Button";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDropdownCircle, IoIosNotifications } from "react-icons/io";
import { FC, useEffect, useRef, useState } from "react";
import { userMenu } from "configurations/navigation/userMenu";
import { Link } from "react-router-dom";
import { useClickOutside } from "hooks/useClickOutside";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (props) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const openMenu = isOpenMenu ? "opacity-100 visible" : "opacity-0 invisible";
  const handleOpenMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };
  const handleCloseMenu = () => {
    if (isOpenMenu === true) {
      setIsOpenMenu(false);
    }
  };
  useClickOutside(menuRef, handleCloseMenu);
  return (
    <div
      id="nav-bar-container"
      className="flex items-center justify-between h-14 w-full py-2 px-4 bg-white"
    >
      <div className="my-auto mx-4">Logo</div>
      <div className="flex items-center relative">
        <div className="mr-4">
          <Button
            variant="text"
            className="text-slate-700 hover:bg-slate-200 rounded-full p-2"
          >
            <IoIosNotifications size={25} />
          </Button>
        </div>
        <div ref={menuRef}>
          <Button
            variant="text"
            onClick={handleOpenMenu}
            className=" flex items-center py-2 rounded-md text-slate-700 hover:bg-slate-200"
            size="small"
          >
            <div>
              <FaUserCircle size={30} />
            </div>
            <div className="flex flex-col ml-2 mr-4">
              <p className="font-medium text-sm">Username</p>
              <p className="text-[10px] leading-3 text-left">Admin</p>
            </div>
            <div
              className={
                isOpenMenu
                  ? "-rotate-180 text-slate-700 transition ease-in-out duration-300"
                  : "-rotate-0 text-slate-700 transition ease-in-out duration-300"
              }
            >
              <IoIosArrowDropdownCircle />
            </div>
          </Button>
        </div>
        <div
          id="user-menu"
          className={`${openMenu} transition-all ease-in-out duration-300 absolute -bottom-[6.5rem] right-0 bg-white w-[80%] rounded-md shadow-sm`}
        >
          <ul className="my-2 px-2">
            {userMenu.map((item) => (
              <Link to={item.path} key={item.label}>
                <li className="p-2 my-1 text-slate-700 bg-opacity-100 rounded-md hover:bg-gray-400 hover:bg-opacity-10 transition ease-in-out duration-300">
                  <div className="flex items-center gap-x-3">
                    <div id="icon">{item.icon}</div>
                    <p id={item.label}>{item.label}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
