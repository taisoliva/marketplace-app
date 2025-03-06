"use client";
import React, { createContext, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { CreateProductSchema, newProductForm } from "../schemas/form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IProduct } from "../data/services/responses";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ProductFormContextData extends UseFormReturn<CreateProductSchema> {}

const ProductFormContext = createContext<ProductFormContextData | undefined>(
  undefined
);

interface ProductFormProviderProps {
  children: React.ReactNode;
  data?: IProduct;
}

export const ProductFormProvider: React.FC<ProductFormProviderProps> = ({
  children,
  data,
}) => {
  const formMethods = useForm<CreateProductSchema>({
    resolver: zodResolver(newProductForm),
    defaultValues: {
      title: data?.product.title || "",
      categoryId: data?.product.category?.id || "",
      attachmentsIds: data?.product.attachments.map((item) => item.url) || [],
      description: data?.product.description || "",
      priceInCents: data?.product.priceInCents || 0,
    },
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
