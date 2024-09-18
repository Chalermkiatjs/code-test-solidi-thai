import SignIn from "pages/Auth/SignIn";
import Home from "pages/Home/Home";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { MdAdminPanelSettings } from "react-icons/md";



export const Navigation = [
  {
    label: "Dashboard",
    path: "/",
    element: <Home />,
    icon:<RiDashboardHorizontalFill size={15}/>,
  },
  {
    label: "Admin",
    path: "/admin",
    element: <Home />,
    icon: <MdAdminPanelSettings size={15}/>
  },
  {
    label: "Settings",
    path: "/settings",
    element: <Home />,
    icon: <VscSettings size={15}/>
  },
  {
    label: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
];
