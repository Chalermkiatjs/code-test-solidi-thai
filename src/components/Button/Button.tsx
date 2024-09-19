import { ButtonHTMLAttributes, FC, useEffect, useState } from "react";
import "./Button.css";

type ButtonSizeType = "small" | "medium" | "large";
type ButtonColorType = "success" | "waring" | "error" | "info" | "default";
type ButtonVariant = "outlined" | "contained" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  color?: ButtonColorType;
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    size = "medium",
    color = "default",
    className = "",
    children,
    variant,
  } = props;
  const [buttonSize, setButtonSize] = useState<string | undefined>("medium");
  const [buttonColor, setButtonColor] = useState<{ [key: string]: string }>({
    color: "",
    hover: "",
  });
  const [buttonTextColor, setButtonTextColor] = useState<string | undefined>(
    "text-white"
  );

  useEffect(() => {
    if (variant !== "text") {
      setButtonTextColor("text-white");
      setButtonColor({ color, hover: color });
    } else {
      setButtonTextColor("text-slate-700");
      setButtonColor({ color: "transparent", hover: "slate-200" });
    }
    setButtonSize((prev) =>
      prev === "small" ? "btn-sm" : prev === "large" ? "btn-lg" : "btn"
    );
  }, [color, size]);
  
  return (
    <button
      {...props}
      className={`${buttonSize} ${buttonTextColor} bg-${buttonColor.color} hover:bg-${buttonColor.hover}-dark ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
