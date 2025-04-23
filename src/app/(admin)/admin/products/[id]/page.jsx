"use client";

import Loading from "@/common/Loading";
import { useGetProductById } from "@/hooks/useProducts";
import { useParams } from "next/navigation";
import ProductDetail from "./ProductDetail";

function page() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductById(id);
  const { product } = data || {};

  console.log(id);
  if (isLoading) return <Loading />;
  return (
    <div>
      <h1 className="text-xl font-semibold text-secondary-800">جزئیات محصول</h1>
      <ProductDetail product={product} />
    </div>
  );
}

export default page;
