import {
  toPersianNumbersWithComma,
  toPersianNumbers,
} from "@/utils/toPersianNumbers";

export default function ProductPrice({ product }) {
  return (
    <div className=" space-y-2">
      <p
        className={`${
          product.discount
            ? "line-through italic text-xs text-gray-500"
            : "font-bold text-xl"
        }`}
      >
        {toPersianNumbersWithComma(product.price)} تومان
      </p>
      {!!product.discount && (
        <div className="flex items-center gap-x-2">
          <span className="font-bold text-lg text-rose-600">
            {toPersianNumbersWithComma(product.offPrice)} تومان
          </span>
          <span className="bg-rose-500 text-white text-xs px-2 py-0.5 rounded-xl">
            {toPersianNumbers(product.discount)}%
          </span>
        </div>
      )}
    </div>
  );
}
