import { useQuery } from "@tanstack/react-query";
import { DashboardService } from "../../services";

const useAvailableProducts = () => {
  return useQuery({
    queryKey: ["available-products"],
    queryFn: async () => {
      const service = new DashboardService();
      const { data } = await service.availableProducts();
      return data;
    },
  });
};

export { useAvailableProducts };
