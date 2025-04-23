"use client";
import { useGetUser } from "@/hooks/useAuth";
import { toLocalDateString } from "@/utils/toLocalDate";
import React from "react";
import PaymentTabel from "./payment/PaymentTabel";
import Link from "next/link";

function Profile() {
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {};

  if (isLoading) return <p>Loading ...</p>;

  return (
    <div>
      <h1 className="mb-4">
        سلام ! <span className="font-bold">{user.name} خوش اومدی 🦋</span>
      </h1>
      <p>
        <span> تاریخ پیوستن :</span>
        <span>{toLocalDateString(user.createdAt)}</span>
      </p>

      {payments.length === 0 ? (
        <div className="p-4 flex items-center justify-center">
          <h1>شما هنوز سفارشی را ثبت نکردید !</h1>
          <Link className="text-primary-900 font-bold" href="/products">
            رفتن به صفحه محصولات
          </Link>
        </div>
      ) : (
        <div className="border rounded-xl mt-8">
          <div className="p-4 flex items-center justify-between">
            <h2 className="font-bold text-xl">آخرین سفارشات کاربر</h2>
            <Link
              className="text-primary-900 font-bold"
              href="/profile/payment"
            >
              مشاهده همه سفارشات
            </Link>
          </div>
          <PaymentTabel
            payments={payments
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 3)}
          />
        </div>
      )}
    </div>
  );
}

export default Profile;
