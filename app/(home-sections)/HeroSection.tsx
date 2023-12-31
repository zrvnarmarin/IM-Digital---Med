import Image from 'next/image';
import React from 'react';
import PlayButton from '../../public/play_button.webp';
import Med from '../../public/med.png';
// import HeroImage from '../../public/jc-gellidon-9Eb-bpTXglM-unsplash.jpg';
import HeroImage from '../../public/heroDoctors.avif'; 


export default function HeroSection() {
  return (
    <section className='flex'>
      <div className="min-h-screen w-full">
        {/* Hero Section */}
        <div className="relative h-screen md:h-auto bg-black">
          <Image
            src={HeroImage}
            alt="Hero Image"
            className='object-cover w-full h-full md:h-auto opacity-60 bg-black'
          />
          {/* Hero Content (Add your text and buttons here) */}
          <div className="absolute inset-0 flex items-center justify-center text-white text-center pt-24">
            <div>
              <h1 className="text-3xl text-center font-bold mb-4 px-3.5">Lorem Ipsum Dolor Sit</h1>
              <p className="text-lg mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, eum.</p>
              <button className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
