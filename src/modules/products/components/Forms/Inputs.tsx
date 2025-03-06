import { Input } from "@/components/ui/Input/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductForm } from "../../context/form.context";
import { Controller } from "react-hook-form";
import { Form } from "../../components/Forms";

import { useCategories } from "../../data/hooks/useListCategories";
import { CreateProductSchema } from "../../schemas/form.schema";

interface Props {
  onSubmit: (data: CreateProductSchema) => void;
}

export const FormInput = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useProductForm();

  const { data } = useCategories();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <Input
          label="Título"
          className="w-4/5"
          {...register("title")}
          error={errors.title?.message}
        />
        <Input
          label="Valor"
          startContent={"R$"}
          {...register("priceInCents")}
          error={errors.priceInCents?.message}
        />
      </div>
      <div>
        <Input label="Descrição" {...register("description")} />
      </div>
      <div>
        <Controller
          control={control}
          name="categoryId"
          render={({ field: { onChange, value } }) => (
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger label="Categoria">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {data?.categories.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <Form.Buttons />
    </form>
  );
};
