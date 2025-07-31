"use client";

import Loading from "@/common/Loading";
import { useAddCoupon } from "@/hooks/useCoupons";
import { useGetProducts } from "@/hooks/useProducts";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import CouponsForm from "../CouponsForm";
import Button from "@/common/Button";
import { RiArrowGoBackLine } from "react-icons/ri";
import useMoveBack from "@/hooks/useMoveBack";

function addCopounPage() {
  const back = useMoveBack();
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};

  const [formData, setFormData] = useState({
    code: "",
    amount: "",
    usageLimit: "",
  });
  const { mutateAsync, isPending } = useAddCoupon();
  const [type, setType] = useState("percent");
  const [productIds, setProductIds] = useState([]);
  const [expireDate, setExpireDate] = useState(new Date());
  const router = useRouter();
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formSubmited");

    try {
      const { message } = await mutateAsync({
        ...formData,
        type,
        productIds: productIds.map((p) => p._id),
        expireDate: new Date(expireDate).toISOString(),
      });
      toast.success(message);
      router.push("/admin/coupons");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold mb-5">اضافه کردن کد تخفیف جدید</h1>
        <Button className={"flex gap-x-3"} onClick={back}>
          بازگشت <RiArrowGoBackLine className="w-4 h-4 text-white" />
        </Button>
      </div>
      <CouponsForm
        expireDate={expireDate}
        formData={formData}
        handleSubmit={handleSubmit}
        isPending={isPending}
        setExpireDate={setExpireDate}
        setProductIds={setProductIds}
        setType={setType}
        type={type}
        options={products}
        handlechange={handlechange}
      />
    </div>
  );
}

export default addCopounPage;
