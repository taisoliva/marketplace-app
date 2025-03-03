import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../../services";

const useNumberVisitors = () => {
  return useQuery({
    queryKey: ["visitors-products"],
    queryFn: async () => {
      const service = new DashboardService();
      const { data } = await service.numberVisitors();
      return data;
    },
  });
};

export { useNumberVisitors };
