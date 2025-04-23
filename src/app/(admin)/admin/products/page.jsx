"use client";
import Loading from "@/common/Loading";
import React from "react";
// import UsersTable from "./usersTable";
import { useGetProducts } from "@/hooks/useProducts";
import ProductsTable from "./ProductsTable";
import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";

function productsPage() {
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-5">محصولات</h1>
        <Link
          href="/admin/products/add"
          className="font-bold text-primary-900 flex items-center gap-x-2"
        >
          <HiPlusCircle className="w-6 h-6" /> <span>اضافه کردن محصول</span>
        </Link>
      </div>

      <ProductsTable products={products} />
    </div>
  );
}

export default productsPage;
