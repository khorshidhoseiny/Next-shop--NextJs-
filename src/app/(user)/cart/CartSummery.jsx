import Loading from "@/common/Loading";
import { CreatePayment } from "@/services/paymentService";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

function CartSummery({ payDetail }) {
  const queryClient = useQueryClient();
  const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail;
  const { mutateAsync, isPending } = useMutation({
    mutationFn: CreatePayment,
  });

  const createPaymentHandler = async () => {
    try {
      const { message } = await mutateAsync();
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="border px-2 py-4 rounded-xl">
      <p className="mb-4 font-bold">اطلاعات پرداخت</p>
      <div className="mb-4 flex items-center justify-between">
        <span>جمع کل</span>
        <span>{toPersianNumbersWithComma(totalGrossPrice)}</span>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <span>تخفیف</span>
        <span>{toPersianNumbersWithComma(totalOffAmount)} - </span>
      </div>
      <div className="mb-6 flex items-center justify-between font-bold">
        <span>مبلغ قابل پرداخت</span>
        <span>{toPersianNumbersWithComma(totalPrice)}</span>
      </div>
      <div>
        <button
          className="btn btn--primary w-full"
          onClick={createPaymentHandler}
        >
          {isPending ? <Loading /> : " ثبت سفارش"}
        </button>
      </div>
    </div>
  );
}

export default CartSummery;
