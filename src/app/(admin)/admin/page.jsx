"use client";

import Loading from "@/common/Loading";
import RecordData from "@/common/RecordData";
import { useGetUser, useGetUsers } from "@/hooks/useAuth";
import { useGetProducts } from "@/hooks/useProducts";
import { TbCategoryFilled } from "react-icons/tb";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { FaUsers } from "react-icons/fa";
import { RiCoupon2Fill } from "react-icons/ri";
import { BsCartCheckFill } from "react-icons/bs";
import { useGetPayments } from "@/hooks/usePayments";
import { useGetAllCoupons } from "@/hooks/useCoupons";
import { useCategories } from "@/hooks/usecategories";
import { MdArrowBack, MdCategory } from "react-icons/md";
import Link from "next/link";
import PaymentsTabel from "./payments/PaymentsTable";
import ProductsTable from "./products/ProductsTable";

function AdminPage() {
  const { data, isLoading } = useGetUser();
  const { user = [] } = data || {};
  const { data: usersData } = useGetUsers();
  const { users = [] } = usersData || {};
  const { data: peymentsData } = useGetPayments();
  const { payments } = peymentsData || {};
  const { data: couponsData } = useGetAllCoupons();
  const { coupons = [] } = couponsData || {};
  const { data: CategoriesData } = useCategories();
  const { categories = [] } = CategoriesData || {};
  const { data: productsData, isLoading: loadingProducts } = useGetProducts();
  const { products = [] } = productsData || {};

  if (!user || isLoading) return <Loading />;
  if (loadingProducts) return <Loading />;

  return (
    <div className="space-y-5">
      <div className="bg-white font-light text-secondary-800 lg:px-8 py-4 px-6 max-w-xl rounded-xl">
        <span className="font-black text-lg md:text-2xl">
          {user?.name} 🤩&nbsp;
        </span>
        به پنل مدیریت فروشگاه خوش آمدی🌻
      </div>
      <div className="flex flex-col mt-5 ">
        <h1 className="font-black text-secondary-700 text-2xl">
          نگاه کلی به آمار ها
        </h1>
        <div className="grid gap-4 grid-cols-3">
          <RecordData
            icon={<FaUsers className="w-5 h-5 text-white" />}
            label="تعداد کاربران "
            value={toPersianNumbers(users?.length || 0)}
            color="bg-purple-500"
          />
          <RecordData
            icon={<TbCategoryFilled className="w-5 h-5 stroke-1 text-white" />}
            label="تعداد محصولات"
            color="bg-green-600"
            value={toPersianNumbers(products?.length || 0)}
          />
          <RecordData
            icon={<BsCartCheckFill className="w-5 h-5  text-white" />}
            label="تعداد سفارشات"
            color="bg-blue-500"
            value={toPersianNumbers(payments?.length || 0)}
          />
          <RecordData
            icon={<MdCategory className="w-5 h-5  text-white" />}
            label="تعداد دسته بندی ها"
            color="bg-secondary-500"
            value={toPersianNumbers(categories?.length || 0)}
          />
          <RecordData
            icon={<RiCoupon2Fill className="w-5 h-5 text-white" />}
            label="تعداد کد های تخفیف"
            color="bg-orange-500"
            value={toPersianNumbers(coupons?.length || 0)}
          />
        </div>
        <div>
          <div className="flex items-start my-8 flex-col md:flex-row justify-between">
            <h2 className="font-black text-secondary-700 text-2xl">
              {" "}
              سفارشات اخیر
            </h2>
            <Link
              className="text-secondary-700 flex gap-x-2 font-bold"
              href="/AdminPage/payments"
            >
              <p className="text-sm">مشاهده لیست کامل سفارشات</p>
              <MdArrowBack className="w-5 h-5" />
            </Link>
          </div>
          <div className="rounded-xl border border-secondary-100 bg-white/90  overflow-auto">
            <PaymentsTabel
              payments={
                payments
                  ? payments
                      .sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                      )
                      .slice(0, 3)
                  : []
              }
            />
          </div>
        </div>
        <div>
          <div className="flex items-start my-8 flex-col md:flex-row justify-between">
            <h2 className="font-black text-secondary-700 text-2xl">
              محصولات اخیر
            </h2>
            <Link
              className="text-secondary-700 flex gap-x-2 font-bold"
              href="/admin/payments"
            >
              <p className="text-sm">مشاهده لیست کامل محصولات</p>
              <MdArrowBack className="w-5 h-5" />
            </Link>
          </div>
          <div className="rounded-xl shadow-sm bg-white/90 border border-secondary-100 relative overflow-auto">
            <ProductsTable
              products={products
                ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 4)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
