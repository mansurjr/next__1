"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LoginButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/login")}
      className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors">
      LOGIN
    </button>
  );
};

export default LoginButton;
