import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../../services";

const useVisitorsPerDay = () => {
  return useQuery({
    queryKey: ["visitors-per-day"],
    queryFn: async () => {
      const service = new DashboardService();
      const { data } = await service.visitorsPerDay();
      return data;
    },
  });
};

export { useVisitorsPerDay };
