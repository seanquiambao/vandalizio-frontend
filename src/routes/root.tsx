import { Link } from "react-router";

const Root = () => {
  return (
    <div className="text-2xl flex flex-col">
      Root
      <Link to="dashboard">Dashboard</Link>
      <Link to="thread">Thread</Link>
      <Link to="drawing">Drawing</Link>
    </div>
  );
};

export default Root;
