import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDeta from "./UserDeta.jsx";
import Updete from "./Updete.jsx";
let router = createBrowserRouter([
  { path: "/", element: <App></App> },
  {
    path: "user",
    element: <UserDeta />,
    loader: () => fetch("http://localhost:3000/user"),
  },
  {
    path: "updete/:id",
    element: <Updete />,
    loader: ({ params }) => fetch(`http://localhost:3000/user/${params.id}`),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
