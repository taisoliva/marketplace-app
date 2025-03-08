import { HttpAdapter } from "@/api";
import { IProfile } from "./responses/profile.response";

export class Seller extends HttpAdapter {
  profile = () => this.api.get<IProfile>("/sellers/me");

  signOut = () => this.api.post("/sign-out");
}
