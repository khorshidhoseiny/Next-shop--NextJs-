import { useAddToCart, useDecrementCart } from "@/hooks/useCart";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import React from "react";
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi";

function cartDetail({ cartItem }) {
  const {
    data,
    isPending,
    mutateAsync: mutateDecrementInCart,
  } = useDecrementCart();
  const { mutateAsync: mutateAddCart } = useAddToCart();

  return (
    <div
      key={cartItem._id}
      className="border rounded-2xl p-4 flex flex-col md:flex-row justify-between shadow-md mb-4"
    >
      <span className="flex-1 font-bold text-lg mb-2 md:mb-0">
        {cartItem.title}
      </span>

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
            <HiPlus className="w-4 h-4" />
          </button>
          <button className="border rounded-full p-2 hover:bg-gray-100 transition">
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
