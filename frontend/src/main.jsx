import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignUp/SignIn.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";

const router = createBrowserRouter([
  {
    path: "/kaizen-portfolio/",
    element: <App />,
  },
  {
    path: "/kaizen-portfolio/login",
    element: <LogIn />,
  },
  {
    path: "/kaizen-portfolio/signin",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
