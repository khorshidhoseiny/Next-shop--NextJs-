import { getAllCategories } from "@/services/categoryService";
import { getProducts } from "@/services/productsService";
import React from "react";
import CategorySideBar from "./CategorySideBar";
import queryString from "query-string";

import Link from "next/link";
import AddToCart from "./[slug]/AddToCart";
export const dynamic = "force-dynamic";
import { cookies } from "next/headers";
import { toStrCookies } from "@/utils/toStringCookies";
import Image from "next/image";

import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
async function ProductsPage({ searchParams }) {
  // parallel Data fetching
  const cookieStore = cookies();
  const strCookies = toStrCookies(cookieStore);

  const productsPromise = getProducts(
    queryString.stringify(searchParams),
    strCookies
  );
  const categoryPromise = await getAllCategories();
  const [{ products }, { categories }] = await Promise.all([
    productsPromise,
    categoryPromise,
  ]);

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">صفحه محصولات</h1>
      <div className="grid grid-cols-4 ">
        <CategorySideBar categories={categories} />
        <div className="col-span-3">
          <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
            {products.map((product) => {
              return (
                <div
                  className="hover:-translate-y-1   hover:shadow-lg transition-transform duration-200 flex flex-col justify-between bg-white h-full space-y-3 border rounded-2xl shadow-md  p-4"
                  key={product._id}
                >
                  <div className="aspect-video min-h-[270px] bg-primary-100/70 overflow-hidden rounded-2xl relative">
                    <span
                      className={`${
                        !product.discount && "hidden"
                      } bg-primary-800  left-3 top-3 absolute text-white text-sm px-4 font-bold py-1 rounded-xl`}
                    >
                      {toPersianNumbers(product.discount)}%
                    </span>
                    <Image
                      alt="imageLink"
                      fill
                      src={`/images/products/${product.slug}.png`}
                      className="object-center px-5 pt-2 object-contain"
                    />
                  </div>
                  <Link href={`/products/${product.slug}`}>
                    <h2 className="font-medium px-2 line-clamp-1 text-base md:text-sm gap-4">
                      {product.title}
                    </h2>
                  </Link>
                  <div className="mb-4">
                    <p className="line-clamp-2 text-xs">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex  flex-col gap-x-2 justify-start items-start">
                      <p
                        className={`${
                          product.discount
                            ? "line-through italic text-xs text-gray-500"
                            : "hidden"
                        }`}
                      >
                        {toPersianNumbersWithComma(product.price)} تومان
                      </p>
                      <div className="flex items-center gap-x-2">
                        <span className="font-bold text-lg text-primary-800">
                          {toPersianNumbersWithComma(product.offPrice)} تومان
                        </span>
                      </div>
                    </div>
                    <AddToCart product={product} key={product._id} />
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
