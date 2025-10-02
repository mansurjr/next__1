import { Metadata } from "next";
import React from "react";
import ProductView from "@/components/productView";

export const metadata: Metadata = {
  title: "Products | My Shop",
  description: "Browse our latest products from the Fake Store API",
};

const ProductPage = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  const products = await res.json();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;