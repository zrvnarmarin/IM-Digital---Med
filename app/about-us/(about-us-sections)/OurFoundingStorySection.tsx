import React from "react";
import Image from "next/image";
import TestImage from "../../../public/doctorOperating.jpg";

export default function TextSection() {
  return (
    <section className="flex gap-4 h-full flex-col lg:flex-row pb-12 px-8 pt-8">
      <div className="flex flex-col items-center gap-2 relative">
        <p className="text-9xl text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          03
        </p>
        <div className="relative z-10 text-xl uppercase font-bold">
          Our Founding Story
        </div>
      </div>
      <p className="text-sm text-slate-500 pt-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur
        explicabo qui?
      </p>
      <p className="text-sm text-slate-500 pt-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde expedita
        eveniet doloribus quia dolorem hic nulla nihil, odio nisi fugiat ipsam
        aut, ducimus deserunt quisquam nostrum vitae sequi amet recusandae
        tempore! Atque minus quo eligendi?
      </p>
      <p className="text-sm text-slate-500 pt-1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde expedita
        eveniet doloribus quia dolorem hic nulla nihil, odio nisi fugiat ipsam
        aut, ducimus deserunt quisquam nostrum vitae sequi amet recusandae
        tempore! Atque minus quo eligendi?
      </p>
      <Image src={TestImage} alt="clover" width={400} height={400} className="rounded" />
    </section>
  );
}
