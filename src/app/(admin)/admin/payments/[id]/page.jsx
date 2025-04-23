"use client";
import { useParams } from "next/navigation";
import PaymentDetail from "./paymentDetail";
import { useGetPaymentById } from "@/hooks/usePayments";
import Loading from "@/common/Loading";

function page() {
  const { id } = useParams();
  const { data, isLoading } = useGetPaymentById(id);
  const { payment } = data || {};
  console.log(payment);
  if (isLoading) return <Loading />;
  return (
    <div className="container">
      <PaymentDetail payment={payment[0]} />
    </div>
  );
}

export default page;
