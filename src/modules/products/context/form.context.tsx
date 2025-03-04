"use client";
import React, { createContext, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { CreateProductSchema, newProductForm } from "../schemas/form.schema";
import { zodResolver } from "@hookform/resolvers/zod";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ProductFormContextData extends UseFormReturn<CreateProductSchema> {}

const ProductFormContext = createContext<ProductFormContextData | undefined>(
  undefined
);

export const ProductFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const formMethods = useForm<CreateProductSchema>({
    resolver: zodResolver(newProductForm),
  });

  return (
    <ProductFormContext.Provider value={formMethods}>
      {children}
    </ProductFormContext.Provider>
  );
};

export const useProductForm = () => {
  const context = useContext(ProductFormContext);
  if (!context) {
    throw new Error("useProductForm must be used within a ProductFormProvider");
  }
  return context;
};
