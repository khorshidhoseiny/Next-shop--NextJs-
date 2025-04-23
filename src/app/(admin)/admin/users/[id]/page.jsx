"use client";
import { useParams } from "next/navigation";
import React from "react";
import { CiPhone } from "react-icons/ci";
import { FaFile, FaMailBulk, FaPhone, FaUser } from "react-icons/fa";

function userInfo() {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>اطلاعات کاربری {}</h1>
      <div className="flex justify-around items-end">
        <div className="flex flex-col space-y-3">
          <div className="flex gap-x-3">
            <FaPhone className="w-4 h-4 text-primary-700" />
            <span className=" text-secondary-400">شماره موبایل</span>
          </div>
          <div>
            <div className="flex gap-x-3">
              <FaMailBulk className="w-4 h-4 text-primary-700" />
              <span className=" text-secondary-400">ایمیل</span>
            </div>
          </div>
          <div>
            <div className="flex gap-x-3">
              <FaUser className="w-4 h-4 text-primary-700" />
              <span className=" text-secondary-400">نام و نام خانوادگی</span>
            </div>
          </div>
          <div>icon span</div>
          <div>icon span</div>
        </div>
        <div className="flex flex-col space-y-3">
          <div>j</div>
          <div>j</div>
          <div>j</div>
          <div>j</div>
          <div>j</div>
        </div>
      </div>
    </div>
  );
}

export default userInfo;
