"use client";

import AddToCart from "@/pages/(user)/products/[slug]/AddToCart";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import Image from "next/image";
import Link from "next/link";

function ProductSlider({ products }) {
  return (
    <div className="relative">
      <div className="overflow-x-scroll flex justify-evenly gap-x-2 lg:justify-around border-collapse ">
        {products.map((p) => {
          return (
            <div
              className=" bg-white justify-between flex flex-col lg:w-72 p-2 border border-secondary-100 rounded-md shadow-md "
              key={p._id}
            >
              <Link
                className="text-primary-900 flex flex-col font-bold mb-4  "
                href={`/products/${p?.slug}`}
              >
                <div className="aspect-square overflow-hidden rounded-lg relative">
                  <Image
                    alt="imageLink"
                    fill
                    src={
                      `/images/products/${p?.slug}.png` || "/images/no-photo"
                    }
                    className="object-center object-contain"
                  />
                </div>

                <h2 className="font-semibold mb-3 w-40 truncate text-secondary-800 text-sm mt-3 gap-4">
                  {p.title}
                </h2>

                <div className="gap-x-2">
                  <p
                    className={` flex items-end w-full  text-sm ${
                      !p.discount && "hidden"
                    }`}
                  >
                    <span
                      className={`${
                        !!p.discount && "line-through italic"
                      } font-normal`}
                    >
                      {toPersianNumbersWithComma(p.price)}
                    </span>
                  </p>
                  <div className="flex justify-between w-full items-center">
                    <p className="text-lg  text-secondary-800 font-bold">
                      {toPersianNumbersWithComma(p.offPrice)}
                      <span className="font-medium text-xs">﷼</span>
                    </p>
                    <div
                      className={`${
                        !p.discount && "hidden"
                      } bg-primary-800 px-2 py-0.5 rounded-xl text-white`}
                    >
                      {toPersianNumbers(p.discount)} %
                    </div>
                  </div>
                </div>
              </Link>
              <AddToCart product={p} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductSlider;
