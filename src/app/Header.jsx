"use client";
import { useGetUser } from "@/hooks/useAuth";
import NavLink from "@/components/NavLink";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { GrUserAdmin } from "react-icons/gr";

export default function Header() {
  const { data, isLoading } = useGetUser();
  const { cart, user } = data || {};

  return (
    <header
      className={`bg-white px-3 shadow mb-10 sticky top-0 z-50 transition-all duration-300 ${
        isLoading ? "blur-sm opacity-70" : "blur-0 opacity-100"
      }`}
    >
      <nav className="container max-w-screen-xl mx-auto flex justify-between items-center p-3">
        <Link href="/" className="text-secondary-700 font-bold text-lg">
          <span className="text-primary-800">نکست</span> شاپ
        </Link>

        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <NavLink path="/">خانه</NavLink>
          </li>
          <li>
            <NavLink path="/products">محصولات</NavLink>
          </li>
          <li>
            <Link
              href="/admin"
              className="flex items-center gap-1 hover:text-primary-700 transition"
            >
              <span className="text-xs font-semibold">پنل ادمین</span>
              <GrUserAdmin className="w-5 h-5" />
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {user ? (
            <Link
              href="/profile"
              className="flex items-center gap-1 hover:text-primary-700 transition"
            >
              <span className="text-xs font-semibold">پروفایل</span>
              <FaRegUser className="w-5 h-5" />
            </Link>
          ) : (
            <Link
              href="/auth"
              className="flex items-center gap-1 hover:text-primary-700 transition"
            >
              <span className="text-xs font-semibold">ورود | ثبت نام</span>
              <MdOutlineLogin className="w-5 h-5" />
            </Link>
          )}
          <Link href="/cart" className="relative">
            <PiShoppingCartSimpleBold className="w-6 h-6 text-secondary-800" />
            <span className="absolute -top-1 -left-2 bg-primary-700 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full font-bold">
              {cart ? cart.payDetail.orderItems.length : 0}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
