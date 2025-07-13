import Image from "next/image";
import React from "react";

function HomeBanner({ bannerSrc, title, description, leftOrder = false }) {
  return (
    <div className="relative flex items-center gap-x-6 lg:justify-center  px-6 py-10 bg-blue-50 rounded-xl overflow-hidden">
      <div
        className={`relative ${
          leftOrder && "order-2"
        } flex-1  min-h-[300px] max-h-full rounded-xl overflow-hidden`}
      >
        <Image
          fill
          alt="بنر فروشگاه"
          className="object-center object-contain"
          priority
          src={bannerSrc}
        />
      </div>
      <div className="z-10 space-y-4 flex-1 max-w-md">
        <h2 className="md:text-3xl text-2xl font-bold text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600">{description}</p>
        <button className="px-6 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition">
          خرید کنید
        </button>
      </div>
    </div>
  );
}

export default HomeBanner;
