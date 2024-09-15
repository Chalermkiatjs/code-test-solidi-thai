import React from "react";
import "App.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "routers/routers";

const App: React.FC = () => {
  return <RouterProvider router={routers} />;
};

export default App;
