import { FiLogOut } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

export const userMenu = [
  {
    label: "Profile",
    path: "/",
    icon:<FaUser size={15}/>,
  },
  {
    label: "Log out",
    path: "/sign-in",
    icon: <FiLogOut size={15}/>
  },
];
