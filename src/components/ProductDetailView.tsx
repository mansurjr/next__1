// app/product/[id]/DetailProductClient.tsx
"use client";

import Image from "next/image";
import React, { useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export default function DetailProductClient({ product }: { product: Product }) {
  const [inCart, setInCart] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl p-6">
        <div className="flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg object-contain max-h-[400px]"
          />
        </div>

        <div className="flex flex-col justify-between space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <strong className="text-2xl text-green-600">
            {product.price} USD
          </strong>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <button
            onClick={() => setInCart(true)}
            className="mt-6 w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all">
            {inCart ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
