import React, { ButtonHTMLAttributes, useEffect, useState } from "react";
import "./Button.css";

type ButtonSizeType = "small" | "medium" | "large";
type ButtonColorType = "success" | "waring" | "error" | "info" | "default";
type ButtonVariant = "outlined" | "contained" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  color?: ButtonColorType;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = (props) => {
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

    setButtonSize(() =>
      size === "small" ? "btn-sm" : size === "large" ? "btn-lg" : "btn"
    );
    
  }, [color, size, variant]);

  return (
    <button
      {...props}
      className={`${buttonSize} ${buttonTextColor} bg-${buttonColor.color} hover:bg-${buttonColor.hover}-dark ${className} disabled:bg-slate-500 flex justify-center items-center gap-2`}
    >
      {children}
    </button>
  );
};

export default Button;
