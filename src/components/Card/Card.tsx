import { FC, HTMLAttributes } from "react";
import "./Card.css";

interface CardProps extends HTMLAttributes<HTMLElement> {}

const Card: FC<CardProps> = (props) => {
  return (
    <div {...props} className={`card ${props.className} `}>
      {props.children}
    </div>
  );
};

export default Card;
