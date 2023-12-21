"use client";

import React, { useState } from "react";
import Image from "next/image";
import DoctorImage from "../../public/doctorOperating.jpg";

export default function FAQSection() {
  return (
    <section className="w-full px-8 py-16 bg-white">
      <h1 className="font-bold text-start text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2f31] leading-10">
        Frequently Asked Questions
      </h1>
      <p className="text-[#555f60] text-start text-md sm:text-lg leading-7 pt-8">
        A frequently asked questions (FAQ) forum is often used in articles,
        websites, email lists, and online forums where common questions tend to
        recur.
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12">
        <div className="flex items-center justify-center bg-black">
          <Image
            src={DoctorImage}
            alt="Open Accordion Button"
            height={100}
            width={400}
            className="object-cover w-full h-96 "
          />
        </div>
        <Accordion />
      </div>
    </section>
  );
}

export function Accordion() {
  const [activeIndex, setActiveIndex] = useState(-1); // Initialize with -1 to have no active accordion initially

  const handleShow = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="">
      {accordions.map((accordion, index) => (
        <Panel
          key={accordion.id}
          index={index}
          title={accordion.title}
          answer={accordion.answer}
          isActive={activeIndex === index}
          onShow={() => handleShow(index)}
        />
      ))}
    </div>
  );
}

function Panel({
  title,
  answer,
  isActive,
  onShow,
}: {
  title: string;
  answer: string;
  isActive: boolean;
  onShow: () => void;
  index: number;
}) {
  return (
    <div
      onClick={onShow}
      className="cursor-pointer border-[#e8e8e8] border-b-2"
    >
      <div className="flex items-center justify-between gap-6 py-4">
        <h3 className="text-[#333333] font-semibold text-sm md:text-md lg:text-xl">
          {title}
        </h3>
        {isActive ? (
          <p className="text-4xl font-semibold text-[#194C7A]">-</p>
        ) : (
          <p className="text-4xl font-semibold text-[#194C7A]">+</p>
        )}
      </div>
      {isActive ? (
        <p className="font-medium text-[#666666] text-md lg:text-lg py-2">
          {answer}
        </p>
      ) : null}
    </div>
  );
}

const accordions = [
  {
    id: 1,
    title: "What are common pediatric cardiovascular conditions?",
    answer:
      "Common pediatric cardiovascular conditions include congenital heart defects, arrhythmias, and heart murmurs.",
  },
  {
    id: 2,
    title: "How are pediatric cardiovascular conditions diagnosed?",
    answer:
      "Pediatric cardiovascular conditions are often diagnosed through physical examinations, imaging tests like echocardiograms, and electrocardiograms (ECGs).",
  },
  {
    id: 3,
    title: "What is the treatment for pediatric cardiovascular conditions?",
    answer:
      "Treatment for pediatric cardiovascular conditions may involve medications, surgical procedures, or interventions such as catheterization.",
  },
  {
    id: 4,
    title: "What are common dermatological conditions in children?",
    answer:
      "Common dermatological conditions in children include eczema, acne, impetigo, and fungal infections.",
  },
  {
    id: 5,
    title: "How can pediatric dermatological conditions be managed?",
    answer:
      "Management of pediatric dermatological conditions may involve topical medications, oral medications, and lifestyle modifications.",
  },
];
