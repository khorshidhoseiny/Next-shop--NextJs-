import InfoRow from "@/common/infoRow";
import { toLocalDateString, toLocalDateStringShort } from "@/utils/toLocalDate";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { HiTicket } from "react-icons/hi";
import { RiCoreosFill } from "react-icons/ri";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import ProductDetail from "../../products/[id]/ProductDetail";
import {
  adminPaymentDetail_Cart_Heads,
  adminPaymentDetail_User_Heads,
  adminPaymentDetailHeads,
} from "@/constants/tableHeads";

function PaymentDetail({ payment }) {
  return (
    <div className="space-y-4">
      {/* payment Detail */}
      <h1 className="text-lg mt-10 font font-semibold  text-secondary-700">
        جزئیات پرداخت
      </h1>
      <div className="shadow-sm flex justify-center  overflow-scroll p-3 ">
        <table className="border-collapse shadow-md rounded-xl table-auto min-w-[800px] w-full text-sm">
          <thead>
            <tr className="overflow-scroll">
              {adminPaymentDetailHeads.map((item) => {
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
              <td className="table__td  whitespace-nowrap truncate">
                {payment.invoiceNumber}
              </td>
              <td className="table__td   whitespace-nowrap truncate">
                {payment.paymentMethod}
              </td>
              <td className="table__td max-w-[280px]  whitespace-nowrap truncate">
                {payment.description}
              </td>
              <td className="table__td  whitespace-nowrap truncate">
                {toPersianNumbers(payment.amount)}
              </td>
              <td className="table__td  whitespace-nowrap truncate">
                {toLocalDateStringShort(payment.createdAt)}
              </td>
              <td className="table__td  whitespace-nowrap truncate">
                {toLocalDateStringShort(payment.updatedAt)}
              </td>

              <td className="table__td">
                {payment.status === "COMPLETED" ? (
                  <span className="badge badge--success">موفق</span>
                ) : (
                  <span className="badge badge--error">ناموفق</span>
                )}
              </td>
              <td className="table__td flex justify-center whitespace-nowrap truncate">
                {payment.isPaid ? (
                  <FaCheck className="w-4 h-4 text-green-600" />
                ) : (
                  <RiCoreosFill className="w-4 h-4 text-red-600" />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* user Payment Detail */}
      <h1 className="text-lg font font-semibold  text-secondary-700">
        جزئیات کاربر
      </h1>
      <div className="shadow-sm flex justify-center p-3  overflow-auto ">
        <table className="border-collapse w-full mt-5 rounded-xl table-auto min-w-[800px] text-sm">
          <thead>
            <tr>
              {adminPaymentDetail_User_Heads.map((item) => {
                return (
                  <th
                    className="whitespace-nowrap bg-secondary-100/50 table__th"
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
              <td className="table__td">
                <Image
                  alt={"user-image"}
                  src={payment.avatarUrl || "/images/avatar.png"}
                  width={30}
                  height={30}
                  className=""
                />
              </td>
              <td className="table__td">
                <span className="font-semibold">{payment.user.name}</span>
              </td>
              <td className="table__td">
                <span>{toPersianNumbers(payment.user.phoneNumber)}</span>
              </td>
              <td className="table__td">
                <span>{payment.user.email}</span>
              </td>

              <td className="table__td">
                {toLocalDateString(payment.createdAt)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 className="text-lg font font-semibold text-secondary-700">
        جزئیات سبد خرید
      </h1>
      <div className="shadow-sm flex  justify-center p-3  overflow-auto ">
        <table className="border-collapse w-full mt-5 rounded-xl table-auto min-w-[800px]  text-sm">
          <thead>
            <tr>
              {adminPaymentDetail_Cart_Heads.map((item) => {
                return (
                  <th
                    className="whitespace-nowrap text-center bg-secondary-100/50 table__th"
                    key={item.id}
                  >
                    {item.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr key={payment._id}>
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

              <td className="table__td">
                {toPersianNumbersWithComma(
                  payment.cart.payDetail.totalGrossPrice
                )}
              </td>
              <td className="table__td">
                {toPersianNumbersWithComma(
                  payment.cart.payDetail.totalOffAmount
                )}
              </td>
              <td className="table__td">
                {toPersianNumbersWithComma(payment.cart.payDetail.totalPrice)}
              </td>
              <td className="table__td">
                <div className="flex flex-col gap-y-2 items-start">
                  {payment.cart.productDetail.map((product) => {
                    return (
                      <span
                        className="badge badge--secondary"
                        key={product._id}
                      >
                        {product.slug}
                      </span>
                    );
                  })}
                </div>
              </td>

              <td className="table__td">
                <div className="flex flex-col gap-y-2 items-start">
                  {payment.cart.productDetail.map((product) => {
                    return (
                      <span key={product._id}>
                        {toPersianNumbers(product.quantity)}
                      </span>
                    );
                  })}
                </div>
              </td>

              <td className="table__td">
                <div className="flex flex-col gap-y-2 items-start">
                  {payment.cart.productDetail.map((product) => {
                    return (
                      <span key={product._id}>
                        {toPersianNumbers(
                          !product.coupon ? "ندارد" : product.coupon
                        )}
                      </span>
                    );
                  })}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // <div className="p-3 grid grid-col-1 md:grid-cols-2 mt-4 space-4 gap-2 items-start justify-center flex-col ">
  //     <h1 className="text-lg mb-6 font border-b text-secondary-600 font-semibold">
  //       جزئیات پرداخت
  //     </h1>
  //   <div className="space-y-4 p-3 rounded-xl flex-1 border shadow-lg border-secondary-50">
  //     <InfoRow label={" شماره فاکتور"} value={payment.invoiceNumber} />
  //     <InfoRow label={" متد پرداخت"} value={payment.paymentMethod} />
  //     <InfoRow label={"توضیحات"} value={payment.description} />
  //     <InfoRow label={"مقدار "} value={toPersianNumbers(payment.amount)} />
  //     <InfoRow
  //       label={"تاریخ سفارش"}
  //       value={toLocalDateStringShort(payment.createdAt)}
  //     />
  //     <InfoRow
  //       label={"تاریخ بروزرسانی"}
  //       value={toLocalDateStringShort(payment.updatedAt)}
  //     />

  //     <div className="flex gap-x-3 items-center">
  //       <h1 className="font font-semibold text-secondary-700">وضعیت</h1>
  //       <span className={`badge ${statusStyle[status].className}`}>
  //         {statusStyle[status].label}
  //       </span>
  //     </div>
  //     <InfoRow
  //       label={"پرداخت شده"}
  //       value={
  //         payment.isPaid ? (
  //           <FaCheck className="w-4 h-4 text-green-600" />
  //         ) : (
  //           <RiCoreosFill className="w-4 h-4 text-red-600" />
  //         )
  //       }
  //     />
  //   </div>

  //   <div className="space-y-4 border flex-1 w-full rounded-xl p-3 border-secondary-50 shadow-lg ">
  //     <div className="flex justify-between items-center h-full text-lg mb-6 font border-b text-secondary-600 font-semibold">
  //       <h1>جزئیات کاربر</h1>
  //       <Image
  //         alt={"user-image"}
  //         src={payment.avatarUrl || "/images/avatar.png"}
  //         width={50}
  //         height={50}
  //         className=""
  //       />
  //     </div>
  //     <div className="flex justify-between h-max gap-x-5">
  //       <div className=" space-y-4">
  //         <InfoRow label={"نام و نام خانوادگی "} value={payment.user.name} />
  //         <InfoRow label={" شماره موبایل"} value={payment.user.phoneNumber} />
  //         <InfoRow label={"ایمیل"} value={payment.user.email} />
  //         <InfoRow
  //           label={"زمان سفارش"}
  //           value={toLocalDateString(Number(paymentDate))}
  //         />
  //       </div>
  //     </div>
  //   </div>

  //   <div className="space-y-4 border md:col-span-2 flex-1 w-full rounded-xl p-3 border-secondary-50 shadow-lg ">
  //     <h1 className="flex justify-between items-center text-lg mb-6 font border-b text-secondary-600 font-semibold">
  //       جزئیات سبد خرید
  //     </h1>
  //     <div className="flex p-4 justify-between rounded-xl">
  //       <div className="space-y-4">
  //         <InfoRow label={"نام محصول"} value={productDetail.title} />
  //         <InfoRow label={"اسلاگ"} value={productDetail.slug} />
  //         <InfoRow
  //           label={"قیمت"}
  //           value={toPersianNumbersWithComma(productDetail.price)}
  //         />
  //         <InfoRow
  //           label={"تخفیف"}
  //           value={toPersianNumbers(productDetail.discount)}
  //         />
  //         <InfoRow
  //           label={"تعداد"}
  //           value={toPersianNumbers(productDetail.quantity)}
  //         />
  //         <InfoRow
  //           label={"کد تخفیف"}
  //           value={!productDetail.coupon ? "ندارد" : productDetail.coupon}
  //         />
  //       </div>
  //       <Image
  //         alt={"product-image"}
  //         src={payment.cart.productDetail.imageLink || "/images/no-image.jpg"}
  //         width={100}
  //         height={100}
  //         className="rounded-md object-cover "
  //       />
  //     </div>
  //   </div>
  // </div>
}

export default PaymentDetail;
