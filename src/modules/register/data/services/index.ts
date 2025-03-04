import { HttpAdapter } from "@/api";
import { IAttachmentResponse } from "../hooks/useAttachment";
import { IRegisterResponse } from "../hooks/useRegister";

export interface RegisterBody {
  name: string;
  phone: string;
  email: string;
  avatarId: string;
  password: string;
  passwordConfirmation: string;
}

export interface AttachmentBody {
  files: File;
}

export class RegisterService extends HttpAdapter {
  attachments = (data: AttachmentBody) =>
    this.api.post<IAttachmentResponse>("/attachments", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

  register = (data: RegisterBody) =>
    this.api.post<IRegisterResponse>("/sellers", data);
}
