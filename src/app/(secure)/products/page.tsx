import { Title } from "@/components/common/Title";
import { ListProducts } from "@/modules/products/screens/ListProducts";

export default function Products() {
  return (
    <div className="flex flex-col gap-3 w-full h-auto">
      <div className="w-full p-4">
        <Title
          title="Produtos"
          description="Acesse e gerencie a sua lista de produtos à venda"
        />
      </div>
      <ListProducts />
    </div>
  );
}
