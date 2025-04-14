"use client";
import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const { data, isLoading } = useGetUser();

  const { cart, user } = data || {};

  return (
    <header
      className={`shadow-md mb-10 sticky transition-all duration-300 ${
        isLoading ? "blur-sm opacity-70" : "blur-0 opacity-100"
      }`}
    >
      <nav>
        <ul className="flex container justify-between w-screen p-3 max-w-screen-xl items-center ">
          <li>
            <Link className="block py-2" href="/">
              خانه
            </Link>
          </li>
          <li>
            <Link className="block py-2" href="/products">
              محصولات
            </Link>
          </li>
          <li>
            <Link className="block py-2" href="/profile">
              پروفایل کاربر
            </Link>
          </li>
          <li>
            <Link className="block py-2" href="/admin">
              پنل ادمین
            </Link>
          </li>
          <li>
            <Link className="block py-2 relative" href="/products">
              <FaShoppingCart className="w-5 h-5 " />

              <span className=" bg-green-500 flex justify-center items-center text-white text-xs absolute top-0 left-4 font-bold  w-4 h-4 rounded-full  ">
                {cart ? cart.payDetail.orderItems.length : 0}
              </span>
            </Link>
          </li>
          <li>
            {user ? (
              <span>{user.name}</span>
            ) : (
              <Link className="block py-2" href="/auth">
                ورود
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
