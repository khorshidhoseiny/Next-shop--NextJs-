"use client";

import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { FaArrowAltCircleLeft } from "react-icons/fa";

function ProductSlider({ products }) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const checkCanScrollLeft = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, clientWidth, scrollWidth } = container;

    if (scrollLeft <= clientWidth) {
      setCanScrollLeft(true);
    } else {
      setCanScrollLeft(false);
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkCanScrollLeft();

    container.addEventListener("scroll", checkCanScrollLeft);
    window.addEventListener("resize", checkCanScrollLeft);

    return () => {
      container.removeEventListener("scroll", checkCanScrollLeft);
      window.removeEventListener("resize", checkCanScrollLeft);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll flex  justify-evenly gap-x-2 lg:justify-around border-collapse "
      >
        {products.map((p) => {
          return (
            <div
              className=" bg-white lg:w-72  p-2 border border-secondary-100 rounded-md shadow-md "
              key={p._id}
            >
              {" "}
              <Link
                className="text-primary-900 font-bold mb-4  "
                href={`/products/${p?.slug}`}
              >
                <div className=" aspect-square overflow-hidden rounded-lg relative">
                  <Image
                    alt="imageLink"
                    fill
                    src={
                      `/images/products/${p?.slug}.webp` || "/images/no-photo"
                    }
                    className="object-center object-contain"
                  />
                </div>

                <h2 className="font-semibold mb-3 w-40  truncate text-secondary-800 text-sm mt-3 gap-4">
                  {p.title}
                </h2>
                <p className="mb-2 text-secondary-700">
                  <span className={"line-through italic font-normal"}>
                    {toPersianNumbersWithComma(p.price)}
                  </span>
                </p>
                {!!p.discount && (
                  <div className="flex items-center gap-x-2 mb-6">
                    <p className="text-lg text-secondary-800 font-bold">
                      {toPersianNumbersWithComma(p.offPrice)}
                    </p>
                    <div className="bg-primary-800 px-2 py-0.5 rounded-xl text-white text-sm">
                      {toPersianNumbers(p.discount)} %
                    </div>
                  </div>
                )}
              </Link>
            </div>
          );
        })}
      </div>
      <button
        onClick={handleScrollLeft}
        className={`absolute left-0 top-1/2 lg:hidden -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow ${
          !canScrollLeft && "opacity-30 lg:opacity-0"
        }`}
      >
        <FaArrowAltCircleLeft />
      </button>
    </div>
  );
}

export default ProductSlider;
