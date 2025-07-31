"use client";
import { useGetUsers } from "@/hooks/useAuth";
import useMoveBack from "@/hooks/useMoveBack";
import { RiArrowGoBackLine } from "react-icons/ri";
import Loading from "@/common/Loading";
import UsersTable from "./usersTable";
import Button from "@/common/Button";

function UsersPage() {
  const back = useMoveBack();
  const { data, isLoading } = useGetUsers();
  const { users = [] } = data || {};
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
        <UsersTable users={users} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default UsersPage;
