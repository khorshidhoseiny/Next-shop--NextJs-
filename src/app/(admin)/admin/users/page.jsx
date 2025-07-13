"use client";
import Loading from "@/common/Loading";
import { useGetUsers } from "@/hooks/useAuth";
import React from "react";
import UsersTable from "./usersTable";
import useMoveBack from "@/hooks/useMoveBack";
import Button from "@/common/Button";
import { RiArrowGoBackLine } from "react-icons/ri";

function usersPage() {
  const back = useMoveBack();
  const { data, isLoading } = useGetUsers();
  const { users } = data || {};
  if (isLoading) return <Loading />;

  return (
    <div className="flex  flex-col ">
      <div className="flex mb-6 justify-between items-center">
        <h1 className="title">اطلاعات کاربران </h1>
        <Button className={"flex gap-x-3"} onClick={back}>
          بازگشت <RiArrowGoBackLine className="w-4 h-4 text-white" />
        </Button>
      </div>
      <div className="rounded-xl shadow-sm bg-white/90 border border-secondary-100  overflow-auto">
        <UsersTable users={users} />
      </div>
    </div>
  );
}

export default usersPage;
