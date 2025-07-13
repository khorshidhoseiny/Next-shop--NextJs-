"use client";
import Loading from "@/common/Loading";
import { useGetPayments } from "@/hooks/usePayments";
import PaymentTabel from "@/pages/(profile)/profile/payment/PaymentTabel";
import React from "react";
import PaymentsTabel from "./PaymentsTable";
import Button from "@/common/Button";
import { RiArrowGoBackLine } from "react-icons/ri";
import useMoveBack from "@/hooks/useMoveBack";

function PaymentsPage() {
  const back = useMoveBack();
  const { data, isLoading } = useGetPayments();
  const { payments } = data || {};
  console.log(payments);

  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between mb-7 items-center">
        <h1 className="title">لیست سفارشات</h1>
        <Button className={"flex gap-x-3"} onClick={back}>
          بازگشت <RiArrowGoBackLine className="w-4 h-4 text-white" />
        </Button>
      </div>
      <div className="flex justify-center items-center ">
        <div className="rounded-xl shadow-sm bg-white/90 border border-secondary-100  overflow-auto">
          <PaymentsTabel payments={payments} />
        </div>
      </div>
    </div>
  );
}

export default PaymentsPage;
