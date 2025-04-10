"use client";
import React, { useState } from "react";
import SendOptForm from "./_/components/SendOptForm";
import { getOtp } from "@/services/userServices";
import http from "@/services/httpService";
import toast from "react-hot-toast";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  const CheckOtpHandler = (e) => {
    setOtp(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await getOtp(phoneNumber);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center ">
      <div className="sm:max-w-sm w-full">
        <SendOptForm
          onChange={phoneNumberHandler}
          phoneNumber={phoneNumber}
          onSubmit={submitHandler}
        />
      </div>
    </div>
  );
}

export default AuthPage;
