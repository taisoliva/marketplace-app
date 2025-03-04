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

import { Search, Tag } from "lucide-react";
import { useState } from "react";

export const Filter = () => {
  const [search, setSearch] = useState("");

  const [value, setValue] = useState("");

  const handleSelectChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className="w-96 rounded-lg bg-white p-4 h-fit">
      <div className="flex flex-col gap-4">
        <h1 className="text-md font-bold"> Filtrar </h1>
        <Input
          startContent={<Search />}
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          value={value}
          onValueChange={handleSelectChange}
          defaultValue="light"
        >
          <SelectTrigger startContent={<Tag />}>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Anunciado</SelectItem>
            <SelectItem value="dark">Vendido</SelectItem>
            <SelectItem value="system">Cancelado</SelectItem>
          </SelectContent>
        </Select>

        <Button className="w-full">Aplicar filtro</Button>
      </div>
    </div>
  );
};
