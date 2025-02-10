import { bgColors, Color } from "@/shared";
import { FC, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  className?: string;
  bgColor?: Color;
  onClick?: () => void;
  rounded?: string;
  type?: string;
}

export const Button: FC<ButtonProps> = ({
  type = "",
  children,
  onClick,
  bgColor = "main",
  className = "",
  rounded = "rounded-lg",
}) => {
  const bgClass = bgColors[bgColor] || "";

  const classes = `items-center whitespace-nowrap gap-1 py-3 px-4 hover:bg-opacity-50 text-[14px] font-medium ${className} ${bgClass} ${rounded}`;

  if (type === "text") {
    return (
      <button
        onClick={onClick}
        className={`text-${bgColor} hover:text-${bgColor} ${classes}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
