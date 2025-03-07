"use client";

import { Title } from "@/components/common/Title";
import { ArrowLeft, Ban, Check } from "lucide-react";
import { ProductFormProvider } from "../../context/form.context";
import { ImageProduct } from "../../components/Image";
import { Form } from "../../components/Forms";
import { useProductsDetails } from "../../data/hooks/useListProducDetails";
import { Button } from "@/components/ui/button";
import { routes } from "@/shared/utils/routes";
import Link from "next/link";
import { If } from "@/shared/components/If";
import { cn } from "@/lib/utils";
import { eStatusProduct } from "@/shared/enums";
import { CreateProductSchema } from "../../schemas/form.schema";
import { useRouter } from "next/navigation";
import { useEditProductService } from "../../data/hooks/useEditProduct";
import { useStatusProductService } from "../../data/hooks/useStatusProduct";
import {
  statusTranslations,
  textByStatusTranslations,
} from "@/shared/utils/translate";

interface Props {
  id: string;
}
export const EditProduct = ({ id }: Props) => {
  const router = useRouter();

  const { data: product, isLoading } = useProductsDetails({
    id,
  });

  const { mutateAsync: editProduct } = useEditProductService({
    id,
  });

  const onSubmit = async (data: CreateProductSchema) => {
    try {
      await editProduct(data);

      router.push(`${routes.products}`);
    } catch {}
  };

  const { mutateAsync: changeStatus } = useStatusProductService({
    id,
  });

  const handleStatus = async (status: string) => {
    try {
      await changeStatus(status);

      router.push(`${routes.products}`);
    } catch {}
  };
  return (
    <>
      <If condition={isLoading}>
        <p>...Carregando</p>
      </If>
      <If condition={!isLoading}>
        <div className="w-full">
          <div className="flex flex-col">
            <Link href={`${routes.products}`}>
              <Button
                variant="ghost"
                className="w-16 text-primary hover:bg-transparent hover:text-primary/50"
              >
                {" "}
                <ArrowLeft /> Voltar
              </Button>
            </Link>
            <div className="flex justify-between items-center">
              <Title
                title="Editar Produto"
                description="Gerencie as informações do produto cadastrado"
              />
              <div className="flex gap-4 text-sm text-primary">
                <Button
                  variant="ghost"
                  className="text-primary hover:bg-transparent hover:text-primary/50"
                  onClick={() => {
                    if (product?.product.status === eStatusProduct.Available) {
                      handleStatus(eStatusProduct.Sold);
                    } else {
                      handleStatus(eStatusProduct.Available);
                    }
                  }}
                >
                  <Check className="w-5 h-5" />
                  <p>
                    {
                      textByStatusTranslations[
                        product?.product
                          .status as keyof typeof textByStatusTranslations
                      ]
                    }
                  </p>
                </Button>
                <Button
                  variant="ghost"
                  className="text-primary hover:bg-transparent hover:text-primary/50"
                  disabled={
                    product?.product.status === eStatusProduct.Cancelled
                  }
                  onClick={() => handleStatus(eStatusProduct.Cancelled)}
                >
                  <Ban className="w-5 h-5" />
                  <p>Desativar anúncio</p>
                </Button>
              </div>
            </div>
          </div>

          <fieldset
            disabled={product?.product.status === eStatusProduct.Cancelled}
          >
            <ProductFormProvider data={product}>
              <div className="grid grid-cols-[1fr_2fr] gap-4">
                <div className="w-full h-80">
                  <ImageProduct
                    imageId={product?.product.attachments[0].id}
                    imageUrl={product?.product.attachments[0].url}
                    isDisabled={
                      product?.product.status === eStatusProduct.Cancelled
                    }
                  />
                </div>
                <div className="w-full h-96 bg-white rounded-lg p-5 gap-5 flex flex-col">
                  <Form.Header>
                    <p
                      className={cn(
                        "text-white px-3 py-1 text-sm font-medium rounded-lg",
                        {
                          "bg-blue-500":
                            product?.product.status ===
                            eStatusProduct.Available,
                          "bg-green-500":
                            product?.product.status === eStatusProduct.Sold,
                          "bg-red-500":
                            product?.product.status ===
                            eStatusProduct.Cancelled,
                        }
                      )}
                    >
                      {statusTranslations[
                        product?.product
                          .status as keyof typeof statusTranslations
                      ] ?? "Status desconhecido"}
                    </p>
                  </Form.Header>

                  <Form.Inputs onSubmit={onSubmit} />
                </div>
              </div>
            </ProductFormProvider>
          </fieldset>
          {/* <ProductFormProvider data={product}>
            <div className="grid grid-cols-[1fr_2fr] gap-4">
              <div className="w-full h-80">
                <ImageProduct
                  imageId={product?.product.attachments[0].id}
                  imageUrl={product?.product.attachments[0].url}
                />
              </div>
              <div className="w-full h-96 bg-white rounded-lg p-5 gap-5 flex flex-col">
                <Form.Header>
                  <p
                    className={cn(
                      "text-white px-3 py-1 text-sm font-medium rounded-lg",
                      {
                        "bg-blue-500":
                          product?.product.status === eStatusProduct.Available,
                        "bg-green-500":
                          product?.product.status === eStatusProduct.Sold,
                        "bg-red-500":
                          product?.product.status === eStatusProduct.Cancelled,
                      }
                    )}
                  >
                    {statusTranslations[
                      product?.product.status as keyof typeof statusTranslations
                    ] ?? "Status desconhecido"}
                  </p>
                </Form.Header>

                <Form.Inputs onSubmit={onSubmit} />
              </div>
            </div>
          </ProductFormProvider> */}
        </div>
      </If>
    </>
  );
};
