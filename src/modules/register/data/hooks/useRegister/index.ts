import { useMutation } from "@tanstack/react-query";
import { RegisterBody, RegisterService } from "../../services";

export type IRegisterResponse = {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: {
    id: string;
    url: string;
  };
};

const useRegisterService = () => {
  return useMutation({
    mutationFn: async (data: RegisterBody) => {
      const response = await new RegisterService().register(data);

      return response.data;
    },
  });
};

export { useRegisterService };
