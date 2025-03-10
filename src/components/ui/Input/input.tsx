import * as React from "react";
import { cn } from "@/lib/utils";
import { InputMask } from "@react-input/mask";
import { InputNumberFormat } from "@react-input/number-format";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  label?: string;
  error?: string;
  mask?: string;
  replacement?: { _: RegExp };
  format?: string;
  decimalSeparator?: string;
  thousandSeparator?: string;
  precision?: number;
  locale?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      startContent,
      endContent,
      label,
      error,
      mask,
      replacement,
      format,
      ...props
    },
    ref
  ) => {
    const autoId = `input-${type}-${props.name}`;

    const InputElement = getInputElement({ mask, format });

    return (
      <div className="group">
        <label
          htmlFor={autoId}
          className="text-gray-600 text-xs uppercase font-bold group-focus-within:text-primary"
        >
          {label}
        </label>
        <div className="flex border-b border-input border-gray-400 focus-within:border-orangeBase text-gray-400">
          {startContent && (
            <div className="pt-2 pl-2 transition-colors text-gray-400 group-focus-within:text-primary">
              {startContent}
            </div>
          )}
          <InputElement
            id={autoId}
            type={type}
            mask={mask}
            replacement={replacement}
            decimalSeparator={props.decimalSeparator}
            thousandSeparator={props.thousandSeparator}
            maximumFractionDigits={props.precision}
            locales={props.locale}
            className={cn(
              "flex h-9 w-full bg-transparent outline-none px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              className
            )}
            ref={ref}
            {...props}
          />
          {endContent && <div className="pt-2 pl-2">{endContent}</div>}
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);

const getInputElement = ({
  mask,
  format,
}: {
  mask?: string;
  format?: string;
}) => {
  if (format) return InputNumberFormat;
  if (mask) return InputMask;
  return "input";
};

Input.displayName = "Input";

export { Input };
