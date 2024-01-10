"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TestImage from "../../../public/doctorOperating.jpg";
import TestImageTwo from '../../../public/FAQ-section/doctor.png'
import TestImageThree from '../../../public/HospitalImage.jpg'
import '../../../public/carousel.css'

export default function ClientReviews() {
  return (
    <section className="w-full flex flex-col gap-6 pb-8 px-7 md:px-16 lg:px-20 bg-white pt-8">
      <div className="flex flex-col items-center gap-2 relative">
        <p className="text-9xl text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          06
        </p>
        <div className="relative z-10 text-start text-2xl md:text-3xl lg:text-4xl text-[#2a2f31] font-semibold uppercase leading-2">
          Client Reviews
          {/* To DO: dodaj carousel koji ce imati kartice testimoniala u stilu doctors kartica */}
        </div>
      </div>
    </section>
  );
}

// const Carousel = ({
//   slides,
//   interval = 3000,
// }: {
//   slides: any;
//   interval: number;
// }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const autoplayInterval = setInterval(() => {
//       const nextSlide = (currentSlide + 1) % slides.length;
//       setCurrentSlide(nextSlide);
//     }, interval);

//     return () => clearInterval(autoplayInterval);
//   }, [currentSlide, interval, slides.length]);

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="carousel">
//       <div className="slides-container">
//         {slides.map((slide: number, index: number) => (
//           <div
//             key={index}
//             className={`slide ${index === currentSlide ? "active" : ""}`}
//           >
//             {slide}
//           </div>
//         ))}
//       </div>
//       <div className="controls">
//         {slides.map((_, index: number) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={index === currentSlide ? "active" : ""}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// const slides = [
//   <Image
//     className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transition duration-300 ease-in-out transform group-hover:scale-105"
//     src={TestImage}
//     alt="Card Background"
//     width={0}
//     height={0}
//   />,
//   <Image
//     className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transition duration-300 ease-in-out transform group-hover:scale-105"
//     src={TestImageTwo}
//     alt="Card Background"
//     width={0}
//     height={0}
//   />,
//   <Image
//     className="object-cover w-full h-54 md:h-72 lg:h-80 xl:h-96 transition duration-300 ease-in-out transform group-hover:scale-105"
//     src={TestImageThree}
//     alt="Card Background"
//     width={0}
//     height={0}
//   />,
// ];
