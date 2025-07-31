"use client";

import { useGetUser } from "@/hooks/useAuth";
import React from "react";
import PaymentTabel from "./PaymentTabel";
import Loading from "@/common/Loading";

function PaymentPage() {
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {};

  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="bg-white font-light mb-4 text-secondary-800 lg:px-8 py-4 px-6 max-w-xl rounded-xl">
        &nbsp; 🛒 اطلاعات سفارشات{" "}
        <span className="font-black text-xl">{user.name} </span>
        عزیز
      </div>

      <div className="rounded-xl shadow-sm bg-white/90 border border-secondary-100 overflow-auto">
        <PaymentTabel payments={payments} />
      </div>
    </div>
  );
}

export default PaymentPage;
