import { Outlet } from "react-router";
import Navigation from "../components/navigation";

const RootLayout = () => {
  return (
    <div className="font-display flex flex-col">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
