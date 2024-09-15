import { FC, LabelHTMLAttributes } from "react";
import "./InputLabel.css";
interface InputProps extends LabelHTMLAttributes<HTMLLabelElement> {}
const InputLabel: FC<InputProps> = (props) => {
  return (
    <label {...props} className={`label ${props.className} `}>
      {props.children}
    </label>
  );
};

export default InputLabel;
