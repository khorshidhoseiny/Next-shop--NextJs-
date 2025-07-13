"use client";
import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";
import CartDetail from "./CartDetail";
import CartSummery from "./CartSummery";

function CartPage() {
  const { data, isLoading } = useGetUser();
  const { user, cart } = data || {};
  if (isLoading) return <Loading />;
  if (!user || !data)
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-lg">
          برای دیدن محتوای سبد خرید باید ابتدا &nbsp;
          <Link
            className="text-primary-700 border-b-2 border-primary-500 mt-5 font-bold "
            href={"/auth"}
          >
            وارد سایت
          </Link>
          &nbsp; شوید!
        </h1>
      </div>
    );
  if (!user.cart.products || user.cart.products.length === 0)
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-lg">سبد خرید شما خالی است!</h1>
        <Link
          className="text-primary-700 border-b-2 border-primary-500 mt-5 font-bold "
          href={"/products"}
        >
          صفحه ی محصولات
        </Link>
      </div>
    );
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-4 md:col-span-2 lg:col-span-3 space-y-5">
        {cart &&
          cart.productDetail.map((cartItem) => {
            return <CartDetail key={cartItem._id} cartItem={cartItem} />;
          })}
      </div>
      <div className="col-span-4 md:col-span-2 lg:col-span-1">
        <CartSummery payDetail={cart.payDetail} />
      </div>
    </div>
  );
}

export default CartPage;
