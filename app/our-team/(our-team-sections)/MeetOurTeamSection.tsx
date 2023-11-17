import React from 'react';
import Link from 'next/link';
import { doctors } from '@/app/data';
import { StarIcon } from '@/public/Icons';
import Image from 'next/image';
import MedImg from '../../../public/med.png'

export default function MeetOurTeamSection() {
  return (
    <section className='flex gap-8 h-full flex-col md:flex-col py-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]'>
      <h1 className='font-bold md:text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2f31] leading-10'>
        Meet Our Team
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <p className='text-[#555f60] text-start md:text-center text-md sm:text-lg leading-7'>
          Your health is our top priority. Meet our dedicated team of medical professionals who will guide you on your
          journey to health and well-being. Explore the expertise and compassion embodied by our best doctors. At the
          heart of our mission is your well-being, and we prioritize your health above all. 
        </p>
        <div className='border-2 border-black rounded-lg flex items-center justify-center md:h-full'>
          Place for the team of doctors image
        </div>
      </div>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      {doctors.map(doctor =>
        <DoctorCard 
          key={doctor.id} 
          doctor={doctor} 
        />  
      )}
    </section>
    </section>
  )
}

type Doctor = {
  id: number, 
  imageSrc: string,
  href: string,
  name: string,
  title: string,
  shortDescription: string,
  description: string,
  achievements: string[]
}

export function DoctorCard({ doctor } : { doctor: Doctor }) {
  return (
    <Link 
      href={`/our-team/${doctor.id}`} 
      key={doctor.name} 
      className='cursor-pointer opacity-70 bg-white border border-gray-100 
      hover:scale-105 duration-100 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4 p-6
      rounded-md text-[#2a2f31]'
    >
      <div className='w-full row-span-full h-full flex border border-black items-center justify-center rounded-md col-span-1 md:col-span-1'>
      </div>
      <div className='flex flex-col md:flex-row col-span-1 md:col-span-2'>
        <div className='flex flex-col'>
          <h2 className='pb-4 font-bold'>{doctor.name}</h2>
          <h2 className='font-normal text-sm md:text-md'>{doctor.shortDescription}</h2>
        </div>
      </div>
      <p className='flex flex-row gap-2 font-xs text-center md:col-span-2 place-self-end px-2 py-2 text-[#000000] font-semibold rounded-md'>
        <span>Read More</span>
        <span>&rarr;</span>
      </p>
    </Link>  
  )
}