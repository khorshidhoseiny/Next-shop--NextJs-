"use client";
import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import Link from "next/link";
import { GrUserAdmin } from "react-icons/gr";
import React from "react";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import NavLink from "@/components/NavLink";
import { MdOutlineLogin } from "react-icons/md";

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
        <ul className="flex container justify-around w-screen p-3 max-w-screen-xl items-center ">
          <li>
            <NavLink className="block py-2" path="/">
              خانه
            </NavLink>
          </li>
          <li>
            <NavLink className="block py-2" path="/products">
              محصولات
            </NavLink>
          </li>

          <li>
            <Link className="block py-2" href="/admin">
              <div className="flex gap-x-3 items-center">
                <span className="text-xs font-semibold text-secondary-700">
                  پنل ادمین
                </span>
                <GrUserAdmin className="w-6 h-6 text-secondary-800" />
              </div>
            </Link>
          </li>

          <li>
            {user ? (
              <Link className="block py-2" href="/profile">
                <div className="flex gap-x-3 items-center">
                  {" "}
                  <span className="text-xs font-semibold text-secondary-700">
                    پروفایل
                  </span>
                  <FaRegUser className="w-6 h-6 text-secondary-800" />
                </div>
              </Link>
            ) : (
              <Link className="block py-2" href="/auth">
                <div className="flex gap-x-3 items-center">
                  {" "}
                  <span className="text-xs font-semibold text-secondary-700">
                    ورود | ثبت نام
                  </span>
                  <MdOutlineLogin className="w-6 h-6 text-secondary-800" />
                </div>
              </Link>
            )}
          </li>

          <li>
            <Link className="block py-2 relative" href="/cart">
              <PiShoppingCartSimpleBold className="w-6 h-6 text-secondary-800" />

              <span className=" bg-green-500 flex justify-center items-center text-white text-xs absolute top-0 left-4 font-bold  w-4 h-4 rounded-full  ">
                {cart ? cart.payDetail.orderItems.length : 0}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
