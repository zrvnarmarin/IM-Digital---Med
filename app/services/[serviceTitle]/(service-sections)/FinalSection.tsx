import React from "react";
import Link from "next/link";

export default function MoreAboutServiceSection() {
  return (
    <section className="flex gap-2 h-full flex-col md:flex-col py-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
      <p className="pt-8">
              Cirkon je bezmetalni materijal od kojeg se izrađuju krunice. Metal
              može uzrokovati alergije i često nije estetski prihvatljiv dok je
              cirkon postao standard moderne stomatologije. Cirkon je bezmetalni
              materijal od kojeg se izrađuju krunice. Metal može uzrokovati
              alergije i često nije estetski prihvatljiv dok je cirkon postao
              standard moderne stomatologije.
            </p>
            <div className="flex justify-center pt-16">
              <Link
                href={`/contact`}
                className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border"
              >
                Contact Us
              </Link>
            </div>
    </section>
  );
}