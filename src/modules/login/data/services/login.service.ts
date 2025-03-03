import { HttpAdapter } from "@/api";

export interface LoginBody {
  email: string;
  password: string;
}

export class LoginService extends HttpAdapter {
  login = (data: LoginBody) => this.api.post("/sellers/sessions", data);
}
