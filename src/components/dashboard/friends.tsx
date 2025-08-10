import Subheader from "../ui/subheader";
import FriendCard from "./friend-card";

const Friends = () => {
  return (
    <div className="w-1/2">
      <Subheader title="Friends" divider />
      <FriendCard username="paparoxii03" imageSrc="" />
    </div>
  );
};

export default Friends;
