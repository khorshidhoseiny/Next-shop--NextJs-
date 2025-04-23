"use client";
import Loading from "@/common/Loading";
import { useGetUsers } from "@/hooks/useAuth";
import React from "react";
import UsersTable from "./usersTable";

function usersPage() {
  const { data, isLoading } = useGetUsers();
  const { users } = data || {};
  if (isLoading) return <Loading />;

  return (
    <div className="flex  flex-col ">
      <h1 className="text-xl flex items-start justify-start font-bold">
        اطلاعات کاربران
      </h1>
      <div className="flex justify-center items-center ">
        <UsersTable users={users} />
      </div>
    </div>
  );
}

export default usersPage;
