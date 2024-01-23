"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <nav className="flex flex-row justify-between items-center px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 py-2 bg-[#babaff]/70">
        <Link href={"/"}>
          <p className="text-xl sm:text-4xl text leading-10 font-normal tracking-widest italic md:text-3xl text-[#FFFFFF]">
            Sinergy
          </p>
        </Link>
        <ul className="hidden lg:flex flex-row items-center justify-between gap-12">
          <li className="text-md md:text-lg gap-4 font-medium text-white  leading-2 ">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-md md:text-lg gap-4 font-medium text-white  leading-2 ">
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li className="text-md md:text-lg gap-4 font-medium text-white  leading-2 ">
            <Link href={"/services"}>Services</Link>
          </li>
          <li className="text-md md:text-lg gap-4 font-medium text-white  leading-2 ">
            <Link href={"/our-team"}>Our Team</Link>
          </li>
          <li className="text-md md:text-lg gap-4 font-medium text-white  leading-2 ">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="block lg:hidden">
          <button className="flex flex-col gap-1 items-end p-0 border-none">
            <div className="w-7 rounded-md h-[2.5px] bg-[#FFFFFF]"></div>
            <div className="w-7 h-[2.5px] rounded-md bg-[#FFFFFF]"></div>
            <div className="w-7 h-[2.5px] rounded-md bg-[#FFFFFF]"></div>
          </button>
        </div>
      </nav>
    </header>
  );
}
