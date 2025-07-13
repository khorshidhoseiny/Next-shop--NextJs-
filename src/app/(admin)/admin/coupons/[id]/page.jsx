"use client";

import Button from "@/common/Button";
import Loading from "@/common/Loading";
import { useGetOneCoupon } from "@/hooks/useCoupons";
import { useParams } from "next/navigation";
import { RiArrowGoBackLine } from "react-icons/ri";
import CouponDetail from "./CouponDetail";
import useMoveBack from "@/hooks/useMoveBack";

function page() {
  const back = useMoveBack();
  const { id } = useParams();
  const { data, isLoading } = useGetOneCoupon(id);
  const { coupon } = data || {};

  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="title">جزئیات کد تخفیف {coupon.title}</h1>

        <Button className={"flex gap-x-3"} onClick={back}>
          بازگشت <RiArrowGoBackLine className="w-4 h-4 text-white" />
        </Button>
      </div>

      <div>
        <CouponDetail coupon={coupon} />
      </div>
    </div>
  );
}

export default page;
