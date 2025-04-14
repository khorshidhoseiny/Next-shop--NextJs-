"use client";
import Loading from "@/common/Loading";
import RHFTextField from "@/common/RHFTextField";

import { useGetUser } from "@/hooks/useAuth";
import { updateProfile } from "@/services/AuthServices";
import { includeObj } from "@/utils/objectUtils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function MePage() {
  const { data, isLoading } = useGetUser();
  const { user } = data || {};

  const queryClient = useQueryClient();
  const { mutateAsync, isPending: isUpdating } = useMutation({
    mutationFn: updateProfile,
  });

  const includesKey = ["name", "email", "phoneNumber", "biography"];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      const filtered = includeObj(user, includesKey);
      reset(filtered); // مقداردهی اولیه به فرم با داده‌های کاربر
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const { message } = await mutateAsync(data);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  if (isLoading) return <Loading />;
  return (
    <div>
      <h1>اطلاعات کاربری</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(includeObj(user, includesKey)).map((key) => {
          return (
            <RHFTextField
              label={key}
              name={key}
              key={key}
              register={register}
              required
              errors={errors}
            />
          );
        })}
        {isUpdating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary font-bold w-full">
            تایید
          </button>
        )}
      </form>
    </div>
  );
}

export default MePage;
