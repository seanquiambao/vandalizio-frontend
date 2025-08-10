import Subheader from "../ui/subheader";
import ThreadCard from "./thread-card";

const Feed = () => {
  return (
    <div>
      <Subheader title="Feed" divider />
      <div className="flex flex-col gap-2 mt-2">
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
        <ThreadCard />
      </div>
    </div>
  );
};

export default Feed;
