import Image from 'next/image';
import React from 'react';
import PlayButton from '../../public/play_button.webp';
import Med from '../../public/med.png';
import SquareBg from '../../public/square-background.png';

export default function HeroSection() {
  return (
    <section className='flex gap-8 h-full flex-col lg:flex-row py-12 px-8'>

      <div className='flex flex-col justify-center'>

        <div>
          <h1 className='font-bold text-start md:text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2f31] leading-10'>
            Became reasons of Thousand smiles
          </h1>
          <p className='text-[#555f60] text-start md:text-center text-md sm:text-lg leading-7 pt-6'>
            We will help you in maintaining your health here we choose you a doctor who is experienced and certified in his field.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row items-center gap-4 lg:gap-12 pt-8'>
          <div className='w-full'>
            <button className='w-full text-white text-md lg:text-lg xl:text-xl font-medium leading-7 bg-[#3caeaa] px-6 py-3 lg:px-8 lg:py-4 rounded-md'>
              Appointment
            </button>
          </div>
          <div className='flex flex-row gap items-center justify-center w-full border-[#3caeaa] border rounded-md'>
            <Image src={PlayButton} width={45} height={45} alt='Play_button' />
            <p className='text-[#3f4749] text-md lg:text-lg xl:text-xl font-semibold leading-7 px-6 py-3 lg:px-8 lg:py-4 rounded-md'>Watch Video</p>
          </div>
        </div>

      </div>

      <div className="relative flex items-center justify-center border-2 border-black mt-8 w-full">
        <div className="flex items-center justify-center">
          Insert Image of doctor and square backgrounds here
          {/* <Image
            src={Med}
            alt="med"
            width={500}
            height={500}
            layout="responsive"
            className="w-full absolute inset-0 object-cover z-20"
          /> */}
          {/* <Image
            src={SquareBg}
            alt="square background"
            width={500}
            height={500}
            layout="responsive"
            className="w-full absolute inset-0 object-cover z-10"
          /> */}
        </div>
      </div>

    </section>
  )
}
