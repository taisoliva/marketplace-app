import { useMutation } from "@tanstack/react-query";
import { AttachmentBody, AttachmentService } from "../../services/attachments";

const useAttachmentService = () => {
  return useMutation({
    mutationFn: async (data: AttachmentBody) => {
      const response = await new AttachmentService().attachments(data);

      return response.data;
    },
  });
};

export { useAttachmentService };
