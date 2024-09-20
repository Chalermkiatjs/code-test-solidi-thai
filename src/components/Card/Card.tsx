import React from "react";

// interface CardProps extends HTMLAttributes<HTMLElement> {}

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => {
  return (
    <div
      {...props}
      className={`min-w-14 min-h-8 p-3 bg-white shadow-sm rounded-xl ${className} `}
    >
      {children}
    </div>
  );
};

export default Card;
