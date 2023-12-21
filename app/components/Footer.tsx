import React from "react";
import Link from "next/link";
import Pattern from "../../public/pattern.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#194C7A] to-slate-800 px-8 pt-8 pb-4 flex flex-col w-full h-full relative">
      {/* <Image src={Pattern} alt='nesto' width={200} height={200} className='absolute right-0 top-0' /> */}
      <div className="flex flex-col">
        <Link href={"/"}>
          <p className="text-3xl sm:text-4xl leading-10 font-bold text-white md:text-6xl">
            LOGO
          </p>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12">
            {footerLinks.map((footerLink) => (
              <div key={1}>
                <h3 className="text-white leading-2 text-md pb-4 font-medium">
                  Sitemap
                </h3>
                <div className="flex flex-col gap-2">
                  {footerLink.map((link) => (
                    <Link
                      href={`/${link.href}`}
                      key={link.name}
                      className="text-gray-200 leading-2 text-sm hover:underline hover:underline-offset-4 hover:decoration-[#1D7349]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </ul>
          <div className="pt-12 flex flex-col items-end gap-2">
            <h2 className="text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl leading-10 font-semibold text-white">
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
