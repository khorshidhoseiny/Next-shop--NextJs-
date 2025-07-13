"use client";
import { useParams } from "next/navigation";
import PaymentDetail from "./paymentDetail";
import { useGetPaymentById } from "@/hooks/usePayments";
import Loading from "@/common/Loading";
import Button from "@/common/Button";
import { RiArrowGoBackLine } from "react-icons/ri";
import useMoveBack from "@/hooks/useMoveBack";

function page() {
  const { id } = useParams();
  const { data, isLoading } = useGetPaymentById(id);
  const { payment } = data || {};
  const back = useMoveBack();

  if (isLoading) return <Loading />;
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h1 className="title">جزئیات سفارش</h1>
        <Button className={"flex gap-x-3"} onClick={back}>
          بازگشت <RiArrowGoBackLine className="w-4 h-4 text-white" />
        </Button>
      </div>
      <PaymentDetail payment={payment[0]} />
    </div>
  );
}

export default page;
