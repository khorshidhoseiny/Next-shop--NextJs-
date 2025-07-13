import vazirFont from "@/constants/localFonts";
import Header from "../../HeaderDashboard";
import Providers from "@/pages/Providers";
import { Toaster } from "react-hot-toast";
import "../../globals.css";
import SideBar from "./_/SideBar";
import SideBarNavs from "./_/SideBarNavs";
export const metadata = {
  title: "پروفایل کاربر",
  description: "پروفایل کاربر",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable}  font-sans`}
      >
        <Providers>
          <Toaster />
          <div className="grid grid-cols-12 h-screen">
            <aside className="col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block">
              <SideBar>
                <SideBarNavs />
              </SideBar>
            </aside>
            <div className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
              <Header>
                <SideBarNavs />
              </Header>
              <main className="bg-secondary-100/20 rounded-tr-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto">
                <div className="xl:max-w-screen-xl">{children}</div>
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
