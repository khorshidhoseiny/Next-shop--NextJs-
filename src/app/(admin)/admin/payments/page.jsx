"use client";
import Loading from "@/common/Loading";
import { useGetPayments } from "@/hooks/usePayments";
import PaymentTabel from "@/pages/(profile)/profile/payment/PaymentTabel";
import React from "react";
import PaymentsTabel from "./PaymentsTable";

function PaymentsPage() {
  const { data, isLoading } = useGetPayments();
  const { payments } = data || {};
  console.log(payments);

  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col ">
      <h1 className="text-xl mt-4 flex items-start justify-start font-bold">
        سفارشات شما
      </h1>
      <div className="flex justify-center items-center ">
        <PaymentsTabel payments={payments} />
      </div>
    </div>
  );
}

export default PaymentsPage;
