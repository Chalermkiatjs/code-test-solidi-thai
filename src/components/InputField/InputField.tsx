import React, { InputHTMLAttributes } from "react";
import "./InputField.css";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
const InputField: React.FC<InputProps> = (props) => {
  return <input {...props} />;
};

export default InputField;
