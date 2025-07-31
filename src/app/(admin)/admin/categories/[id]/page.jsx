"use client";
import Loading from "@/common/Loading";
import { useGetCategoryById } from "@/hooks/usecategories";
import { useParams } from "next/navigation";
import React from "react";
import CategoryCartDetail from "./CategoryDetail";
import Button from "@/common/Button";
import useMoveBack from "@/hooks/useMoveBack";
import { RiArrowGoBackLine } from "react-icons/ri";

function CategoryDetail() {
  const back = useMoveBack();
  const { id } = useParams();
  const { data, isLoading } = useGetCategoryById(id);
  const { category } = data || {};

  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="title">جزئیات دسته بندی {category.title}</h1>
        <Button className={"flex gap-x-3"} onClick={back}>
          بازگشت <RiArrowGoBackLine className="w-4 h-4 text-white" />
        </Button>
      </div>

      <div>
        <CategoryCartDetail category={category} />
      </div>
    </div>
  );
}

export default CategoryDetail;
