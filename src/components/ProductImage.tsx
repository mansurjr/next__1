"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface ProductImageProps {
  src: string;
  alt: string;
  id: number;
  type: "product" | "user";
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt, id, type }) => {
  const router = useRouter();

  return (
    <div className="relative w-full h-64 flex items-center justify-center bg-white rounded-lg shadow">
      <Image
        onClick={() => router.push(`/${type}/${id}`)}
        src={src}
        alt={alt}
        fill
        className="object-contain cursor-pointer"
        priority
      />
    </div>
  );
};

export default ProductImage;
