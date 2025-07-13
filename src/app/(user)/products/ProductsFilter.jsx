"use client";

import CheckBox from "@/common/CheckBox";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

function ProductsFilter({ categories }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("category")?.split(",") || []
  );

  const createCategory = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const categoryHandler = (e) => {
    const value = e.target.value;
    if (selectedCategories.includes(value)) {
      const categories = selectedCategories.filter((c) => c !== value);
      setSelectedCategories(categories);
      router.push(pathname + "?" + createCategory("category", categories));
    } else {
      setSelectedCategories([...selectedCategories, value]);
      router.push(
        pathname +
          "?" +
          createCategory("category", [...selectedCategories, value])
      );
    }
  };

  return (
    <div className="mb-4">
      <p className="font-bold mb-4">دسته بندی ها</p>
      <ul className="space-y-4 px-2">
        {categories.map((category) => {
          return (
            <CheckBox
              id={category._id}
              label={category.title}
              name="product-type"
              value={category.englishTitle}
              key={category._id}
              onChange={(e) => categoryHandler(e)}
              checked={selectedCategories.includes(category.englishTitle)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsFilter;
