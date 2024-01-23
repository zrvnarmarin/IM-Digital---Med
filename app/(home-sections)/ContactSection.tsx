import { ContactIcon, EmailIcon, LocationPinIcon } from "@/public/Icons";
import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full flex flex-col gap-8 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
      <div className="w-fit bg-white flex flex-row items-center justify-start gap-2 pt-2 border-b-2 border-[#babaff]">
        <h2 className="w-full leading-2 text-start text-xl md:text-lg lg:text-xl font-medium text-[#babaff]">
          Get in touch with us
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Heading and description */}
        <div className="flex gap-4 items-center">
          <div className="h-full flex items-center border-[1px] border-slate-200"></div>
          <div className="flex flex-col gap-2">
            <p className="text-start w-full text-md md:text-lg font-normal text-slate-600">
              Tell us all about your project right here, or send us an email at
              <span className="font-semibold text-[#babaff]">
                {" "}
                info@clinicname.com
              </span>
            </p>
          </div>
        </div>

        {/* Delete section */}
        <div className="flex gap-4 items-center bg-[#babaff]/10">
          <div className="h-full flex items-center border-[1px] border-slate-200"></div>
          <div className="flex flex-col gap-2 py-4">
            <p className="text-start w-full text-md md:text-lg font-normal text-slate-600">
              By filling out this form, our call center will contact you within
              24 hours to arrange your appointment.
              <span className="font-semibold text-[#babaff]">
                {" "}
                info@clinicname.com
              </span>
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="flex gap-4 items-center rounded bg-[#babaff]/10 pr-5 pt-6 pb-6">
          <div className="h-full flex items-center"></div>
          <form className="flex flex-col gap-2 w-full">
            <label
              htmlFor="name"
              className="flex flex-col text-md md:text-lg gap-3 font-semibold text-slate-600 leading-2"
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
              className="flex flex-col text-md md:text-lg gap-3 font-semibold text-slate-600 leading-2"
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
              className="flex flex-col text-md md:text-lg gap-3 font-semibold text-slate-600 leading-2"
            >
              Phone Number
              <input
                type="text"
                id="phone-number"
                className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
              />
            </label>
            <label
              htmlFor="phone-number"
              className="flex flex-col text-md md:text-lg gap-3 font-semibold text-slate-600 leading-2"
            >
              I{`'`}m interested in
              <input
                type="text"
                id="phone-number"
                className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
              />
            </label>
            <label
              htmlFor="phone-number"
              className="flex flex-col text-md md:text-lg gap-3 font-semibold text-slate-600 leading-2"
            >
              Your question
              <textarea
                name="user-request"
                rows={5}
                className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
              />
            </label>
            <div className="flex justify-center pt-8 px-6">
              <button className="bg-[#9595ff] text-white font-semibold px-6 py-3 uppercase">
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Company data */}
        <div className="flex flex-col items-center bg-[#babaff]/10">
          <div className="flex flex-col gap-6 p-4 w-full">
            <p className="flex flex-col text-md md:text-lg gap-3 font-semibold text-slate-600 leading-2 uppercase">Radno vrijeme</p>
            <div className="w-full flex flex-row gap-2 text-md md:text-lg font-normal text-slate-600">
              <p>Pon - Pet: </p>
              <p>08:00 - 16:00h</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-4 w-full">
            <p className="flex flex-col text-md md:text-lg gap-3 font-semibold text-slate-600 leading-2 uppercase">Lokacije</p>
            <div className="w-full flex flex-col justify-between gap-6 text-md md:text-lg font-normal text-slate-600">

              <div className="flex flex-row gap-4">
                <LocationPinIcon width={27} height={27} />
                <div>
                  <p className="font-medium">Hondlova Aleja </p>
                  <p className="text-xs">Ulica Nečeg i Nešto 23a, 10000 Zagreb</p>
                </div>
              </div>

              <div className="flex flex-row gap-4">
              <LocationPinIcon width={27} height={27} />
                <div>
                  <p className="font-medium">Red Mall Square </p>
                  <p className="text-xs">Ulica Nečeg i Nešto 23a, 10000 Zagreb</p>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-6 p-4 w-full">
            <p className="flex flex-col text-md md:text-lg gap-3 font-semibold text-slate-600 leading-2 uppercase">Kontakt</p>
            <div className="w-full flex flex-col justify-between gap-6 text-md md:text-lg font-normal text-slate-600">

              <div className="flex flex-row gap-4">
                <EmailIcon width={25} height={25} />
                <div>
                  <p className="font-medium">76marin76@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <ContactIcon width={25} height={25} />
                <div>
                  <p className="font-medium">+38515587459</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="hidden lg:flex items-center justify-center"></div>
      </div>
    </section>
  );
}
