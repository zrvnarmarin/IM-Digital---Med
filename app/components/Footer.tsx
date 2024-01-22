import React from "react";
import Link from "next/link";
import { FacebookIcon } from "@/public/Icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#babaff]/90 to-[#babaff]/70 px-8 pt-8 pb-4 flex flex-col w-full h-full relative">
      <div className="flex flex-col">
        <Link href={"/"}>
          <p className="text-xl sm:text-4xl text leading-10 font-normal tracking-widest italic md:text-3xl text-[#FFFFFF]">
            Sinergy
          </p>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12">
            {footerLinks.map((footerLink) => (
              <div key={1}>
                <h3 className="flex flex-col text-md md:text-lg gap-4 font-semibold text-white pb-6 leading-2 uppercase">
                  Sitemap
                </h3>
                <div className="flex flex-col gap-4">
                  {footerLink.map((link) => (
                    <Link
                      href={`/${link.href}`}
                      key={link.name}
                      className="text-start w-full text-md md:text-lg font-normal text-white"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </ul>

          <div key={2}>
            <h3 className="flex flex-col text-md md:text-lg gap-4 font-semibold text-white pb-6 leading-2 uppercase">
              Follow Us
            </h3>
            <div className="flex flex-row gap-4">
              {["li", "fb", "in"].map((link) => (
                <Link
                  href={`/${link}`}
                  key={link}
                  className="text-start w-fit text-md md:text-lg font-semibold text-white rounded-full px-2 py-1 border-[2px] border-white "
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div key={2}>
            <h3 className="flex flex-col text-md md:text-lg gap-4 font-semibold text-white pb-6 leading-2 uppercase">
              Subscribe to our newsletter
            </h3>
            <label
              htmlFor="phone-number"
              className="flex flex-col text-white leading-2 text-xs"
            >
              To make your stay special and even more memorable
              <input
                type="text"
                id="phone-number"
                className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
              />
            </label>
          </div>

          <div className="pt-12 flex flex-col items-end gap-2">
            <h2 className="text-md md:text-lg gap-3 font-semibold text-white pb-4 leading-2">
              Subscribe to Our newsletter.
            </h2>
            <p className="text-gray-200 leading-2 text-xs hover:underline hover:underline-offset-4 hover:decoration-[#1D7349]">
              To make your stay special-and even more memorable.
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-white text-sm md:text-md lg:text-lg pt-16 pb-4">
        &#169; IM Digital Ltd.
      </h3>
    </footer>
  );
}

const footerLinks = [
  [
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Our Team",
      href: "/our-team",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
];
