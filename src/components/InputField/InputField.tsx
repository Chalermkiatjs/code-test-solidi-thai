import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
  label?: string;
}
const InputField: FC<InputProps> = ({
  label,
  className,
  error,
  helperText,
  ...props
}) => {
  return (
    <div className="flex flex-col align-middle">
      <div className="flex">
        {label && <p className="my-auto mx-2">{label}</p>}
        <input
          {...props}
          className={`w-3/4 px-3 py-2 rounded-md border-slate-light ring-1 ring-inset focus:outline-none focus:ring-2 ${className} ${
            error
              ? "ring-error focus:ring-error"
              : "ring-slate-light focus:ring-default"
          }`}
        />
      </div>
      {helperText && (
        <p
          className={`my-auto mx-2 text-[12px] ${
            error ? "text-error" : "text-slate-600"
          }`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default InputField;
