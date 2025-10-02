"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-60">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Welcome to <span className="text-blue-600">My Website</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          This is Hero in Next.js — clean, minimal and responsive.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/user"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Users
          </Link>
          <Link
            href="/products"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-300 transition"
          >
            Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
