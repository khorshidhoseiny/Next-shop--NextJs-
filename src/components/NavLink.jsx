"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ path, children }) {
  const pathname = usePathname();

  return (
    <Link
      className={`flex items-center text-center py-2 hover:text-primary-900 transition-all ease-out
        ${
          pathname === path
            ? "text-primary-900 border-b border-primary-900 font-bold"
            : ""
        }
      `}
      href={path}
    >
      {children}
    </Link>
  );
}

export default NavLink;
