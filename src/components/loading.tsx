import { LoaderCircle } from "lucide-react";

type LoadingProps = {
  message: string;
};
const Loading = ({ message }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-3xl font-bold text-plum">{message}</p>
      <LoaderCircle className="animate-spin text-plum" />
    </div>
  );
};

export default Loading;
