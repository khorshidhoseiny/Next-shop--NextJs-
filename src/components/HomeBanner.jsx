import Image from "next/image";
import React from "react";
// import { useRouter } from "next/navigation";
import Link from "next/link";

function HomeBanner({
  ImgBannerSrc = "/images/productsElectronic-banner.png",
  title,
  LinkSrc = "/products",
  description,
  leftOrder = false,
}) {
  // const router = useRouter();

  return (
    <div className="relative flex flex-col md:flex-row items-center gap-x-6 lg:justify-center px-6 py-10 bg-blue-50 rounded-xl overflow-hidden">
      <div
        className={`relative ${
          leftOrder && "order-2"
        } min-h-[300px] flex-1 max-h-full rounded-xl w-full overflow-hidden`}
      >
        <Image
          fill
          alt="بنر فروشگاه"
          className="object-center object-contain"
          priority
          src={ImgBannerSrc}
        />
      </div>
      <div className="z-10 space-y-4 flex-1 max-w-md">
        <h2 className="md:text-3xl text-2xl font-bold text-gray-800">
          {title}
        </h2>
        <p className="text-secondrary-600 mb-4">{description}</p>
        <Link href={LinkSrc}>
          <button className="btn mt-5 btn--primary transition">
            خرید کنید
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeBanner;
