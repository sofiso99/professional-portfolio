import { ReactNode } from "react";

export const Button = ({
  icon,
  text,
  onClick,
  variant,
  style,
}: {
  icon?: ReactNode;
  text: string;
  onClick?: () => void;
  variant?: string;
  style?:string;
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-lg px-2 py-2 cursor-pointer 
    ${
      variant === "black" 
        ? "bg-black text-white border-0 hover:bg-gray-900 hover:-translate-y-1"
        : "border border-gray-300 hover:bg-gray-100 text-black "
    } ${style}
  `}
      onClick={onClick}
    >
      {icon}
      {text}
    </div>
  );
};
