import { HttpAdapter } from "@/api";
import { IRegisterResponse } from "../hooks/useRegister";

export interface RegisterBody {
  name: string;
  phone: string;
  email: string;
  avatarId: string;
  password: string;
  passwordConfirmation: string;
}

export class RegisterService extends HttpAdapter {
  register = (data: RegisterBody) =>
    this.api.post<IRegisterResponse>("/sellers", data);
}
