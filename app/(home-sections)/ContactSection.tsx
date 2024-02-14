import { ContactIcon, EmailIcon, LocationPinIcon } from "@/public/Icons";
import React from "react";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function ContactSection() {
  return (
    <SectionWrapper>
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2">
        <h2 className="text-center text-4xl font-bold text-slate-600">
          Get in touch with us
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Heading and description */}
        <div className="flex gap-4 items-center bg-[#02aeef]/5 rounded-r-md">
          <div className="h-full flex items-center border-[1px] border-slate-200"></div>
          <div className="flex flex-col gap-2 py-4">
            <p className="font-medium text-primary no-underline text-slate-500">
              Tell us all about your project right here, or send us an email at
              <span className="font-semibold text-[#02aeef]/50">
                {" "}
                info@clinicname.com
              </span>
            </p>
          </div>
        </div>

        {/* Delete section */}
        <div className="flex gap-4 items-center bg-[#02aeef]/5 rounded-r-md">
          <div className="h-full flex items-center border-[1px] border-slate-200"></div>
          <div className="flex flex-col gap-2 py-4">
            <p className="font-medium text-primary no-underline text-slate-500">
              By filling out this form, our call center will contact you within
              24 hours to arrange your appointment.
              <span className="font-semibold text-[#02aeef]/50">
                {" "}
                info@clinicname.com
              </span>
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="flex items-center rounded-md bg-[#02aeef]/5 p-4">
          <div className="h-full flex items-center"></div>
          <form className="flex flex-col gap-2 w-full">
            <label
              htmlFor="name"
              className="flex flex-col gap-3 text-slate-500 font-medium text-lg xl:text-xl leading-2"
            >
              Name
              <input
                type="text"
                id="name"
                className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
              />
            </label>
            <label
              htmlFor="email"
              className="flex flex-col gap-3 text-slate-500 font-medium text-lg xl:text-xl leading-2"
            >
              Email
              <input
                type="text"
                id="email"
                className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
              />
            </label>
            <label
              htmlFor="phone-number"
              className="flex flex-col gap-3 text-slate-500 font-medium text-lg xl:text-xl leading-2"
            >
              Phone Number
              <input
                type="text"
                id="phone-number"
                className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
              />
            </label>
            <label
              htmlFor="service"
              className="flex flex-col gap-3 text-slate-500 font-medium text-lg xl:text-xl leading-2"
            >
              I{`'`}m interested in
              <input
                type="text"
                id="service"
                className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
              />
            </label>
            <label
              htmlFor="phone-number"
              className="flex flex-col gap-3 text-slate-500 font-medium text-lg xl:text-xl leading-2"
            >
              Your question
              <textarea
                name="user-request"
                rows={5}
                className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
              />
            </label>
            <div className="flex justify-center pt-8 px-6">
              <button className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 rounded-md shadow-2xl text-white font-medium px-6 py-3">
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Company data */}
        <div className="flex flex-col items-center bg-[#02aeef]/5 rounded-md">
          <div className="flex flex-col gap-6 p-4 w-full">
            <p className="flex flex-col gap-3 text-slate-500 font-medium text-lg xl:text-xl leading-2 uppercase">Radno vrijeme</p>
            <div className="w-full flex flex-row gap-2 font-medium text-primary no-underline text-slate-500">
              <p>Pon - Pet: </p>
              <p>08:00 - 16:00h</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-4 w-full">
            <p className="flex flex-col gap-3 text-slate-500 font-medium text-lg xl:text-xl leading-2 uppercase">Lokacije</p>
            <div className="w-full flex flex-col justify-between gap-6 text-slate-500 font-medium text-lg xl:text-xl leading-2">

              <div className="flex flex-row items-center gap-4">
                <LocationPinIcon width={27} height={27} />
                <div>
                  <p className="text-slate-500 font-medium text-sm xl:text-md leading-2">Hondlova Aleja </p>
                  <p className="text-slate-500 font-medium text-xs xl:text-sm leading-2">Ulica Nečeg i Nešto 23a, 10000 Zagreb</p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-4">
              <LocationPinIcon width={27} height={27} />
                <div>
                  <p className="text-slate-500 font-medium text-sm xl:text-md leading-2">Red Mall Square </p>
                  <p className="text-slate-500 font-medium text-xs xl:text-sm leading-2">Ulica Nečeg i Nešto 23a, 10000 Zagreb</p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-6 p-4 w-full">
            <p className="flex flex-col gap-3 text-slate-500 font-medium text-lg xl:text-xl leading-2 uppercase">Kontakt</p>
            <div className="w-full flex flex-col justify-between gap-6 text-md md:text-lg font-normal text-slate-600">

              <div className="flex flex-row items-center gap-4">
                <EmailIcon width={25} height={25} />
                <div>
                  <p className="text-slate-500 font-medium text-sm xl:text-md leading-2">76marin76@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-row items-center gap-4">
                <ContactIcon width={25} height={25} />
                <div>
                  <p className="text-slate-500 font-medium text-sm xl:text-md leading-2">+38515587459</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="hidden lg:flex items-center justify-center"></div>
      </div>
    </SectionWrapper>
  );
}
