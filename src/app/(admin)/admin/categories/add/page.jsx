"use client";
import Button from "@/common/Button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { useAddNewCategory } from "@/hooks/usecategories";
import toast from "react-hot-toast";
import CategoryForm from "@/components/CategoryForm";
import { RiArrowGoBackLine } from "react-icons/ri";
import useMoveBack from "@/hooks/useMoveBack";

function page() {
  const back = useMoveBack();
  const [category, setCategory] = useState({
    title: "",
    description: "",
    englishTitle: "",
  });
  const [selectedType, setSelectedType] = useState("");
  const { mutateAsync, isPending } = useAddNewCategory();
  const router = useRouter();
  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...category,
        type: selectedType.value,
      });
      toast.success(message);
      router.push("/admin/categories");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <div className="flex mb-5 justify-between items-center">
        <h1 className="title">افزودن دسته بندی جدید</h1>

        <Button className={"flex gap-x-3"} onClick={back}>
          بازگشت <RiArrowGoBackLine className="w-4 h-4 text-white" />
        </Button>
      </div>
      <CategoryForm
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        category={category}
        handleChange={handleChange}
        isLoading={isPending}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default page;
