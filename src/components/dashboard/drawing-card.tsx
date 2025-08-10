import Subheader from "../ui/subheader";

const DrawingCard = () => {
  const cardStyle = "rounded-md border-gray border";
  return (
    <div className={`${cardStyle} flex gap-2 p-2`}>
      <img
        src="https://www.w3schools.com/images/img_girl.jpg"
        width={150}
        height={150}
        alt="hello"
      />
      <div className="flex flex-col justify-center">
        <Subheader title="Username" />
        <div className="text-black font-semibold text-lg">
          has started a thread
        </div>
        <div className="text-md text-black">35 minutes ago</div>
      </div>
    </div>
  );
};

export default DrawingCard;
