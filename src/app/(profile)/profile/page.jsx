"use client";
import { useGetUser } from "@/hooks/useAuth";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import React from "react";
import { BsBagCheck } from "react-icons/bs";
import PaymentTabel from "./payment/PaymentTabel";
import Link from "next/link";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import RecordData from "@/common/RecordData";
import { FaRegClock } from "react-icons/fa";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import Loading from "@/common/Loading";
import { MdArrowBack } from "react-icons/md";
function Profile() {
  const { data, isLoading } = useGetUser();
  const { user = [], payments = [] } = data || {};

  if (isLoading) return <Loading />;

  return (
    <div className="space-y-5">
      <div className="bg-white font-light text-secondary-800 lg:px-8 py-4 px-6 max-w-xl rounded-xl">
        <span className="title">{user?.name || ""} 😍&nbsp;</span>
        به فروشگاه نکست خوش آمدی👋🏻
      </div>

      <div className="flex flex-col ">
        <h1 className="font-black text-secondary-700 text-2xl">سوابق من</h1>
        <div className="grid gap-6 grid-cols-3">
          <RecordData
            icon={<FaRegClock className="w-5 h-5 text-white" />}
            label="تاریخ پیوستن"
            value={toLocalDateStringShort(user?.createdAt)}
            color="bg-secondary-700"
          />
          <RecordData
            icon={<BsBagCheck className="w-5 h-5 stroke-1 text-white" />}
            label="محصولات خریداری شده "
            color="bg-green-600"
            value={toPersianNumbers(user.Products.length)}
          />
          <RecordData
            icon={<FaRegFaceGrinHearts className="w-5 h-5  text-white" />}
            label=" لایک ها"
            color="bg-red-500"
            value={toPersianNumbers(user.likedProducts.length)}
          />
        </div>
      </div>
      <div>
        <div className="flex items-start mb-4 flex-col md:flex-row justify-between">
          <h2 className="font-black text-secondary-700 text-2xl">
            آخرین سفارشات شما
          </h2>
          <Link
            className="text-secondary-700 flex gap-x-2 font-bold"
            href="/profile/payment"
          >
            <p className="text-sm">مشاهده همه سفارشات</p>
            <MdArrowBack className="w-5 h-5" />
          </Link>
        </div>
        <div className="rounded-xl bg-white/95 relative overflow-auto">
          <PaymentTabel
            payments={payments
              ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 3)}
          />
        </div>
      </div>
    </div>
  );
}

{
}
export default Profile;
