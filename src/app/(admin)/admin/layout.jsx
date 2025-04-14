import vazirFont from "@/constants/localFonts";
import Providers from "@/pages/Providers";
import { Toaster } from "react-hot-toast";
import "../../globals.css";
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

          <div className="container xl:max-w-screen-xl"> {children} </div>
        </Providers>
      </body>
    </html>
  );
}
