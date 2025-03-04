import { HttpAdapter } from "@/api";
import {
  ICategoriesResponse,
  IListProductsParams,
  IListProductsResponse,
} from "./responses";
import { CreateProductSchema } from "../../schemas/form.schema";

export class ProductsService extends HttpAdapter {
  listProducts = (params: IListProductsParams) =>
    this.api.get<IListProductsResponse>("/products/me", { params });

  create = (data: CreateProductSchema) => this.api.post("/products", data);

  categories = () => this.api.get<ICategoriesResponse>("/categories");
}
