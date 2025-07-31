import InfoRow from "@/common/InfoRow";
import { toLocalDateString, toLocalDateStringShort } from "@/utils/toLocalDate";
import Image from "next/image";
import React from "react";

function CategoryCartDetail({ category }) {
  // console.log(category, "category in CategoryCartDetail (admin)_");
  return (
    <div className="p-3 flex overflow-x-scroll bg-white rounded-xl mt-4 shadow-md border border-secondary-50 gap-y-3  justify-center flex-col">
      <div className="flex p-4  justify-between rounded-xl">
        <div className="space-y-4 overflow-x-scroll">
          <InfoRow label={"نام دسته بندی"} value={category.title} />
          <InfoRow label={" توضیحات"} value={category.description} />
          <InfoRow
            label={"نام انگلیسی دسته بندی"}
            value={
              <span className="truncate whitespace-nowrap max-w-md">
                {category.englishTitle}
              </span>
            }
          />
          <InfoRow
            label={"نوع"}
            value={
              <span className="badge badge--secondary">{category.type}</span>
            }
          />
          <InfoRow label={"والد"} value={category.parentId || "ندارد"} />
        </div>
        <Image
          alt={"category-image"}
          src={"/images/no-image.jpg"}
          width={70}
          height={70}
          className="rounded-md object-cover "
        />
      </div>
      <div className="flex flex-col justify-center md:justify-between sm:flex-row p-4 gap-x-5 border-t border-secondary-100 overflow-x-auto items-center mx-4 ">
        <InfoRow
          className={" "}
          label={"تاریخ ایجاد"}
          value={toLocalDateStringShort(category.createdAt)}
        />
        <InfoRow
          className=""
          label={"تاریخ بروزرسانی"}
          value={toLocalDateStringShort(category.updatedAt)}
        />
      </div>
    </div>
  );
}

export default CategoryCartDetail;
