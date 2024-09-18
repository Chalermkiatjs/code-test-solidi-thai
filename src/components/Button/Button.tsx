import { ButtonHTMLAttributes, FC, useEffect, useState } from "react";
import "./Button.css";

type ButtonSizeType = "small" | "medium" | "large" | "transparent" | string;
type ButtonColorType = "success" | "waring" | "error" | "info" | "default" | string;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  color?: ButtonColorType;
}

const Button: FC<ButtonProps> = (props) => {
  const { size = "medium", color = "default" } = props;
  const [buttonSize, setButtonSize] = useState<string | undefined>("");
  const [buttonColor, setButtonColor] = useState<string | undefined>("");

  useEffect(() => {
    setButtonColor(color);
  }, [color]);

  useEffect(() => {
    setButtonSize((prev) =>
      prev === "small" ? "btn-sm" : prev === "large" ? "btn-lg" : "btn"
    );
  }, [size]);
  return (
    <button
      {...props}
      className={`${buttonSize} bg-${buttonColor} hover:bg-${buttonColor}-dark ${
        props.className || ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
