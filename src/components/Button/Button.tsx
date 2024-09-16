import { ButtonHTMLAttributes, FC } from "react";
import "./Button.css";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: "small" | "normal" | "large" | string;
}

const Button: FC<ButtonProps> = (props) => {
  const { size } = props
  const buttonSize = size === "small" ? "btn-sm" : size === "large" ? "btn-lg" : "btn"
  return (
    <button {...props} className={`${buttonSize} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
