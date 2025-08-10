type TitleProps = {
  title: string;
  divider?: boolean;
};
const Title = ({ title, divider = false }: TitleProps) => {
  return (
    <>
      <div className="text-6xl text-black mb-2 font-bold">{title}</div>
      {divider && <hr className="solid border-gray" />}
    </>
  );
};

export default Title;
