"use client";

import React, { useState } from "react";
import { ArrowUp } from "@/public/Icons";
import { FAQType } from "../types";

export function Accordion({ faq } : { faq: FAQType[] }) {
    const [activeIndex, setActiveIndex] = useState(-1); // Initialize with -1 to have no active accordion initially
  
    const handleShow = (index: number) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };
  
    return (
      <div className="">
        {faq.map((accordion, index) => (
          <Panel
            key={accordion.id}
            index={index}
            question={accordion.question}
            answer={accordion.answer}
            isActive={activeIndex === index}
            onShow={() => handleShow(index)}
          />
        ))}
      </div>
    );
  }
  
  function Panel({
    question,
    answer,
    isActive,
    onShow,
  }: {
    question: string;
    answer: string;
    isActive: boolean;
    onShow: () => void;
    index: number;
  }) {
    return (
      <div onClick={onShow} className="cursor-pointer">
        <div className={`group flex items-center justify-between gap-6 bg-[#babaff]/10 py-4  ${!isActive ? 'border-b-[1px] border-slate-200' : 'border-none'}border-b-[1px] px-4`}>
          <h3 className={`text-md md:text-lg lg:text-xl font-semibold text-slate-600 group-hover:text-[#babaff] duration-200`}>
            {question}
          </h3>
          {isActive ? (
            <p className="text-4xl font-semibold text-[#194C7A]">
              <div className="rotate-180">
                <ArrowUp />
              </div>
            </p>
          ) : (
            <p className="text-4xl font-semibold text-[#194C7A]">
              <ArrowUp />
            </p>
          )}
        </div>
        {isActive ? (
          <div className="pt-2 text-start px-4">
            <p className="text-start w-full text-md md:text-lg font-normal text-slate-600 py-4">
              {answer}
            </p>
          </div>
        ) : null}
      </div>
    );
  }
  