import { FC, InputHTMLAttributes } from "react";
import "./InputField.css";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?:boolean;
  helperText?:string
}
const InputField: FC<InputProps> = (props) => {
  return <input {...props} className={`input ${props.className}`} />;
};

export default InputField;
