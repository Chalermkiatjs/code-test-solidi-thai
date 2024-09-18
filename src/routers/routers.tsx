import { Navigation } from "configurations/navigation/navigation";
import { userMenu } from "configurations/navigation/userMenu";
import { createBrowserRouter } from "react-router-dom";

export const routers = createBrowserRouter(Navigation);

export const userMenuRouters = createBrowserRouter(userMenu)
