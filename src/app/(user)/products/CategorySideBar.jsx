"use client";

import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import ProductsFilter from "./ProductsFilter";
import ProductsSort from "./ProductsSort";

function CategorySideBar({ categories }) {
  return (
    <div className="col-span-1">
      <ProductsFilter categories={categories} />
      <ProductsSort />
    </div>
  );
}

export default CategorySideBar;
