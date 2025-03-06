"use client";

import { useRouter } from "next/navigation";
import { Form } from "../../components/Forms";
import { ImageProduct } from "../../components/Image";
import { ProductFormProvider } from "../../context/form.context";
import { useCreateProductService } from "../../data/hooks/useCreateProduct";
import { CreateProductSchema } from "../../schemas/form.schema";
import { routes } from "@/shared/utils/routes";

export const NewProductScreen = () => {
  const router = useRouter();

  const { mutateAsync: createProduct } = useCreateProductService();

  const onSubmit = async (data: CreateProductSchema) => {
    try {
      await createProduct(data);

      router.push(`${routes.products}`);
    } catch {}
  };

  return (
    <ProductFormProvider>
      <div className="grid grid-cols-[1fr_2fr] gap-4">
        <div className="w-full h-80">
          <ImageProduct />
        </div>
        <div className="w-full h-96 bg-white rounded-lg p-5 gap-5 flex flex-col">
          <Form.Header />
          <Form.Inputs onSubmit={onSubmit} />
        </div>
      </div>
    </ProductFormProvider>
  );
};
