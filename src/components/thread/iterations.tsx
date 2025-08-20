import Subheader from "../ui/subheader";
import Iteration from "./iteration";

const Iterations = () => {
  return (
    <div className="text-left w-full">
      <Subheader title="Iterations" />
      <div className="grid grid-cols-4 gap-y-4">
        <Iteration />
      </div>
    </div>
  );
};

export default Iterations;
