"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// <header className="w-full fixed top-0 left-0 right-0 z-50"> --> for complete navbar to be fixed and across the hero section, on top of it
// or sticky if want to have on top, but its own screen space

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full sticky top-0 left-0 right-0 z-50">
      <nav className="flex flex-row justify-between lg:justify-center gap-24 items-center px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 py-3 bg-white/95 drop-shadow border-b-[1px] border-slate-200">
        <Link href={"/"}>
          <p className="text-center text-4xl text leading-10 font-normal italic uppercase text-[#babaff]">
            Sinergy
          </p>
        </Link>
        <ul className="hidden lg:flex flex-row items-center justify-between gap-12">
          <li className="text-xl xl:text-xl font-light text-slate-400">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-xl xl:text-xl font-light text-slate-400">
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li className="text-xl xl:text-xl font-light text-slate-400">
            <Link href={"/services"}>Services</Link>
          </li>
          <li className="text-xl xl:text-xl font-light text-slate-400">
            <Link href={"/our-team"}>Our Team</Link>
          </li>
          {/* <li className="text-xl xl:text-xl font-normal text-[#babaff]">
            <Link href={"/contact"}>Contact</Link>
          </li> */}
          <li>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="bg-[#babaff]/50 text-white font-semibold px-8 py-3 uppercase rounded-md"
            >
              Contact Us
            </Link>
          </div>
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
