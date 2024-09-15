import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button {...props} className={`btn ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
