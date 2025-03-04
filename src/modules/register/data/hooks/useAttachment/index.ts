import { useMutation } from "@tanstack/react-query";
import { AttachmentBody, RegisterService } from "../../services";

type Attachment = {
  id: string;
  url: string;
};

export type IAttachmentResponse = {
  attachments: Attachment[];
};
const useAttachmentService = () => {
  return useMutation({
    mutationFn: async (data: AttachmentBody) => {
      const response = await new RegisterService().attachments(data);

      return response.data;
    },
  });
};

export { useAttachmentService };
