import vazirFont from "@/constants/localFonts";
import Header from "@/pages/Header";
import Providers from "@/pages/Providers";
import { Toaster } from "react-hot-toast";
import "../../globals.css";
import SideBar from "./_/SideBar";
export const metadata = {
  title: "پروفایل کاربر",
  description: "پروفایل کاربر",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans`}
      >
        <Providers>
          <Header />
          <Toaster />
          <div className="grid grid-cols-5 h-screen bg-white">
            <div className="col-span-1 bg-gray-100 p-4 overflow-y-scroll">
              <SideBar />
            </div>
            <div className="col-span-4 overflow-y-scroll p-2 xl:max-w-screen-xl">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
