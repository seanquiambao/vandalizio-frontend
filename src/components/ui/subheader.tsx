type SubheaderProps = {
  title: string;
  divider?: boolean;
};
const Subheader = ({ title, divider = false }: SubheaderProps) => {
  return (
    <>
      <div className="text-2xl text-black mb-2 font-bold">{title}</div>
      {divider && <hr className="solid border-gray" />}
    </>
  );
};

export default Subheader;
