const base =
  "py-2 px-4 rounded-sm text-sm cursor-pointer transition duration-150 text-center";

const variants: Record<string, string> = {
  default: `${base} bg-plum text-white hover:bg-white hover:text-plum`,
  invert: `${base} bg-white text-plum hover:bg-plum hover:text-white`,
  outlined: `${base} border-white border text-white hover:bg-white hover:text-plum`,
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant: string;
}

const Button = ({ children, variant = "default", ...props }: ButtonProps) => {
  return (
    <button className={`${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
