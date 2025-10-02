"use client";
import React from "react";
import ProductImage from "./ProductImage";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ProductView = ({ products }: { products: Product[] }) => {
  return (
    <section className="container mx-auto px-6">
      <h1 className="text-2xl font-bold mb-6">Product View</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg p-4 shadow hover:shadow-lg transition bg-white">
            <ProductImage
              type="product"
              src={product.image}
              alt={product.title}
              id={product.id}
            />
            <h2 className="text-lg font-semibold mt-3">{product.title}</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductView;
