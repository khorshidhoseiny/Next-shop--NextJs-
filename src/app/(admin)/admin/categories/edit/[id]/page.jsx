"use client";

import Loading from "@/common/Loading";
import { useGetCategoryById, useUpdateCategory } from "@/hooks/usecategories";
import { useParams, useRouter } from "next/navigation";
import CategoryForm, { categoryTypes } from "@/components/CategoryForm";
import { useEffect, useState } from "react";
import { includeObj } from "@/utils/objectUtils";
import toast from "react-hot-toast";
import useMoveBack from "@/hooks/useMoveBack";
import { RiArrowGoBackLine } from "react-icons/ri";
import Button from "@/common/Button";

const includeCategoryKey = ["title", "englishTitle", "description"];
function page() {
  const { id } = useParams();
  const back = useMoveBack();
  const router = useRouter();
  const { data, isLoading: isLoadingCategory } = useGetCategoryById(id);
  const { category } = data || {};
  const { mutateAsync, isPending } = useUpdateCategory();
  const [formData, setFormData] = useState({});
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    if (category) {
      setSelectedType(categoryTypes.find((c) => c.value === category.type));
      setFormData(includeObj(category, includeCategoryKey));
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        data: {
          ...formData,
          type: selectedType.value,
        },
        id: category._id,
      });
      toast.success(message);
      router.push("/admin/categories");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  if (isLoadingCategory) return <Loading />;
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="title">ویرایش دسته بندی جدید</h1>
        <Button className={"flex gap-x-3"} onClick={back}>
          بازگشت <RiArrowGoBackLine className="w-4 h-4 text-white" />
        </Button>
      </div>
      <CategoryForm
        category={formData}
        isLoading={isPending}
        onSubmit={handleSubmit}
        handleChange={handleChange}
        setSelectedType={setSelectedType}
        selectedType={categoryTypes.find((c) => c.value === category.type)}
      />
    </div>
  );
}

export default page;
