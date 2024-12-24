// Utils
import { cn } from "@/lib/utils";

// React
import React from "react";

export interface IInput {
  label?: string;
  name?: string;
  type?: HTMLInputElement["type"];
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  placeholder?: string;
  error?: string | undefined;
  touched?: boolean;
  id?: string;
  disabled?: boolean; // Added for disabling the input field in certain scenarios. Default is false.
}

const Input = ({
  className,
  label,
  name,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
  value,
  touched,
  id,
  disabled = false,
}: IInput) => {
  const isError = error && touched;

  return (
    <label htmlFor="input" className="md:w-auto w-full">
      <p className="text-text-primary font-medium text-sm mb-1">{label}</p>
      <input
        id={id}
        type={type}
        // id="input"
        name={name}
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        className={cn(
          "w-full ",
          "outline-none ring-0 border border-divider",
          "rounded-lg shadow-box-shadow",
          "px-3 py-2",
          className,
          disabled && "opacity-50 cursor-not-allowed",
          isError && "!border-red"
        )}
      />
      {isError && <p className="text-error text-red text-xs my-1">{error}</p>}
    </label>
  );
};

export default Input;
