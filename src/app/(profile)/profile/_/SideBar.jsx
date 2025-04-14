"use client";
import { logout } from "@/services/AuthServices";
import Link from "next/link";
import React from "react";

function SideBar() {
  const logoutHandler = async () => {
    await logout();
    document.location.href = "/";
  };
  return (
    <ul className="flex flex-col space-y-8">
      <li>
        <Link href={"/"}> خانه</Link>
      </li>
      <li>
        <Link href={"/profile/me"}> اطلاعات کاربری</Link>
      </li>
      <li>
        <button onClick={logoutHandler}>خروج از حساب کاربری</button>
      </li>
    </ul>
  );
}

export default SideBar;
