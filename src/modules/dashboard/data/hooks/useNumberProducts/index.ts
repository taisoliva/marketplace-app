import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../../services";

const useNumberProducts = () => {
  return useQuery({
    queryKey: ["number-products"],
    queryFn: async () => {
      const service = new DashboardService();
      const { data } = await service.numberProducts();
      return data;
    },
  });
};

export { useNumberProducts };
