"use client";
import Button from "@/common/Button";
import Loading from "@/common/Loading";
import ProductForm from "@/components/ProductForm";
import { useCategories } from "@/hooks/usecategories";
import useMoveBack from "@/hooks/useMoveBack";
import { useGetProductById, useUpdateProduct } from "@/hooks/useProducts";
import { includeObj } from "@/utils/objectUtils";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { RiArrowGoBackLine } from "react-icons/ri";

const includesProductKey = [
  "title",
  "description",
  "slug",
  "brand",
  "price",
  "offPrice",
  "discount",
  "countInStock",
  "imageLink",
];

function page() {
  const { id } = useParams();
  const back = useMoveBack();
  const { data, isLoading: isLoadingProduct } = useGetProductById(id);
  const { product } = data || {};
  const { data: categoryData } = useCategories();
  const { categories } = categoryData || {};
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const [tags, setTags] = useState(product?.tags || []);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { isLoading, mutateAsync } = useUpdateProduct();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateAsync({
        productId: product._id,
        data: {
          ...formData,
          tags,
          category: selectedCategory._id,
        },
      });
      router.push("/admin/products");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (product) {
      setTags(product.tags);
      setSelectedCategory(product.category);
      setFormData(includeObj(product, includesProductKey));
    }
  }, [data]);

  if (isLoadingProduct) return <Loading />;
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="title mb-4">ویرایش اطلاعات محصول</h1>
        <Button className={"flex gap-x-3"} onClick={back}>
          بازگشت <RiArrowGoBackLine className="w-4 h-4 text-white" />
        </Button>
      </div>

      <ProductForm
        onSubmit={handleSubmit}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={product.category}
        tags={tags}
        setTags={setTags}
        isLoading={isLoading}
        productData={formData}
        productDataOnChange={handleChange}
      />
    </div>
  );
}
export default page;
