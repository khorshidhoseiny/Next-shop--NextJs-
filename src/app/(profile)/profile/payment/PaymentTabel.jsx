import { userPaymentTHeads } from "@/constants/tableHeads";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import React from "react";

function PaymentTabel({ payments = [] }) {
  return (
    <div className="shadow-sm overflow-auto mt-4">
      <table className="border-collapse table-auto min-w-[800px] text-sm">
        <thead>
          <tr>
            {userPaymentTHeads?.map((item) => {
              return (
                <th className="whitespace-nowrap table__th" key={item.id}>
                  {item.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="bg-secondary-100/30">
          {payments
            ? payments.map((payment, index) => {
                return (
                  <tr key={payment._id}>
                    <td className="table__td">{index}</td>
                    <td className="table__td  whitespace-nowrap truncate">
                      {payment.invoiceNumber}
                    </td>
                    <td className="table__td  max-w-[280px] whitespace-nowrap truncate">
                      {payment.description}
                    </td>
                    <td className="table__td">
                      <div className="flex flex-col gap-y-2 items-start">
                        {payment.cart.productDetail.map((product) => {
                          return (
                            <span
                              className="badge badge--secondary"
                              key={product._id}
                            >
                              {product.title}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    <td className="table__td font-bold text-lg">
                      {toPersianNumbersWithComma(payment.amount)}
                    </td>
                    <td className="table__td">
                      {toLocalDateStringShort(payment.createdAt)}
                    </td>
                    <td className="table__td">
                      {payment.status === "COMPLETED" ? (
                        <span className="badge badge--success">موفق</span>
                      ) : (
                        <span className="badge badge--error">ناموفق</span>
                      )}
                    </td>
                  </tr>
                );
              })
            : "درحال بارگذاری ..."}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentTabel;
