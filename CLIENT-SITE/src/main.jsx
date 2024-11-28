import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDeta from "./UserDeta.jsx";
let router = createBrowserRouter([{ path: "/", element: <App></App> },
  {path:"user",element:<UserDeta/>,loader:()=>fetch("http://localhost:5000/user")

}]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
