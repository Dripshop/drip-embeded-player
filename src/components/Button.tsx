import React from "react";

const Button: React.FC<
  React.PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-white font-semibold rounded-full border-2 border-black/60 hover:border-black p-2 px-4 cursor-pointer transition-colors ${className}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
