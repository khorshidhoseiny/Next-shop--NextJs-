"use client";
import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import { useAddToCart } from "@/hooks/useCart";
import { addToCart } from "@/services/cartService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

function AddToCart({ product }) {
  console.log(product);

  const router = useRouter();
  const { data } = useGetUser();
  const { user } = data || {};
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useAddToCart();

  const addToCardHandler = async () => {
    if (!user) {
      toast("لطفا وارد حساب کاربری خود شوید ", {
        icon: "👩🏻‍💻❗️",
      });
      router.push("/auth");

      return;
    }
    try {
      const { message } = await mutateAsync(product._id);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-success">
                  با موفقیت به سبد خرید اضافه شد ✅
                </p>
                <p className="mt-3 text-sm text-secondary-500">{message}</p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => <Link href={"/cart"} />}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              ادامه سفارش
            </button>
          </div>
        </div>
      ));
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  const isInCart = (user, product) => {
    if (!user) return false;
    return user.cart?.products.some((p) => p.productId === product._id);
  };
  console.log(user.cart?.products.some((p) => p.productId === product._id));

  return (
    <div>
      <button
        onClick={addToCardHandler}
        className={`btn ${
          isInCart(user, product) ? "btn--secondary btn" : "btn--primary"
        }`}
      >
        {isPending ? (
          <Loading />
        ) : (
          <p>
            {isInCart(user, product)
              ? "به سبد خرید اضافه شد"
              : "اضافه به سبد خرید"}
          </p>
        )}
      </button>
    </div>
  );
}
export default AddToCart;
