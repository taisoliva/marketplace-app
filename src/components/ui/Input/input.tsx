import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, startContent, endContent, label, error, ...props },
    ref
  ) => {
    const autoId = `input-${type}-${props.name}`;
    return (
      <div className="group">
        <label
          htmlFor={autoId}
          className="text-gray-600 text-xs uppercase font-bold group-focus-within:text-primary"
        >
          {label}
        </label>
        <div className="flex border-b border-input border-gray-400  focus-within:border-orangeBase text-gray-400">
          {startContent && (
            <div className="pt-2 pl-2 transition-colors text-gray-400 group-focus-within:text-primary">
              {" "}
              {startContent}{" "}
            </div>
          )}
          <input
            id={autoId}
            type={type}
            className={cn(
              "flex h-9 w-full bg-transparent outline-none px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              className
            )}
            ref={ref}
            {...props}
          />
          {endContent && <div className="pt-2 pl-2"> {endContent} </div>}
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
