import { toLocalDateStringShort } from "@/utils/toLocalDate";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { HiCheckCircle } from "react-icons/hi";
import Loading from "@/common/Loading";

const { userListTableHeads } = require("@/constants/tableHeads");

function UsersTable({ users = [], isLoading }) {
  // console.log(users);
  if (isLoading) return <Loading />;
  return (
    <div className="shadow-sm overflow-auto mt-8">
      <table className="border-collapse w-full table-auto min-w-[800px] text-sm">
        <thead>
          <tr>
            {userListTableHeads.map((item) => {
              return (
                <th className="whitespace-nowrap table__th" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            console.log(user.name, "userTable");
            return (
              <tr className="" key={user?._id}>
                <td className="table__td">{index + 1}</td>
                <td className="table__td">{user?.name || "کاربر "}</td>
                <td className="table__td trancate whitespace-nowrap ">
                  {user?.email}
                </td>
                <td className="table__td ">
                  <div className="flex whitespace-nowrap gap-x-2">
                    {user.isVerifiedPhoneNumber && (
                      <HiCheckCircle className="w-5 h-5 fill-success" />
                    )}
                    {toPersianNumbers(user?.phoneNumber)}
                  </div>
                </td>
                <td className="table__td truncate whitespace-nowrap ">
                  <div className="overflow-y-auto items-start gap-y-2  flex flex-col ">
                    {user?.products ? (
                      user?.Products.map((product) => {
                        return (
                          <span
                            className="badge badge--secondary"
                            key={product?._id}
                          >
                            {product?.title}
                          </span>
                        );
                      })
                    ) : (
                      <span>-</span>
                    )}
                  </div>
                </td>
                <td className="table__td">
                  {toLocalDateStringShort(user?.createdAt)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default UsersTable;
