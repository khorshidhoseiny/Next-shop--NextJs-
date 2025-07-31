"use client";
import Loading from "@/common/Loading";
import RHFTextField from "@/common/RHFTextField";
import { completeProfile } from "@/services/AuthServices";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Page() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { mutateAsync: mutateCompleteProfile, isPending: isCompleting } =
    useMutation({
      mutationFn: completeProfile,
    });

  const onSubmit = async (data) => {

    try {
      const { message } = await mutateCompleteProfile(data);
      router.push("/");
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <RHFTextField
            label="نام و نام خانوادگی"
            name="name"
            register={register}
            validationSchema={{
              required: "نام و نام خانوادگی  ضروری است",
            }}
            errors={errors}
          />
          <RHFTextField
            label="ایمیل"
            name="email"
            register={register}
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "ایمیل نامعتبر است",
              },
            }}
            errors={errors}
          />
          <div>
            {isCompleting ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
