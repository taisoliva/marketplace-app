import { Title } from "@/components/common/Title";
import { Metrics } from "../../components/Metrics";

export const DashboardScreen = () => {
  return (
    <div className="w-full p-4">
      <Title
        title="Últimos 30 dias"
        description="Confira as estatísiticas da sua loja no último mês"
      />
      <Metrics />
    </div>
  );
};
