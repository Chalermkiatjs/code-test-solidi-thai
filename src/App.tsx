import React from "react";
import "App.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "routers/routers";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <RouterProvider router={routers} />
    </React.Fragment>
  );
};

export default App;
