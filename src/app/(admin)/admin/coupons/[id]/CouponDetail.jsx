import { couponDetailTableTHeads } from "@/constants/tableHeads";
import { toLocalDateString, toLocalDateStringShort } from "@/utils/toLocalDate";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import React from "react";

function CouponDetail({ coupon }) {
  return (
    <div className="shadow-sm overflow-auto my-8 ">
      <table className="border-collapse shadow-md rounded-xl table-auto min-w-[800px] text-sm">
        <thead>
          <tr>
            {couponDetailTableTHeads.map((item) => {
              return (
                <th
                  className="whitespace-nowrap  bg-secondary-100/50 table__th"
                  key={item.id}
                >
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table__td font-bold  whitespace-nowrap truncate">
              {coupon.code}
            </td>
            <td className="table__td   whitespace-nowrap truncate">
              <span className="badge badge--primary">{coupon.type}</span>
            </td>
            <td className="table__td max-w-[280px]  whitespace-nowrap truncate">
              {coupon.isActive ? (
                <span key={coupon._id} className="badge badge--success">
                  فعال
                </span>
              ) : (
                <span key={coupon._id} className="badge badge--secondary">
                  غیرفعال
                </span>
              )}
            </td>

            <td className="table__td  whitespace-nowrap truncate">
              {toPersianNumbers(coupon.amount)}
            </td>
            <td className="table__td  whitespace-nowrap truncate">
              {toLocalDateString(coupon.expireDate)}
            </td>
            <td className="table__td space-y-2 flex flex-col items-start">
              {coupon.productIds.map((p) => {
                return (
                  <span className="badge badge--secondary">{p.title}</span>
                );
              })}
            </td>
            <td className="table__td  whitespace-nowrap truncate">
              {toPersianNumbers(coupon.usageCount)}
            </td>
            <td className="table__td  whitespace-nowrap truncate">
              {toPersianNumbers(coupon.usageLimit)}
            </td>

            <td className="table__td  whitespace-nowrap truncate">
              {toLocalDateStringShort(coupon.createdAt)}
            </td>
            <td className="table__td  whitespace-nowrap truncate">
              {toLocalDateStringShort(coupon.updatedAt)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CouponDetail;
