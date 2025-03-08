"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Search } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import {
  filterProductForm,
  FilterProductSchema,
} from "../../schemas/filter.form.schema";
import { eStatusProduct } from "@/shared/enums";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryState } from "nuqs";

export const Filter = () => {
  const [status, setStatus] = useQueryState("status");
  const [search, setSearch] = useQueryState("search");

  const { register, control, handleSubmit } = useForm<FilterProductSchema>({
    resolver: zodResolver(filterProductForm),
    defaultValues: {
      search: search ?? undefined,
      status: status ?? undefined,
    },
  });

  const onSubmit = (data: FilterProductSchema) => {
    setStatus(data.status ?? null);
    setSearch(data.search ?? null);
  };

  return (
    <form
      className="w-96 rounded-lg bg-white p-4 h-fit"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-md font-bold"> Filtrar </h1>
        <Input
          startContent={<Search />}
          placeholder="Pesquisar"
          {...register("search")}
        />

        <Controller
          control={control}
          name="status"
          render={({ field: { onChange, value } }) => (
            <Select value={value} onValueChange={onChange}>
              <SelectTrigger label="Status">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={eStatusProduct.Available}>
                  Anunciado
                </SelectItem>
                <SelectItem value={eStatusProduct.Sold}>Vendido</SelectItem>
                <SelectItem value={eStatusProduct.Cancelled}>
                  Cancelado
                </SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        <Button type="submit" className="w-full">
          Aplicar filtro
        </Button>
      </div>
    </form>
  );
};
