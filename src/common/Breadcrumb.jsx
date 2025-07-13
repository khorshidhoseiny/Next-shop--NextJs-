// components/Breadcrumb.jsx
import Link from "next/link";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="text-sm text-gray-500 mb-4">
      <ol className="flex flex-wrap items-center gap-x-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-x-1">
            {item.href ? (
              <Link href={item.href} className="hover:underline">
                {item.title}
              </Link>
            ) : (
              <span className="text-primary-800">{item.title}</span>
            )}
            {index < items.length - 1 && (
              <span className="text-gray-400">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
