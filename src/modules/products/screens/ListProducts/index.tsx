"use client";

import Link from "next/link";
import { CardProducts } from "../../components/CardProducts";
import { Filter } from "../../components/Filter";
import { useAvailableProducts } from "../../data/hooks/useListProducts";
import { useQueryState } from "nuqs";
import { routes } from "@/shared/utils/routes";

export const ListProducts = () => {
  const [status] = useQueryState("status");
  const [search] = useQueryState("search");

  const { data } = useAvailableProducts({
    params: {
      status: status ?? undefined,
      search: search ?? undefined,
    },
    refetchOnMount: true,
    enabled: true,
  });

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-3">
      <Filter />
      <div className="grid grid-cols-2 gap-4">
        {data?.products.map((product) => (
          <Link key={product.id} href={`${routes.products}/${product.id}`}>
            <CardProducts.Card>
              <CardProducts.Image
                src={product.attachments[0].url}
                alt={product.title}
                tag={product.status as "available" | "sold" | "cancelled"}
                category={product.category.title}
              />

              <CardProducts.Info
                name={product.title}
                description={product.description}
                price={product.priceInCents}
              />
            </CardProducts.Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
