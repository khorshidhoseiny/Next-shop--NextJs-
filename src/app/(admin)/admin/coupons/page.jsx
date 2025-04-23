"use client";
import Loading from "@/common/Loading";
import { useGetAllCoupons } from "@/hooks/useCoupons";
import Link from "next/link";
import React from "react";
import { HiPlusCircle } from "react-icons/hi";
import CouponsTable from "./CouponsTable";

function couponsPage() {
  const { data, isLoading } = useGetAllCoupons();
  const { coupons } = data || {};

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-5">کد های تخفیف</h1>
        <Link
          href="/admin/coupons/add"
          className="font-bold text-primary-900 flex items-center gap-x-2"
        >
          <HiPlusCircle className="w-6 h-6" /> <span>اضافه کردن کد تخفیف</span>
        </Link>
      </div>

      <CouponsTable coupons={coupons} />
    </div>
  );
}

export default couponsPage;
