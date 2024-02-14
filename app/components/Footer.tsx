import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImage from '../../public/logo-removebg-preview.png'

export default function Footer() {
  return (
    <footer className="bg-[#144b5f] px-8 md:px-14 lg:px-28 xl:px-42 2xl:px-48 pt-8 mt-16 pb-4 flex flex-col w-full h-full relative">
      <div className="flex flex-col">
        <div className="text-slate-500 text-center font-medium text-lg xl:text-xl">
          <Link href={"/"} className="flex flex-row items-center gap-4">
            <Image src={LogoImage} alt="logo_image" width={70} height={70} />
            <div>
              <p className="text-[#00b5e7] uppercase">Sinergy Wave</p>
              <p className="text-[#077bbd] uppercase">Clinic</p>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ul className="grid grid-cols-1 gap-8 pt-12">
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

          <div className="pt-12 flex flex-col gap-16">
            <div key={2}>
              <h3 className="flex flex-col text-md md:text-lg gap-4 font-semibold text-white pb-2 leading-2 uppercase">
                Follow Us
              </h3>
              <div className="flex flex-row gap-6">
                {["li", "fb", "in"].map((link) => (
                  <Link
                    href={`/${link}`}
                    key={link}
                    className="text-start w-fit text-md md:text-lg font-semibold text-white rounded-full  py-1 "
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <form key={2}>
              <h3 className=" flex flex-col text-md md:text-lg gap-2 font-semibold text-white pb-2 leading-2 uppercase">
                Subscribe to our newsletter
              </h3>
              <label
                htmlFor="phone-number"
                className="flex flex-col text-white leading-2 gap-4 text-xs"
              >
                <span className="pb-2">
                  To make your stay special and even more memorable
                </span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  id="phone-number"
                  className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
                />
              </label>
              <div className="flex justify-center pt-4">
                <button className="w-full bg-[#9595ff] text-white font-semibold px-6 py-3 uppercase">
                  Send
                </button>
              </div>
            </form>
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
