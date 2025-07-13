import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-6">
      <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div className="text-primary-800 font-bold text-lg">
          فروشگاه نکست شاپ
        </div>
        <div className="flex gap-4 text-gray-700 text-sm">
          <Link href="/">خانه</Link>
          <Link href="/products">محصولات</Link>
          <Link href="/about">درباره ما</Link>
          <Link href="/contact">تماس با ما</Link>
        </div>

        <div className="flex gap-3 text-primary-800 text-xl">
          <Link href="#" aria-label="Instagram">
            <FaLinkedin />
          </Link>
          <Link href="https://t.me/khorshidhoseiny" aria-label="Telegram">
            <FaTelegram />
          </Link>

          <Link href="https://github.com/khorshidhoseiny" aria-label="Twitter">
            <FaGithub />
          </Link>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-4">
        © {new Date().getFullYear()} تمام حقوق محفوظ است.
      </div>
    </footer>
  );
}
