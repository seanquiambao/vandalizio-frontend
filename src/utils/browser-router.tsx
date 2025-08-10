import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/root-layout";
import Root from "../routes/root";
import Dashboard from "../routes/dashboard/dashboard";
import Thread from "../routes/thread/thread";

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
