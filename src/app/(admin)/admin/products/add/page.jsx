"use client";

import RHFTextField from "@/common/RHFTextField";
import ProductForm from "@/components/ProductForm";
import { useCategories } from "@/hooks/usecategories";
import { useAddProduct } from "@/hooks/useProducts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import FileInput from "@/common/FileInput";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
import ButtonIcon from "../../../../../ui/ButtonIcon";
import Loading from "@/common/Loading";
import { TagsInput } from "react-tag-input-component";
import Button from "@/common/Button";
import { RiArrowGoBackLine } from "react-icons/ri";
import useMoveBack from "@/hooks/useMoveBack";

function addProductPage() {
  const back = useMoveBack();
  const { isLoading, mutateAsync } = useAddProduct();
  const { data } = useCategories();
  const { categories } = data || {};
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    slug: "",
    brand: "",
    price: "",
    offPrice: "",
    discount: "",
    imageLink: "",
    countInStock: "",
  });
  const [coverImageUrl, setCoverImageUrl] = useState(null);
  const [tags, setTags] = useState([]);

  const handChange = (e) => {
    console.log(e.target.value);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        ...formData,
        tags,
        category: selectedCategory._id,
      });
      router.push("/admin/products");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center">
        <h1 className="title ">اضافه کردن محصول</h1>
        <Button className={"flex gap-x-3"} onClick={back}>
          بازگشت <RiArrowGoBackLine className="w-4 h-4 text-white" />
        </Button>
      </div>
      <ProductForm
        onSubmit={handleSubmit}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        tags={tags}
        setTags={setTags}
        isLoading={isLoading}
        productData={formData}
        productDataOnChange={handChange}
      />
    </div>
  );
}
export default addProductPage;
