import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const FormHeader = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <h1>Dados do produto</h1>
      {children}
    </div>
  );
};
