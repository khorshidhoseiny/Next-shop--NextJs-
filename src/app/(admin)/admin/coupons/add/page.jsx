"use client";

import Loading from "@/common/Loading";
import { useAddCoupon } from "@/hooks/useCoupons";
import { useGetProducts } from "@/hooks/useProducts";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import CouponsForm from "../CouponsForm";

function addCopounPage() {
  const { data, isLoading } = useGetProducts();
  const { products } = data || {};
  console.log(products, "products");

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
      <h1 className="text-lg font-bold mb-5">اضافه کردن کد تخفیف جدید</h1>
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
