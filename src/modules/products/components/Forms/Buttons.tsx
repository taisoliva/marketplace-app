import { Button } from "@/components/ui/button";
import { routes } from "@/shared/utils/routes";
import { useRouter } from "next/navigation";

export const FormButtons = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        variant="outline"
        type="button"
        onClick={() => {
          router.push(`${routes.products}`);
        }}
      >
        Cancelar
      </Button>
      <Button>Salvar</Button>
    </div>
  );
};
