import RadioInput from "@/common/RadioInput";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

const sortOptions = [
  { id: 1, label: "جدید ترین", value: "latest" },
  { id: 2, label: "قدیمی ترین", value: "earliest" },
  { id: 3, label: "محبوب ترین", value: "popular" },
];
function ProductsSort() {
  const searchParams = useSearchParams();
  const [sort, setSort] = useState(searchParams.get("sort") || "");
  const pathname = usePathname();
  const router = useRouter();

  const sortProducts = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const sortHandler = (e) => {
    const value = e.target.value;
    setSort(value);
    router.push(pathname + "?" + sortProducts("sort", value));
  };

  return (
    <div>
      <p className="font-bold mb-4">مرتب سازی</p>
      <ul className="space-y-4">
        {sortOptions.map((item) => {
          return (
            <RadioInput
              id={item.id}
              label={item.label}
              name="product-sort"
              value={item.value}
              key={item.id}
              onChange={(e) => sortHandler(e)}
              checked={sort === item.value}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsSort;
