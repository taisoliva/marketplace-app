import { Title } from "@/components/common/Title";
import { NewProductScreen } from "@/modules/products/screens/NewProduct";

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
      </div>

      <NewProductScreen />
    </div>
  );
}
