import { Input } from "@/components/ui/Input/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const FormInput = () => {
  return (
    <>
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        <Input label="Título" className="w-4/5" />
        <Input label="Valor" startContent={"R$"} />
      </div>
      <div>
        <Input label="Descrição" />
      </div>
      <div>
        <Select>
          <SelectTrigger label="Categoria">
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Anunciado</SelectItem>
            <SelectItem value="dark">Vendido</SelectItem>
            <SelectItem value="system">Cancelado</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
