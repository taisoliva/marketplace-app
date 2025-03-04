import { useQuery } from "@tanstack/react-query";
import { Seller } from "../../services";

const useProfile = () => {
  return useQuery({
    queryKey: ["profile-picture"],
    queryFn: async () => {
      const service = new Seller();
      const { data } = await service.profile();
      return data.seller;
    },
  });
};

export { useProfile };
