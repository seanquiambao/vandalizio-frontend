type FriendCardProps = {
  username: string;
  imageSrc: string;
};

const FriendCard = ({ username, imageSrc }: FriendCardProps) => {
  return (
    <div className="flex gap-2 items-enter p-2">
      <img src={imageSrc} alt="friend" className="rounded-full" />
      <div className="text-lg text-black font-semibold">{username}</div>
    </div>
  );
};

export default FriendCard;
