"use client";
import Image from "next/image";

export default function ProductGallery({ product }) {
  return (
    <div className="aspect-video shadow-md overflow-hidden rounded-lg relative">
      <Image
        alt={product.title}
        fill
        src={`/images/products/${product.slug}.png`}
        className="object-center object-contain"
      />
    </div>
  );
}
