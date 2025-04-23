"use client";
import { logout } from "@/services/AuthServices";
import Link from "next/link";
import React from "react";

function AdminSideBar() {
  const logoutHandler = async () => {
    await logout();
    document.location.href = "/";
  };
  return (
    <ul className="flex flex-col space-y-8">
      <li>
        <Link href={"/"}> صفحه اصلی</Link>
      </li>
      <li>
        <Link href={"/admin"}>داشبورد</Link>
      </li>
      <li>
        <Link href={"/admin/users"}> کاربران</Link>
      </li>
      <li>
        <Link href={"/admin/products"}> محصولات</Link>
      </li>
      <li>
        <Link href={"/admin/payments"}> سفارشات</Link>
      </li>
      <li>
        <Link href={"/admin/categories"}> دسته بندی</Link>
      </li>
      <li>
        <Link href={"/admin/coupons"}>کد تخفیف</Link>
      </li>
      <li>
        <button onClick={logoutHandler}>خروج از حساب کاربری</button>
      </li>
    </ul>
  );
}

export default AdminSideBar;
