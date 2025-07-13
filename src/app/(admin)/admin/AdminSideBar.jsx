"use client";

import classNames from "classnames";
import Link from "next/link";
import { RiCoupon2Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import {
  MdOutlineDashboard,
  MdPayment,
  MdOutlineCategory,
} from "react-icons/md";
import React from "react";
import { useRouter } from "next/navigation";

const sidebarNavs = [
  {
    id: 1,
    title: "داشبورد",
    icon: <MdOutlineDashboard className="w-5 h-5" />,
    href: "/admin",
  },
  {
    id: 2,
    title: "کاربران",
    icon: <FaUsers className="w-5 h-5" />,
    href: "/admin/users",
  },
  {
    id: 3,
    title: "سفارشات",
    icon: <MdPayment className="w-5 h-5" />,
    href: "/admin/payments",
  },
  {
    id: 4,
    title: "کد های تخفیف",
    icon: <RiCoupon2Line className="w-5 h-5" />,
    href: "/admin/coupons",
  },
  {
    id: 5,
    title: "محصولات",
    icon: <MdOutlineDashboard className="w-5 h-5" />,
    href: "/admin/products",
  },
  {
    id: 6,
    title: "دسته بندی ها",
    icon: <MdOutlineCategory className="w-5 h-5" />,
    href: "/admin/categories",
  },
];

function AdminSideBar() {
  const router = useRouter();
  return (
    <ul className="space-y-2">
      {sidebarNavs.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              href={nav.href}
              className={classNames(
                "flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-secondary-700 py-3 px-4",
                {
                  "bg-primary-100/40 !font-bold text-primary-900":
                    router.pathname === nav.href,
                }
              )}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul>

    // <ul className="flex flex-col space-y-8">
    //   <li>
    //     <Link href={"/"}> صفحه اصلی</Link>
    //   </li>
    //   <li>
    //     <Link href={"/admin"}>داشبورد</Link>
    //   </li>
    //   <li>
    //     <Link href={"/admin/users"}> کاربران</Link>
    //   </li>
    //   <li>
    //     <Link href={"/admin/products"}> محصولات</Link>
    //   </li>
    //   <li>
    //     <Link href={"/admin/payments"}> سفارشات</Link>
    //   </li>
    //   <li>
    //     <Link href={"/admin/categories"}> دسته بندی</Link>
    //   </li>
    //   <li>
    //     <Link href={"/admin/coupons"}>کد تخفیف</Link>
    //   </li>
    //   <li>
    //     <button onClick={logoutHandler}>خروج از حساب کاربری</button>
    //   </li>
    // </ul>
  );
}

export default AdminSideBar;
