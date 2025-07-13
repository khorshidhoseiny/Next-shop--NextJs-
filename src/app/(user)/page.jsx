import Link from "next/link";
import AddToCart from "./products/[slug]/AddToCart";
import { getProducts } from "@/services/productsService";
import Image from "next/image";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { PiBowlFoodDuotone, PiDressFill } from "react-icons/pi";
import { SiTicktick } from "react-icons/si";
import { FaHeadphones, FaMobileAlt, FaPencilAlt } from "react-icons/fa";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import ProductSlider from "@/components/ProductSlider";
import {
  CiCircleCheck,
  CiClock1,
  CiCreditCard1,
  CiDeliveryTruck,
} from "react-icons/ci";

export default async function Home() {
  const categoryList = [
    {
      id: 1,
      title: "موبایل",
      icon: <FaMobileAlt className="fill-primary-900 w-8 h-8" />,
    },
    {
      id: 2,
      title: "نوشت افزار",
      icon: <FaPencilAlt className="fill-primary-900 w-8 h-8" />,
    },
    {
      id: 3,
      title: "پوشاک",
      icon: <PiDressFill className="fill-primary-900 w-8 h-8" />,
    },
    {
      id: 4,
      title: "خوراکی",
      icon: <PiBowlFoodDuotone className="fill-primary-900 w-8 h-8" />,
    },
    {
      id: 5,
      title: "کالای دیجیتال",
      icon: <FaHeadphones className="fill-primary-900 w-8 h-8" />,
    },
    {
      id: 6,
      title: "لوازم برقی",
      icon: (
        <MdOutlineLocalLaundryService className="fill-primary-900 w-8 h-8" />
      ),
    },
  ];
  const features = [
    {
      id: 1,
      title: "ارسال سریع",
      description: "تحویل در کمترین زمان ممکن",
      icon: (
        <CiDeliveryTruck className="fill-primary-800 stroke-primary-700 stroke-1 w-6 h-6" />
      ),
    },
    {
      id: 2,
      title: "ضمانت اصالت",
      description: "کالاهای اصل و معتبر",
      icon: (
        <CiCircleCheck className="fill-primary-800 stroke-primary-700 stroke-1 w-6 h-6" />
      ),
    },
    {
      id: 3,
      title: "پشتیبانی ۲۴ ساعته",
      description: "همیشه پاسخگو",
      icon: (
        <CiClock1 className="fill-primary-800 stroke-primary-700 stroke-1 w-6 h-6" />
      ),
    },
    {
      id: 4,
      title: "پرداخت امن",
      description: "با درگاه‌های معتبر",
      icon: (
        <CiCreditCard1 className="fill-primary-800 stroke-primary-700 stroke-1 w-6 h-6" />
      ),
    },
  ];
  const { products } = await getProducts();
  const discountedProducts = products.filter((p) => !!p.discount);

  return (
    <div className="container flex px-2 flex-col space-y-7 max-w-screen-xl">
      {/* banner */}
      <div className="relative flex items-center gap-x-6 lg:justify-center  px-6 py-10 bg-blue-50 rounded-xl overflow-hidden">
        <div className="relative flex-1  min-h-[300px] max-h-full rounded-xl overflow-hidden">
          <Image
            fill
            alt="بنر فروشگاه"
            className="object-center object-contain"
            priority
            src="/images/banner.png"
          />
        </div>
        <div className="z-10 space-y-4 flex-1 max-w-md">
          <h2 className="md:text-3xl text-2xl font-bold text-gray-800">
            زندگی دیجیتال خود را متحول کنید
          </h2>
          <p className="text-gray-600">
            جدیدترین گوشی‌ها، لپ‌تاپ‌ها و لوازم جانبی همین‌جا منتظر شما هستند.
          </p>
          <button className="px-6 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition">
            خرید کنید
          </button>
        </div>
      </div>

      {/* categories */}
      <div className="flex justify-between items-center">
        {categoryList.map((item) => {
          return (
            <div key={item.id} className="category-item">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100">
                {item.icon}
              </div>
              <span className="text-gray-700 text-sm">{item.title}</span>
            </div>
          );
        })}
      </div>

      <div className="  rounded-xl py-5 px-3 ">
        <h1 className="font-bold text-secondary-700 mb-5 text-xl">
          محصولات ویژه✨
          <span className="text-sm block font-medium mt-3">
            جدید ترین تخفیف ها 😀{" "}
          </span>
        </h1>
        <ProductSlider products={discountedProducts} />
      </div>

      <div className="flex flex-col">
        <h1 className="text-secondary-700 font-bold">
          چرا از فروشگاه ما خرید کنید؟
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:shadow-md transition"
            >
              <div className="text-4xl rounded-full w-12 h-12 border-2 flex justify-center items-center border-primary-800  mb-2">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-secondary-700 mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
