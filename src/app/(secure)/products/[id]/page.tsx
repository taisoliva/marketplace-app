import { EditProduct } from "@/modules/products/screens/EditProduct";

export default async function ProductsDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <EditProduct id={id} />;
}
