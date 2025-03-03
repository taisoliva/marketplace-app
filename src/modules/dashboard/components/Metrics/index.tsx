"use client";

import { BadgeDollarSign, Store, Users } from "lucide-react";
import { Card } from "@/components/common/Card";
import { Graphs } from "@/modules/dashboard/components/Graphs";
import { useNumberProducts } from "../../data/hooks/useNumberProducts";
import { useAvailableProducts } from "../../data/hooks/useAvailableProducts";
import { useNumberVisitors } from "../../data/hooks/useNumberVisitors";

export const Metrics = () => {
  const { data: numberProducts } = useNumberProducts();
  const { data: availableProducts } = useAvailableProducts();
  const { data: numberVisitors } = useNumberVisitors();

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4">
        <Card.Dashboard
          Icon={BadgeDollarSign}
          dataNumber={numberProducts?.amount}
          details="Produtos vendidos"
        />
        <Card.Dashboard
          Icon={Store}
          dataNumber={availableProducts?.amount}
          details="Produtos anunciado"
        />
        <Card.Dashboard
          Icon={Users}
          dataNumber={numberVisitors?.amount}
          details="Pessoas visitantes"
        />
      </div>
      <div className="bg-white w-full rounded-2xl">
        <Graphs />
      </div>
    </div>
  );
};
