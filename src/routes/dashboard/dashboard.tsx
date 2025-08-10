import Feed from "../../components/dashboard/feed";
import Friends from "../../components/dashboard/friends";

const Dashboard = () => {
  return (
    <div className="w-1/2 self-center">
      <div className="grid grid-cols-2 gap-2">
        <Feed />
        <Friends />
      </div>
    </div>
  );
};

export default Dashboard;
