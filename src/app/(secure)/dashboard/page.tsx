import { Card } from "@/components/common/Card";
import { Graphs } from "@/components/common/Graphs";
import { Title } from "@/components/common/Title";
import { BadgeDollarSign, Store, Users } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="w-full p-4">
      <Title
        title="Últimos 30 dias"
        description="Confira as estatísiticas da sua loja no último mês"
      />
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Card.Dashboard
            Icon={BadgeDollarSign}
            dataNumber="24"
            details="Produtos vendidos"
          />
          <Card.Dashboard
            Icon={Store}
            dataNumber="56"
            details="Produtos anunciado"
          />
          <Card.Dashboard
            Icon={Users}
            dataNumber="1238"
            details="Pessoas visitantes"
          />
        </div>
        <div className="bg-white w-full rounded-2xl">
          <Graphs />
        </div>
      </div>
    </div>
  );
}
