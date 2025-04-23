"use client";
import { userPaymentTHeads } from "@/constants/tableHeads";
import { useGetUser } from "@/hooks/useAuth";
import React from "react";
import PaymentTabel from "./PaymentTabel";

function PaymentPage() {
  const { data, isLoading } = useGetUser();
  const { user, payments } = data || {};
  console.log(user);

  if (isLoading) return <isLoading />;
  return (
    <div>
      <h1>اطلاعات سفارشات {user?.name} عزیز</h1>
      <PaymentTabel payments={payments} />
    </div>
  );
}

export default PaymentPage;
