import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Logo
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-xs leading-relaxed">
              This is Footer in Next js
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/users"
                  className="hover:text-blue-400 transition-colors duration-200">
                  Users
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-blue-400 transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-blue-400 transition-colors duration-200">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
