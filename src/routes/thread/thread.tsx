import Iterations from "../../components/thread/iterations";
import Information from "../../components/thread/information";
import Panel from "../../components/thread/panel";

const Thread = () => {
  return (
    <div className="w-3/4 self-center text-center">
      <Information />
      <Panel />
      <Iterations />
    </div>
  );
};

export default Thread;
