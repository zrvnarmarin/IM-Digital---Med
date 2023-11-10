'use client'

import React, { useState } from 'react';
import OpenAccordionButton from '../../public/FAQ-section/Union.png'
import CloseAccordionButton from '../../public/FAQ-section/CloseAccordionButton.png'
import Image from 'next/image';

export default function FAQSection() {
  return (
    <section className='w-full px-8 py-16 bg-white'>
      <h1 className='font-bold text-center lg:text-start md:text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2f31] leading-10'>
        Frequently Asked Questions
      </h1>
      <p className='text-[#555f60] text-center lg:text-start md:text-center text-md sm:text-lg leading-7 pt-10'>
        A frequently asked questions (FAQ) forum is often used in articles, websites, email lists, and online forums where common questions tend to recur.
      </p>
      <Accordion />
    </section>
  );
}

export function Accordion() {
  const [activeIndex, setActiveIndex] = useState(-1); // Initialize with -1 to have no active accordion initially

  const handleShow = (index: number) => {
    setActiveIndex(index);
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
    <div className="">
      <h3 className='text-[#333333] font-semibold text-lg lg:text-xl'>{title}</h3>
      {isActive ? (
        <p className='font-medium text-[#666666] text-md lg:text-lg py-4'>{answer}</p>
      ) : (
        <button onClick={onShow} className='py-4'>
            { isActive 
                ?  <Image src={CloseAccordionButton} alt='Open Accordion Button' height={20} width={20} />
                :  <Image src={OpenAccordionButton} alt='Open Accordion Button' height={20} width={20} />
            }
        </button>
      )}
    </div>
  );
}

const accordions = [
  {
    id: 1,
    title: 'What does telemedicine mean?',
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
