import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import Login from "../components/Login";
import PriveteRoute from "../components/PriveteRoute";
import Profile from "../components/Profile";
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
      {
        path: "/profile",
        element: (
          <PriveteRoute>
            <Profile />
          </PriveteRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PriveteRoute>
            <Dashboard />
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
