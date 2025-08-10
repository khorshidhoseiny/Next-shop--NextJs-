"use client";
import ProductsFilter from "./ProductsFilter";
import ProductsSort from "./ProductsSort";

function CategorySideBar({ categories }) {
  return (
    <div className="col-span-4 border-b md:border-none pb-4 border-slate-200 md:col-span-1 mb-5">
      <ProductsFilter categories={categories} />
      <ProductsSort />
    </div>
  );
}

export default CategorySideBar;
