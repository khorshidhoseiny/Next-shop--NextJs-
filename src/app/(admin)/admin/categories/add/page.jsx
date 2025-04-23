"use client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { useAddNewCategory } from "@/hooks/usecategories";
import toast from "react-hot-toast";
import CategoryForm from "@/components/CategoryForm";

function page() {
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
      <h1 className="mb-6 font-bold text-xl">افزودن دسته بندی جدید</h1>
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
