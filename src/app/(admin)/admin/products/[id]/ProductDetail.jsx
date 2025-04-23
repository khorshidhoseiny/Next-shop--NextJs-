import InfoRow from "@/common/infoRow";
import { toLocalDateString } from "@/utils/toLocalDate";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import Image from "next/image";
import React from "react";

function ProductDetail({ product }) {
  return (
    <div className="p-3 flex rounded-xl mt-4 shadow-md border border-secondary-50 gap-y-3  justify-center flex-col">
      <div className="flex p-4 justify-between rounded-xl">
        <div className="space-y-4">
          <InfoRow label={"نام محصول"} value={product.title} />
          <InfoRow label={" توضیحات"} value={product.description} />
          <InfoRow label={"دسته بندی"} value={product.category} />
          <InfoRow label={"اسلاگ"} value={product.slug} />
          <InfoRow label={"برند"} value={product.brand} />
          <InfoRow
            label={"تگ ها"}
            className="badge bagde-secondary"
            value={product.tags.map((tag) => tag)}
          />
        </div>
        <Image
          alt={"product-image"}
          src={"/images/no-image.jpg"}
          width={100}
          height={100}
          className="rounded-md object-cover "
        />
      </div>
      <div className="flex p-4 gap-x-4 r border-t border-secondary-100 justify-between  ">
        <InfoRow
          label={"قیمت"}
          value={toPersianNumbersWithComma(product.price)}
        />
        <InfoRow
          className={"  "}
          label={" تخفیف"}
          value={toPersianNumbersWithComma(product.discount)}
        />
        <InfoRow
          className=" "
          label={"قیمت با تخفیف"}
          value={toPersianNumbersWithComma(product.offPrice)}
        />
        <InfoRow
          label={"موجودی انبار"}
          value={toPersianNumbersWithComma(product.countInStock)}
        />
      </div>
      <div className="flex p-4 border-t border-secondary-100 justify-between rounded-xl">
        <InfoRow
          className={" "}
          label={"رتبه"}
          value={toPersianNumbersWithComma(product.rating)}
        />
        <InfoRow
          className=""
          label={"تعداد بازدید"}
          value={toPersianNumbersWithComma(product.numReviews)}
        />
        <InfoRow
          label={"تعداد لایک"}
          value={toPersianNumbersWithComma(product.likes.length)}
        />
      </div>
      <div className="flex p-4 border-t border-secondary-100 justify-between rounded-xl">
        <InfoRow
          className={" "}
          label={"تاریخ ایجاد"}
          value={toLocalDateString(product.createdAt)}
        />
        <InfoRow
          className=""
          label={"تاریخ بروزرسانی"}
          value={toLocalDateString(product.updatedAt)}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
