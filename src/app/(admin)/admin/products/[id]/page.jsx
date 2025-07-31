"use client";

import Loading from "@/common/Loading";
import { useGetProductById } from "@/hooks/useProducts";
import { useParams } from "next/navigation";
import ProductDetail from "./ProductDetail";
import useMoveBack from "@/hooks/useMoveBack";
import Button from "@/common/Button";
import { RiArrowGoBackLine } from "react-icons/ri";

function page() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductById(id);
  const { product } = data || {};
  const back = useMoveBack();

  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="title">جزئیات محصول</h1>
        <Button className={"flex gap-x-3"} onClick={back}>
          بازگشت <RiArrowGoBackLine className="w-4 h-4 text-white" />
        </Button>
      </div>

      <ProductDetail product={product} />
    </div>
  );
}

export default page;
