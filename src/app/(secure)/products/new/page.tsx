import { Title } from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUp } from "lucide-react";

export default function NewProduct() {
  return (
    <div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <Title
            title="Novo Produto"
            description="Cadastre um produto para venda no marketplace"
          />
        </div>

        <div className="grid grid-cols-[1fr_2fr] gap-4">
          <div className="w-full h-80 bg-red-200">
            <ImageUp className="text-primary" />
            <input type="file" className="sr-only" />
          </div>
          <div className="w-full h-96 bg-white rounded-lg p-5 gap-5 flex flex-col">
            <div className="flex items-center justify-between">
              <h1>Dados do produto</h1>
              <p className="bg-blue-500 text-white rounded-2xl w-fit h-6 flex items-center justify-center p-2">
                Anunciado
              </p>
            </div>
            <div className="grid grid-cols-[2fr_1fr] gap-4">
              <Input label="Título" className="w-4/5" />
              <Input label="Valor" />
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
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">Cancelar</Button>
              <Button>Salvar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
