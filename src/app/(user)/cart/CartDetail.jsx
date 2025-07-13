import { useAddToCart, useDecrementCart } from "@/hooks/useCart";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import React from "react";
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function cartDetail({ cartItem }) {
  const queryClient = useQueryClient();
  const {
    data,
    isPending,
    mutateAsync: mutateDecFromCart,
  } = useDecrementCart();
  const { mutateAsync } = useAddToCart();

  const addToCardHandler = async () => {
    try {
      const { message } = await mutateAsync(cartItem._id);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const decrementCartHandler = async () => {
    try {
      const { message } = await mutateDecFromCart(cartItem._id);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div
      key={cartItem._id}
      className="border rounded-2xl p-4 flex flex-col  justify-between shadow-md mb-4"
    >
      <div className="whitespace-nowrap truncate">
        <span className="flex-1 text-sm font-semibold  mb-2 md:mb-0">
          {cartItem.title}
        </span>
      </div>

      <div className="flex items-center justify-between gap-4 flex-1 flex-wrap md:flex-nowrap">
        <div>
          <p className="text-sm">
            قیمت :
            <span
              className={`ml-2 ${
                cartItem.discount
                  ? "line-through text-gray-500 text-sm"
                  : "font-bold text-black"
              }`}
            >
              {toPersianNumbersWithComma(cartItem.price)}
            </span>
            <span className="text-[9px]">تومان</span>
          </p>
          {!!cartItem.discount && (
            <div className="flex items-center gap-x-2 mt-2">
              <p className="font-bold text-green-600">
                {toPersianNumbersWithComma(cartItem.offPrice)}
              </p>
              <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
                {toPersianNumbers(cartItem.discount)}٪
              </div>
            </div>
          )}
        </div>

        <span className="border-r-2 pr-2 text-sm font-medium text-gray-600">
          تعداد : {toPersianNumbers(cartItem.quantity)}
        </span>

        <div className="flex gap-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition">
            <HiPlus onClick={addToCardHandler} className="w-4 h-4" />
          </button>
          <button
            onClick={() => decrementCartHandler(cartItem._id)}
            className="border rounded-full p-2 hover:bg-gray-100 transition"
          >
            {cartItem.quantity > 1 ? (
              <HiMinus className="w-4 h-4 text-gray-600" />
            ) : (
              <HiOutlineTrash className="text-rose-500 w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default cartDetail;
