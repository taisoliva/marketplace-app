import { Button } from "@/components/ui/button";

export const FormButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button variant="outline">Cancelar</Button>
      <Button>Salvar</Button>
    </div>
  );
};
