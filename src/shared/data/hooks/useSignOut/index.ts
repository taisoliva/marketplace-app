import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Seller } from "../../services";
import { useRouter } from "next/navigation";
import { routes } from "@/shared/utils/routes";

const useSignOutService = () => {
  const route = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const response = await new Seller().signOut();
      return response.data;
    },
    onSuccess: () => {
      document.cookie = "";
      queryClient.clear();

      route.push(`${routes.login}`);
    },
  });
};

export { useSignOutService };
