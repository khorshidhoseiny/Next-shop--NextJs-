import { getAllCategories } from "@/services/categoryService";
import { getProducts } from "@/services/productsService";
import React from "react";
import CategorySideBar from "./CategorySideBar";
import queryString from "query-string";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import Link from "next/link";
import AddToCart from "./[slug]/AddToCart";
import LikeProducts from "./LikeProducts";

export const dynamic = "force-dynamic";
import { cookies } from "next/headers";
import { toStrCookies } from "@/utils/toStringCookies";
async function ProductsPage(params) {
  const searchParams = await params.searchParams;

  // parallel Data fetching
  const cookieStore = cookies();
  const strCookies = toStrCookies(cookieStore);

  const productsPromise = getProducts(
    queryString.stringify(searchParams),
    strCookies
  );
  const categoryPromise = getAllCategories();
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
          <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {products.map((product) => {
              return (
                <div
                  className="space-y-4 border rounded-xl shadow-md p-4"
                  key={product._id}
                >
                  <h2 className="font-semibold  gap-4">{product.title}</h2>
                  <div className="mb-4">
                    <span>تاریخ ساختن: </span>
                    <span className="font-bold">
                      {toLocalDateStringShort(product.createdAt)}
                    </span>
                  </div>
                  <Link
                    className="text-primary-900 font-bold mb-4 block"
                    href={`/products/${product.slug}`}
                  >
                    مشاهده محصول
                  </Link>
                  <LikeProducts product={product} />
                  <AddToCart product={product} key={product._id} />
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
