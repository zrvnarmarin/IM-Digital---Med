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
        <div className={`flex items-center justify-between gap-6 py-4`}>
          <h3 className={`text-md md:text-lg lg:text-lg font-medium`}>
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
          <div className="px-4 py-2 border-[1px] border-slate-200 text-start">
            <p className="text-start w-full text-sm md:text-md font-normal">
              {answer}
            </p>
          </div>
        ) : null}
      </div>
    );
  }
  