"use client";
import { TagsInput } from "react-tag-input-component";
import Loading from "@/common/Loading";
import Select from "react-select";
import TextField from "@/common/TextField";
import FileInput from "@/common/FileInput";
import ButtonIcon from "../ui/ButtonIcon";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";

const productsFormData = [
  {
    id: 1,
    label: "عنوان",
    name: "title",
  },
  {
    id: 2,
    label: "توضیحات",
    name: "description",
  },
  {
    id: 3,
    label: "اسلاگ",
    name: "slug",
  },
  {
    id: 4,
    label: "برند",
    name: "brand",
  },
  {
    id: 5,
    label: "قیمت",
    name: "price",
  },
  {
    id: 6,
    label: "تخفیف",
    name: "discount",
  },
  {
    id: 7,
    label: "قیمت روی تخفیف",
    name: "offPrice",
  },
  {
    id: 8,
    label: "موجودی",
    name: "countInStock",
  },
];

function ProductForm({
  onSubmit,
  tags,
  setTags,
  productData,
  imageLink,
  setImageLink,
  productDataOnChange,
  categories,
  setSelectedCategory,
  isLoading,
  selectedCategory = "",
}) {
  return (
    <div className="max-w-sm">
      <form className="space-y-4" onSubmit={onSubmit}>
        {productsFormData.map((item) => {
          return (
            <TextField
              key={item.id}
              label={item.label}
              name={item.name}
              value={productData[item.name] ?? ""}
              onChange={productDataOnChange}
            />
          );
        })}
        <div>
          <label className="mb-2 block" htmlFor="tags">
            تگ محصولات
          </label>
          <TagsInput id="tags" value={tags} onChange={setTags} name="tags" />
        </div>
        <div>
          <label htmlFor="category" className="mb-2 block">
            دسته بندی
          </label>
          <Select
            instanceId="category"
            onChange={setSelectedCategory}
            options={categories}
            getOptionLabel={(option) => option.title}
            getOptionValue={(option) => option._id}
            defaultValue={selectedCategory}
          />
        </div>

        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}
export default ProductForm;
