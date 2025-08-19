import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/root-layout";
import Root from "../routes/root";
import Dashboard from "../routes/dashboard/dashboard";
import Thread from "../routes/thread/thread";
import Login from "../routes/login/login";
import Register from "../routes/register/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/thread",
        element: <Thread />,
      },
    ],
  },
]);
