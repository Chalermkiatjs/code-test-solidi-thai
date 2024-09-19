import { FC, InputHTMLAttributes } from "react";
import "./InputField.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  label?: string;
}
const InputField: FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className="flex align-middle">
      {label && <p className="my-auto mx-2">{label}</p>}
      <input {...props} className={`input ${className}`} />
    </div>
  );
};

export default InputField;
