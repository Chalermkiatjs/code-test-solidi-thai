import React, { FC, LabelHTMLAttributes } from "react";

type InputProps = {
  children:React.ReactNode
  className?:string
}
const InputLabel: FC<InputProps> = (props) => {
  return (
    <label {...props} className={`m-1 ${props.className} `}>
      {props.children}
    </label>
  );
};

export default InputLabel;
