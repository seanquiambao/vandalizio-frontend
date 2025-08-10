import Subheader from "../ui/subheader";
import DrawingCard from "./drawing-card";

const Feed = () => {
  return (
    <div>
      <Subheader title="Feed" divider />
      <div className="flex flex-col gap-2 mt-2">
        <DrawingCard />
        <DrawingCard />
        <DrawingCard />
        <DrawingCard />
      </div>
    </div>
  );
};

export default Feed;
