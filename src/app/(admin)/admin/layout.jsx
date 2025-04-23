import vazirFont from "@/constants/localFonts";
import Providers from "@/pages/Providers";
import { Toaster } from "react-hot-toast";
import "../../globals.css";
import Header from "@/pages/Header";
import AdminSideBar from "./AdminSideBar";
export const metadata = {
  title: "پروفایل ادمین",
  description: "پنل مختص ادمین برای رصد بهتر برنامه",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans`}
      >
        <Providers>
          <Toaster />
          <div className="grid grid-cols-5 h-screen bg-white">
            <div className="col-span-1 bg-gray-100 p-4 overflow-y-auto">
              <AdminSideBar />
            </div>
            <div className="col-span-4 overflow-y-auto p-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
