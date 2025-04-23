"use client";
import { useGetOneCoupon, useUpdateCoupon } from "@/hooks/useCoupons";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CouponsForm from "../../CouponsForm";
import { useGetProducts } from "@/hooks/useProducts";
import Loading from "@/common/Loading";
import toast from "react-hot-toast";

function page() {
  const { id } = useParams();
  const { data: productsData } = useGetProducts();
  const { data, isLoading } = useGetOneCoupon(id);
  const { mutateAsync, isPending: isUpdatingCoupon } = useUpdateCoupon();
  const { coupon } = data || {};
  const [type, setType] = useState("percent");
  const [productIds, setProductIds] = useState([]);
  const [expireDate, setExpireDate] = useState(new Date());
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        id: coupon._id,
        data: {
          ...formData,
          type,
          expireDate: new Date(expireDate).toISOString(),
          productIds: productIds.map((p) => p._id),
        },
      });
      toast.success(message);
      router.push("/admin/coupons");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (coupon) {
      setType(coupon.type);
      setProductIds(coupon.productIds);
      console.log(productIds);
      setFormData({
        code: coupon.code,
        amount: coupon.amount,
        usageLimit: coupon.usageLimit,
      });
      setExpireDate(new Date(coupon.expireDate));
    }
  }, [coupon]);
  if (isLoading) return <Loading />;
  return (
    <div>
      <h1 className="mb-6 font-bold text-xl">ویرایش اطلاعات کد تخفیف</h1>
      <CouponsForm
        expireDate={expireDate}
        formData={formData}
        handleSubmit={handleSubmit}
        isPending={isUpdatingCoupon}
        setExpireDate={setExpireDate}
        setProductIds={setProductIds}
        setType={setType}
        type={type}
        options={productsData}
        defaultValue={coupon.productIds}
        handlechange={handleFormChange}
      />
    </div>
  );
}

export default page;
