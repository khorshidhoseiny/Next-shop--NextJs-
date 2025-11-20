import { getOneProductBySlug, getProducts } from "@/services/productsService";
import React from "react";
import { Tag, Star, Layers, Archive } from "lucide-react";
import ProductGallery from "./_components/ProductGallery";
import Breadcrumb from "@/common/Breadcrumb";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import AddToCart from "./AddToCart";

export const dynamicParams = false;
export const dynamic = "force-static";

async function page({ params }) {
  const { slug } = params;
  const { product } = await getOneProductBySlug(slug);
  const breadcrumbItems = [
    { title: "خانه", href: "/" },
    { title: "فروشگاه", href: "/products" },
    {
      title: product.category.title,
      href: `/products?categories/${product.category.englishTitle}`,
    },
    { title: product.title },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Breadcrumb items={breadcrumbItems} />
      <ProductGallery product={product} />
      <div className="my-4 border  rounded-xl overflow-hidden bg-white shadow-sm">
        <h1 className="font-bold text-2xl text-center p-4">{product.title}</h1>
        <p className="p-4 text-gray-700">{product.description}</p>

        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="flex flex-1 items-center justify-between p-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-secondary-400" />
              <span className="font-medium">برند</span>
            </div>
            <span>{product.brand}</span>
          </div>

          <div className="flex flex-1 gap-x-3 items-center justify-between p-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Layers size={16} className="text-secondary-400" />
              <span className="font-medium">دسته‌بندی</span>
            </div>
            <span className=" whitespace-nowrap truncate">
              {product.category.title}
            </span>
          </div>

          <div className="flex flex-1 items-center justify-between p-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Archive size={16} className="text-secondary-400" />
              <span className="font-medium">موجودی</span>
            </div>
            <span>{toPersianNumbers(product.countInStock)}</span>
          </div>

          <div className="flex flex-1 items-center justify-between p-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-secondary-400" />
              <span className="font-medium">امتیاز</span>
            </div>
            <span>{toPersianNumbers(product.rating)} / ۵</span>
          </div>
        </div>
      </div>

      <div className=" space-y-2">
        <p
          className={`${
            product.discount
              ? "line-through italic text-xs text-gray-500"
              : "font-bold text-xl"
          }`}
        >
          {toPersianNumbersWithComma(product.price)} تومان
        </p>
        {!!product.discount && (
          <div className="flex items-center gap-x-2">
            <span className="font-bold text-xl text-primary-700">
              {toPersianNumbersWithComma(product.offPrice)} تومان
            </span>
            <span className="bg-primary-700 text-white text-xs px-2 py-0.5 rounded-xl">
              {toPersianNumbers(product.discount)}%
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 mb-3 px-2 py-0.5 rounded-full text-xs text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <AddToCart product={product} />
    </div>
  );
}
export default page;

export async function generateStaticParams() {
  const { products } = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}
