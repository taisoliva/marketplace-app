import { HttpAdapter } from "@/api";
import { IAttachmentResponse } from "../responses/attachment.response";

export interface AttachmentBody {
  files: File;
}
export class AttachmentService extends HttpAdapter {
  attachments = (data: AttachmentBody) =>
    this.api.post<IAttachmentResponse>("/attachments", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
}
