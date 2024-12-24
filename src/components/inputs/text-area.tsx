import React from "react";

interface ITextArea {
  label?: string;
  name?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  placeholder?: string;
  error?: string | undefined;
  touched?: boolean;
}

const TextArea = ({
  label,
  className,
  error,
  name,
  onBlur,
  onChange,
  placeholder,
  touched,
  value,
}: ITextArea) => {
  const isError = error && touched;

  return (
    <label className="min-w-full" htmlFor={name}>
      <p className="text-text-primary font-medium text-sm mb-1">{label}</p>
      <textarea
        value={value}
        id={name}
        placeholder={placeholder}
        name={name}
        onChange={
          onChange as unknown as React.ChangeEventHandler<HTMLTextAreaElement>
        }
        onBlur={
          onBlur as unknown as React.ChangeEventHandler<HTMLTextAreaElement>
        }
        className={`${isError ? "!border-red" : "border-divider"} outline-none rounded-lg px-4 py-2 !bg-transparent shadow-box-shadow caret-primary  border min-h-[180px] w-full ${className}`}
      />
      {isError && <p className="text-error text-red text-xs">{error}</p>}
    </label>
  );
};

export default TextArea;
