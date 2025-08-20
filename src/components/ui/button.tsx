const base =
  "py-2 px-4 rounded-sm text-sm font-bold cursor-pointer transition duration-150 text-center";

const variants: Record<string, string> = {
  default: `${base} bg-plum text-white hover:brightness-105`,
  invert: `${base} bg-white text-plum hover:bg-plum hover:text-white`,
  outlined: `${base} border-white border text-white hover:bg-white hover:text-plum`,
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: string;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button = ({
  children,
  variant = "default",
  type = undefined,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${variants[variant]}`}
      {...(type && { type })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
