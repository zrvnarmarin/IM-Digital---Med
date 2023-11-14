'use client'

import React, { useState } from 'react';
import OpenAccordionButton from '../../public/FAQ-section/Union.png'
import CloseAccordionButton from '../../public/FAQ-section/CloseAccordionButton.png'
import Image from 'next/image';
import DoctorImage from '../../public/FAQ-section/doctor.png'
import { CloseAccordionIcon, OpenAccordionIcon } from '@/public/Icons';

export default function FAQSection() {
  return (
    <section className='w-full px-8 py-16 bg-white'>
      <h1 className='font-bold text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2f31] leading-10'>
        Frequently Asked Questions
      </h1>
      <p className='text-[#555f60] text-center text-md sm:text-lg leading-7 pt-8'>
        A frequently asked questions (FAQ) forum is often used in articles, websites, email lists, and online forums where common questions tend to recur.
      </p>
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12'>
        <div className='flex items-center justify-center border-2 border-black'>
            {/* <Image src={DoctorImage} alt='Open Accordion Button' height={400} width={400} /> */}
            Insert image of random doctor
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
    <div className='pt-8'>
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
    <div className=" border-[#e8e8e8] border-b-2">
      <div className='flex items-center justify-between gap-6 py-4'>
          <h3 className='text-[#333333] font-semibold text-sm md:text-md lg:text-xl'>{title}</h3>
          <button onClick={onShow} className='py-2'>
                { isActive
                    ?  <p className='text-4xl text-[#3CAEAA]'>-</p>
                    :  <p className='text-4xl text-[#3CAEAA]'>+</p>
                }
            </button>
      </div>
      {
        isActive 
            ? <p className='font-medium text-[#666666] text-md lg:text-lg py-2'>{answer}</p>
            : null 
      }
        
    </div>
  );
}

const accordions = [
  {
    id: 1,
    title: 'What does telemedicine mean? ndjvndf nonon kdnfondfvnfdno',
    answer: 'Telemedicine is the exchange of medical information from one location to another using electronic communication, ',
  },
  {
    id: 2,
    title: 'What does telemedicine mean?',
    answer: 'Telemedicine is the exchange of medical information from one location to another using electronic communication, ',
  },
  {
    id: 3,
    title: 'What does telemedicine mean?',
    answer: 'Telemedicine is the exchange of medical information from one location to another using electronic communication, ',
  },
  {
    id: 4,
    title: 'What does telemedicine mean?',
    answer: 'Telemedicine is the exchange of medical information from one location to another using electronic communication, ',
  },
  {
    id: 5,
    title: 'What does telemedicine mean?',
    answer: 'Telemedicine is the exchange of medical information from one location to another using electronic communication, ',
  },
];
