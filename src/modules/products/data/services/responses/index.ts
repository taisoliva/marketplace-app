type Owner = {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: {
    id: string;
    url: string;
  };
};

export type Category = {
  id: string;
  title: string;
  slug: string;
};

type Attachment = {
  id: string;
  url: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  priceInCents: number;
  status: string;
  owner: Owner;
  category: Category;
  attachments: Attachment[];
};

export type IListProductsResponse = {
  products: Product[];
};

export type IListProductsParams = {
  search?: string;
  status?: string;
};

export type ICategoriesResponse = {
  categories: Category[];
};

export type IProduct = {
  product: Product;
};
