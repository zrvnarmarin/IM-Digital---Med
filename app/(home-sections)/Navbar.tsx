"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// <header className="w-full fixed top-0 left-0 right-0 z-50"> --> for complete navbar to be fixed and across the hero section, on top of it


export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full">
      <nav className="flex flex-row justify-between lg:justify-center gap-24 items-center px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 py-2 bg-white">
        <Link href={"/"}>
          <p className="text-center text-4xl text leading-10 font-medium italic uppercase text-[#babaff]">
            Sinergy
          </p>
        </Link>
        <ul className="hidden lg:flex flex-row items-center justify-between gap-12">
          <li className="text-lg xl:text-xl font-light text-[#babaff]">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-lg xl:text-xl font-light text-[#babaff]">
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li className="text-lg xl:text-xl font-light text-[#babaff]">
            <Link href={"/services"}>Services</Link>
          </li>
          <li className="text-lg xl:text-xl font-light text-[#babaff]">
            <Link href={"/our-team"}>Our Team</Link>
          </li>
          <li className="text-lg xl:text-xl font-light text-[#babaff]">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="block lg:hidden">
          <button className="flex flex-col gap-1 items-end p-0 border-none">
            <div className="w-7 rounded-md h-[2.5px] bg-[#babaff]"></div>
            <div className="w-7 h-[2.5px] rounded-md bg-[#babaff]"></div>
            <div className="w-7 h-[2.5px] rounded-md bg-[#babaff]"></div>
          </button>
        </div>
      </nav>
    </header>
  );
}
