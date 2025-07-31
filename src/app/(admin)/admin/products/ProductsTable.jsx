import { productListTableTHeads } from "@/constants/tableHeads";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import Link from "next/link";
import React from "react";
import { HiEye, HiTrash } from "react-icons/hi";
import { RiEdit2Line } from "react-icons/ri";
import { useQueryClient } from "@tanstack/react-query";
import { useRemoveProduct } from "@/hooks/useProducts";
import toast from "react-hot-toast";
import truncateText from "@/utils/trancateText";
import Loading from "@/common/Loading";

function ProductsTable({ products = [] }) {
  const { mutateAsync } = useRemoveProduct();
  const queryClient = useQueryClient();

  const removeProductHandler = async (id) => {
    try {
      const { message } = await mutateAsync(id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
    } catch (error) {
      toast.error(error?.respone?.data?.message);
    }
  };

  return (
    <div className="shadow-sm overflow-auto mt-8">
      <table className="border-collapse  table-auto w-full min-w-[800px] text-sm">
        <thead>
          <tr>
            {productListTableTHeads.map((item) => {
              return (
                <th
                  className="whitespace-nowrap text-center font-bold table__th"
                  key={item.id}
                >
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="bg-secondary-100/40">
          {products ? (
            products?.map((product, index) => {
              return (
                <tr className="" key={product._id}>
                  <td className="table__td">{index + 1}</td>
                  <td className="table__td truncate whitespace-nowrap font-medium">
                    {truncateText(product?.title, 20)}
                  </td>
                  <td className="table__td trancate whitespace-nowrap ">
                    {product?.category?.title || ""}
                  </td>
                  <td className="table__td ">
                    <div className="flex whitespace-nowrap gap-x-2">
                      {toPersianNumbersWithComma(product?.price)}
                    </div>
                  </td>
                  <td className="table__td ">
                    {toPersianNumbersWithComma(product?.discount)}
                  </td>
                  <td className="table__td">
                    {toPersianNumbersWithComma(product?.offPrice)}
                  </td>
                  <td className="table__td">
                    {toPersianNumbersWithComma(product?.countInStock)}
                  </td>

                  <td className="table__td ">
                    <div className="flex gap-x-3 justify-center ">
                      <Link href={`/admin/products/${product._id}`}>
                        <HiEye className="w-6 h-6 text-primary-700" />
                      </Link>
                      <button onClick={() => removeProductHandler(product._id)}>
                        <HiTrash className="text-rose-600 w-6 h-6" />
                      </button>
                      <Link href={`/admin/products/edit/${product._id}`}>
                        <RiEdit2Line className="w-6 h-6 text-secondary-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <Loading />
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
