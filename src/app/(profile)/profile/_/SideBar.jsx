"use client";
import { logout } from "@/services/AuthServices";
import Link from "next/link";
import React from "react";
import { IoMdExit } from "react-icons/io";
import { HiHome, HiX } from "react-icons/hi";
import ButtonIcon from "../../../../ui/ButtonIcon";

function SideBar({ onClose, children }) {
  const logoutHandler = async () => {
    await logout();
    document.location.href = "/";
  };
  return (
    <div className="overflow-y-auto flex flex-col p-5 h-screen pt-10 mt-10 lg:pt-8">
      {/* SideBar header */}
      <div className="flex items-center justify-between w-full mb-5 pb-2 border-b border-b-secondary-200">
        <Link
          href="/"
          className="flex items-center gap-x-4 justify-center text-secondary-700 
       "
        >
          <HiHome className="w-6 h-6" />
          <span>خانه</span>
        </Link>
        <ButtonIcon
          onClick={onClose}
          className="block lg:hidden border-none"
          variant="outline"
        >
          <HiX />
        </ButtonIcon>
      </div>

      {/* SideBar content */}
      <div className="overflow-y-auto flex-auto">
        {children}
        <div
          onClick={logoutHandler}
          className="flex items-center gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-700 py-3 px-4 hover:text-red-400 cursor-pointer"
        >
          <IoMdExit className="ml-4 h-5 w-5" />
          <span>خروج</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
