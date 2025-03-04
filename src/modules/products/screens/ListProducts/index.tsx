"use client";

import { CardProducts } from "../../CardProducts";
import { Filter } from "../../components/Filter";
import { useAvailableProducts } from "../../data/hooks/useListProducts";
import { useQueryState } from "nuqs";

export const ListProducts = () => {
  const [status, setStatus] = useQueryState("status");
  const [search, setSearch] = useQueryState("search");

  const { data, isLoading } = useAvailableProducts({
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
          <CardProducts.Card key={product.id}>
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
        ))}
      </div>
    </div>
  );
};
