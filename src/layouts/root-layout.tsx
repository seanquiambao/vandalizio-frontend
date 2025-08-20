import { Outlet } from "react-router";
import Navigation from "../components/navigation";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div className="font-display flex flex-col">
      <Toaster />
      <Navigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
