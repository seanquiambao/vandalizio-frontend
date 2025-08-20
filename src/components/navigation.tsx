import { Link, useNavigate } from "react-router";
import Button from "./ui/button";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between bg-plum text-white py-4 px-2 sticky-0 text-2xl">
      <Link to="/">VANDALIZ.IO</Link>
      <div className="flex flex-row gap-2">
        <Button variant="outlined" onClick={() => navigate("/login")}>
          login
        </Button>
        <Button variant="invert" onClick={() => navigate("/register")}>
          register
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
