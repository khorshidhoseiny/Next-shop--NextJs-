"use client";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { ImProfile } from "react-icons/im";
import { FaRegObjectGroup } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
const sidebarNavs = [
  {
    id: 1,
    title: "داشبورد",
    icon: <FaRegObjectGroup className="w-5 h-5" />,
    href: "/profile",
  },
  {
    id: 2,
    title: "اطلاعات کاربری",
    icon: <ImProfile className="w-5 h-5" />,
    href: "/profile/me",
  },
  {
    id: 3,
    title: "سفارشات",
    icon: <MdOutlinePayments className="w-5 h-5" />,
    href: "/profile/payment",
  },
];

function SideBarNavs() {
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
  );
}

export default SideBarNavs;
