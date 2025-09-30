"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href || pathname.startsWith(href + "/");
    return `${
      isActive ? "text-blue-400 font-semibold" : "text-gray-200"
    } hover:text-blue-300`;
  };

  return (
    <header className="shadow-md fixed top-0 bg-gray-900 z-20 w-full">
        <div className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
          <div className="flex items-center">
            <Image
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png"
              width={50}
              height={50}
              alt="Next.js logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-white">NextApp</span>
          </div>

          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className={getLinkClasses("/")}>
              Home
            </Link>
            <Link href="/product" className={getLinkClasses("/product")}>
              Product
            </Link>
            <Link href="/user" className={getLinkClasses("/user")}>
              User
            </Link>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors">
              LOGIN
            </button>
          </nav>

          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}>
            <GiHamburgerMenu color="white" />
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-gray-900 shadow-md">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link
                href="/"
                className={getLinkClasses("/")}
                onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/product"
                className={getLinkClasses("/product")}
                onClick={() => setMenuOpen(false)}>
                Product
              </Link>
              <Link
                href="/user"
                className={getLinkClasses("/user")}
                onClick={() => setMenuOpen(false)}>
                User
              </Link>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors">
                LOGIN
              </button>
            </nav>
          </div>
        )}
    </header>
  );
};

export default Header;
