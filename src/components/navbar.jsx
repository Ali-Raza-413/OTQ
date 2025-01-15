"use client";
import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white  z-50  transition-all duration-300 ${
          isScrolled ? "h-20" : "h-24"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between h-full">
          {/* Logo */}
          <div>
            <img
              src="/logo2.png"
              alt="logo"
              className={`transition-all duration-300 ${
                isScrolled ? "max-w-[80px]" : "max-w-[90px]"
              } `}
            />
          </div>

          <h1 className=" hidden md:block text-3xl  font-semibold text-[#63078a]">
            QTO HUB <span className="text-[#fdda04]"></span>
          </h1>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-6">
            <Link href={"/"} className="text-gray-800 hover:text-blue-500">
              Home
            </Link>
            <Link href={"/about"} className="text-gray-800 hover:text-blue-500">
              About
            </Link>
            <Link
              href={"/contactus"}
              className="text-gray-800 hover:text-blue-500"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="block lg:hidden p-2 text-gray-800 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6h16.5M3.75 12h16.5m-16.5 6h16.5"
                  />
                </svg>
              </button>
            </SheetTrigger>

            <SheetContent side="left">
              <SheetClose asChild></SheetClose>

              <div className="mt-10 flex flex-col space-y-6">
                <a
                  href="#home"
                  className="text-gray-800 hover:text-blue-500 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-gray-800 hover:text-blue-500 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-800 hover:text-blue-500 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Add padding to prevent content from being hidden */}
      <div className="pt-[100px]"></div>
    </>
  );
};

export default Navbar;
