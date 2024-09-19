import { FC, HTMLAttributes } from "react";
import "./Card.css";

interface CardProps extends HTMLAttributes<HTMLElement> {}

const Card: FC<CardProps> = ({ children, className="", ...props }) => {
  return (
    <div {...props} className={`card ${className} `}>
      {children}
    </div>
  );
};

export default Card;
