import { HttpAdapter } from "@/api";
import { IListProductsParams, IListProductsResponse } from "./responses";

export class ProductsService extends HttpAdapter {
  listProducts = (params: IListProductsParams) =>
    this.api.get<IListProductsResponse>("/products/me", { params });
}
