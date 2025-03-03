import { Title } from "@/components/common/Title";
import { CardProducts } from "@/modules/products/CardProducts";

import { Filter } from "@/modules/products/Filter";
import Link from "next/link";

export default function Products() {
  return (
    <div className="w-full p-4">
      <Title
        title="Produtos"
        description="Acesse e gerencie a sua lista de produtos à venda"
      />
      <div className="grid grid-cols-[1.2fr_3fr] gap-4">
        <Filter />
        <div className="grid grid-cols-2 gap-4 px-4">
          {Array.from({ length: 100 }).map((_, index) => (
            <Link href={`/products/${index}`} key={index}>
              <CardProducts.Card key={index}>
                <CardProducts.Tag />

                <CardProducts.Image
                  src="https://github.com/shadcn.png"
                  alt="Product"
                />
                <CardProducts.Info
                  name="Nome do produto"
                  description="Descrição do produto"
                  price={100000}
                />
              </CardProducts.Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
