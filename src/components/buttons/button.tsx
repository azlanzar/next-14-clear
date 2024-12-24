// Libs Imports
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

// React & next Imports
import Image from "next/image";

interface IButton {
  text: string;
  type?: "submit" | "button";
  onClick?: () => void;
  className?: string;
  isOutline?: boolean;
  redirectURL?: string;
  disabled?: boolean;
  isIcon?: boolean;
  size?: "sm" | "md" | "lg";
}

const Button = ({
  text,
  onClick,
  type,
  className,
  isOutline,
  redirectURL,
  disabled,
  isIcon,
}: IButton) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        `${isOutline ? "border border-divider bg-transparent text-text-primary" : "bg-primary text-white"}`,
        "font-medium text-sm",
        "w-fit h-11 ",
        "px-6 py-2",
        "rounded-lg",
        "flex items-center justify-center gap-x-3",
        className
      )}
    >
      {isIcon && <Plus size={16} />}
      {text}
    </button>
  );
};

export default Button;
