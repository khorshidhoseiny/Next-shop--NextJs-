"use client";

import { useGetUser } from "@/hooks/useAuth";
import ButtonIcon from "../ui/ButtonIcon";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaUser, FaXmark } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Link from "next/link";
import Drawer from "@/common/Drawer";
import SideBar from "./(profile)/profile/_/SideBar";
import SideBarNavs from "./(profile)/profile/_/SideBarNavs";

function Header({ children }) {
  const { data, isLoading } = useGetUser();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { user, cart } = data || {};

  const Greetings = () => {
    let myDate = new Date();
    let hours = myDate.getHours();
    let greet;
    let icon;

    if (hours < 12) {
      greet = "صبح ";
      icon = "☕️";
    } else if (hours >= 12 && hours <= 17) {
      greet = "عصر";
      icon = "🌄";
    } else if (hours >= 17 && hours <= 24) {
      greet = "شب";
      icon = "🌃";
    }

    return (
      <span>
        {greet}&nbsp;بخیر
        <span className="text-lg"> {icon}</span>
      </span>
    );
  };
  return (
    <header
      className={`bg-secondary-0 justify-between flex items-center ${
        isLoading ? "bg-opacity-30 blur-md" : ""
      }`}
    >
      <div className="flex justify-start py-5 gap-x-3 px-4 lg:px-8">
        <ButtonIcon
          className="block lg:hidden border-none"
          variant="outline"
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
        >
          {isOpenDrawer ? (
            <FaXmark className="w-5 h-5" />
          ) : (
            <HiMiniBars3BottomRight className="w-5 h-5" />
          )}
        </ButtonIcon>
        <h1 className="font-bold text-secondary-600">
          سلام {user?.name}{" "}
          <span className="text-secondary-300 font-black">&nbsp;|&nbsp;</span>
          {Greetings()}
        </h1>
      </div>
      <div className="flex gap-x-4 px-4 lg:px-8 items-center">
        <div>
          <Link className="block py-2 relative" href="/cart">
            <PiShoppingCartSimpleBold className="w-6 h-6 text-secondary-800" />

            <span className=" bg-green-500 flex justify-center items-center text-white text-xs absolute top-0 left-4 font-bold  w-4 h-4 rounded-full  ">
              {cart ? cart.payDetail.orderItems.length : 0}
            </span>
          </Link>
        </div>
        <div>
          <Link className="block py-2" href="/profile">
            <FaRegUser className="w-6 h-6 text-secondary-800" />
          </Link>
        </div>
      </div>
      <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
        <SideBar onClose={() => setIsOpenDrawer(false)}>{children}</SideBar>
      </Drawer>
    </header>
  );
}

export default Header;
