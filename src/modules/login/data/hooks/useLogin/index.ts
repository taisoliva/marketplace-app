import { useMutation } from "@tanstack/react-query";
import { ILoginMutation } from "./types";
import { LoginService } from "../../services/login.service";

const useLoginService = () => {
  return useMutation({
    mutationFn: async (data: ILoginMutation) => {
      const response = await new LoginService().login(data.data);

      return response.data;
    },
  });
};

export { useLoginService };
