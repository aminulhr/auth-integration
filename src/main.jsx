import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import PriveteRoute from "../components/PriveteRoute";
import Register from "../components/Register";
import Root from "../components/Root";
import AuthProvider from "../ContextApi/AuthProvider";
import Orders from "./../components/Orders";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/orders",
        element: (
          <PriveteRoute>
            <Orders />
          </PriveteRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
