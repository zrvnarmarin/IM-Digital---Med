"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUp } from "@/public/Icons";
import Image from "next/image";
import LogoImage from "../../public/logo-removebg-preview.png";

export default function Navigation() {
  const [isMobileNavigationOpened, setIsMobileNavigationOpened] =
    useState(false);
  // console.log(isSidebarOpened);

  const closeSidebarClickHandler = () => setIsMobileNavigationOpened(false);
  const openSidebarClickHandler = () => setIsMobileNavigationOpened(true);

  return (
    <>
      <Navbar onOpenSidebar={openSidebarClickHandler} />
      {isMobileNavigationOpened ? (
        <MobileNavigation onCloseSidebar={closeSidebarClickHandler} />
      ) : null}
    </>
  );
}

export function Navbar({ onOpenSidebar }: { onOpenSidebar: () => void }) {
  return (
    <header className="w-full sticky top-0 left-0 right-0 z-50">
      <nav className="flex flex-row justify-between lg:justify-center gap-24 items-center px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 py-3 bg-white/95 drop-shadow border-b-[1px] border-slate-200">
        <div className="text-slate-500 text-center font-medium text-lg xl:text-xl">
          <Link href={"/"} className="flex flex-row items-center gap-4">
            <Image src={LogoImage} alt="logo_image" width={70} height={70} />
            <div>
              <p className="text-[#00b5e7] uppercase">Sinergy Wave</p>
              <p className="text-[#077bbd] uppercase">Clinic</p>
            </div>
          </Link>
        </div>
        <ul className="hidden lg:flex flex-row items-center justify-between gap-12">
          <li className="text-slate-500 text-center font-medium text-lg xl:text-xl">
            <Link href={"/about-us"}>About Us</Link>
          </li>
          <li className="text-slate-500 text-center font-medium text-lg xl:text-xl">
            <Link href={"/services"}>Services</Link>
          </li>
          <li className="text-slate-500 text-center font-medium text-lg xl:text-xl">
            <Link href={"/our-team"}>Our Team</Link>
          </li>
          {/* <li className="text-slate-500 text-center font-medium text-lg xl:text-xl">
            <Link href={"/testimonials"}>Testimonials</Link>
          </li> */}
          <li>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-[#02aeef]/70 hover:bg-[#02aeef]/90 duration-100 rounded-md shadow-2xl text-white font-medium px-6 py-3"
              >
                Contact Us
              </Link>
            </div>
          </li>
        </ul>
        <div className="block lg:hidden">
          <button
            onClick={onOpenSidebar}
            className="flex flex-col gap-1 items-end p-0 border-none"
          >
            <div className="w-7 rounded-md h-[2.5px] bg-[#02aeef]/50"></div>
            <div className="w-7 h-[2.5px] rounded-md bg-[#02aeef]/50"></div>
            <div className="w-7 h-[2.5px] rounded-md bg-[#02aeef]/50"></div>
          </button>
        </div>
      </nav>
    </header>
  );
}

export function MobileNavigation({
  onCloseSidebar,
}: {
  onCloseSidebar: () => void;
}) {
  return (
    <aside className="fixed bottom-0 top-0 left-0 flex flex-col bg-white text-white h-screen w-full z-50 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 py-3 bg-slate-700-300/95 drop-shadow border-b-[1px] border-slate-200">
      <div className="flex items-center justify-between">
      <div className="text-slate-500 text-center font-medium text-lg xl:text-xl">
          <Link href={"/"} className="flex flex-row items-center gap-4">
            <Image src={LogoImage} alt="logo_image" width={70} height={70} />
            <div>
              <p className="text-[#00b5e7] uppercase">Sinergy Wave</p>
              <p className="text-[#077bbd] uppercase">Clinic</p>
            </div>
          </Link>
        </div>
        <button
          onClick={onCloseSidebar}
          className="flex flex-col gap-1 items-end p-0 border-none"
        >
          <div className="w-7 rounded-md h-[2.5px] bg-[#02aeef]/50"></div>
          <div className="w-7 h-[2.5px] rounded-md bg-[#02aeef]/50"></div>
          <div className="w-7 h-[2.5px] rounded-md bg-[#02aeef]/50"></div>
        </button>
      </div>

      <ul className="flex flex-col gap-6 py-8">
        <li className="flex flex-row items-center justify-between text-slate-500 text-center font-medium text-lg xl:text-xl hover:bg-[#02aeef]/5 rounded-md p-2 duration-100 cursor-pointer">
          <Link href={"/about-us"}>About Us</Link>
          <div className="rotate-90">
            <ArrowUp />
          </div>
        </li>
        <li className="flex flex-row items-center justify-between text-slate-500 text-center font-medium text-lg xl:text-xl hover:bg-[#02aeef]/5 rounded-md p-2 duration-100 cursor-pointer">
          <Link href={"/services"}>Services</Link>
          <div className="rotate-90">
            <ArrowUp />
          </div>
        </li>
        <li className="flex flex-row items-center justify-between text-slate-500 text-center font-medium text-lg xl:text-xl hover:bg-[#02aeef]/5 rounded-md p-2 duration-100 cursor-pointer">
          <Link href={"/our-team"}>Our Team</Link>
          <div className="rotate-90">
            <ArrowUp />
          </div>
        </li>
      </ul>
    </aside>
  );
}
