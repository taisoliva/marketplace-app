import { HttpAdapter } from "@/api";
import {
  ICategoriesResponse,
  IListProductsParams,
  IListProductsResponse,
  IProduct,
} from "./responses";
import { CreateProductSchema } from "../../schemas/form.schema";

export class ProductsService extends HttpAdapter {
  listProducts = (params: IListProductsParams) =>
    this.api.get<IListProductsResponse>("/products/me", { params });

  create = (data: CreateProductSchema) => this.api.post("/products", data);

  categories = () => this.api.get<ICategoriesResponse>("/categories");

  productById = (id: string) => this.api.get<IProduct>(`/products/${id}`);

  edit = (id: string, data: CreateProductSchema) =>
    this.api.put<IProduct>(`/products/${id}`, data);

  status = (id: string, status: string) =>
    this.api.patch<IProduct>(`/products/${id}/${status}`);
}
