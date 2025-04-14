"use client";
import React, { useEffect, useState } from "react";
import SendOptForm from "./_/components/SendOptForm";
import { checkOtp, getOtp } from "@/services/AuthServices";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import CheckOtpForm from "./_/components/CheckOtpHandler";
import { data } from "autoprefixer";

const RESEND_TIME = 90;
function AuthPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const [phoneNumber, setPhoneNumber] = useState("");

  const {
    mutateAsync: mutateGetOtp,
    isPending,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });
  const { mutateAsync: mutateCheckOtp, isPending: isCheckingOtp } = useMutation(
    {
      mutationFn: checkOtp,
    }
  );

  const CheckOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateCheckOtp({ phoneNumber, otp });
      toast.success(message);
      if (user.isActive) {
        router.push("/profile");
      } else {
        router.push("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await mutateGetOtp({ phoneNumber });
      toast.success(message);
      setStep(2);
      setTime(RESEND_TIME);
      setOtp("");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [time]);

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOptForm
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              console.log(phoneNumber);
            }}
            phoneNumber={phoneNumber}
            onSubmit={sendOtpHandler}
            isPending={isPending}
          />
        );
      case 2:
        return (
          <CheckOtpForm
            onBack={() => setStep((s) => s - 1)}
            time={time}
            otpResponse={otpResponse}
            onResendOtp={sendOtpHandler}
            otp={otp}
            setOtp={setOtp}
            onSubmit={CheckOtpHandler}
            isCheckingOtp={isCheckingOtp}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="sm:max-w-sm w-full">{renderSteps()}</div>
    </div>
  );
}

export default AuthPage;
