"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <nav className="flex flex-row justify-between items-center opacity-95 mx-2 lg:mx-8 mt-2 rounded px-4 py-2 bg-slate-700/90 border-slate-500 border">
        <Link href={"/"}>
          <p className="text-xl sm:text-4xl text leading-10 font-normal tracking-widest italic md:text-3xl text-[#FFFFFF]">
            Sinergy
          </p>
        </Link>
        <ul className="hidden lg:flex flex-row items-center justify-between gap-12">
          <li className="text-[#FFFFFF] xl:text-md font-normal leading-7">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-[#FFFFFF] xl:text-md font-normal leading-7">
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li className="text-[#FFFFFF] xl:text-md font-normal leading-7">
            <Link href={"/services"}>Services</Link>
          </li>
          <li className="text-[#FFFFFF] xl:text-md font-normal leading-7">
            <Link href={"/our-team"}>Our Team</Link>
          </li>
          <div>
            <Link href='/contact' className="hidden lg:block text-white text-md font-normal uppercase leading-7 bg-slate-600/90 hover:scale-105 duration-100 px-8 py-1 border-slate-500 border rounded-md">
              Contact
            </Link>
          </div>
        </ul>
        <div className="block lg:hidden">
          <button className="flex flex-col gap-1 items-end">
            <div className="w-7 rounded-md h-[2.5px] bg-[#FFFFFF]"></div>
            <div className="w-7 h-[2.5px] rounded-md bg-[#FFFFFF]"></div>
            <div className="w-7 h-[2.5px] rounded-md bg-[#FFFFFF]"></div>
          </button>
        </div>
      </nav>
    </header>
  );
}
