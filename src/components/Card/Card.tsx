import React, { HTMLAttributes } from "react";
import "./Card.css";

interface CardProps extends HTMLAttributes<HTMLElement> {}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div {...props} className={`card ${props.className} `}>
      {props.children}
    </div>
  );
};

export default Card;
