import InfoRow from "@/common/infoRow";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import Image from "next/image";

function ProductDetail({ product }) {
  return (
    <div className="p-3 flex rounded-xl mt-4 overflow-hidden shadow-md border border-secondary-50 gap-y-3 bg-white  justify-center flex-col">
      <div className="flex p-4 flex-col md:flex-row justify-between rounded-xl">
        <div className="space-y-4 flex-1">
          <InfoRow
            label="عنوان"
            value={product.title}
            className="font-semibold"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-secondary-700 ">توضیحات:</span>
            <p className="w-2/3 text-secondary-700 text-sm">
              {product.description}
            </p>
          </div>
          <InfoRow
            label={"دسته بندی"}
            key={product.category._id}
            value={product.category.title}
          />
          <InfoRow label={"اسلاگ"} value={product.slug} />
          <InfoRow label={"برند"} value={product.brand} />
          <InfoRow
            label={"تگ ها"}
            className="badge bagde-secondary"
            value={product.tags.map((tag) => tag)}
          />
        </div>
        <div className="aspect-video flex-1 overflow-hidden rounded-lg relative">
          <Image
            alt="imageLink"
            fill
            src={`/images/products/${product.slug}.webp`}
            className="object-center object-contain"
          />
        </div>
      </div>
      <div className="flex p-4 gap-x-4 r border-t border-secondary-100 justify-between  ">
        <InfoRow
          label={"قیمت"}
          value={toPersianNumbersWithComma(product.price)}
        />
        <InfoRow
          className={""}
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
      <div className="flex p-4 gap-x-5 truncate  border-t border-secondary-100 justify-between rounded-xl">
        <InfoRow
          className={" "}
          label={"تاریخ ایجاد"}
          value={toLocalDateStringShort(product.createdAt)}
        />
        <InfoRow
          className=""
          label={"تاریخ بروزرسانی"}
          value={toLocalDateStringShort(product.updatedAt)}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
