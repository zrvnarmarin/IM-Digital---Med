import React from 'react';
import Link from 'next/link';
import { doctors } from '@/app/data';

export default function MeetOurTeamSection() {
  return (
    <section className='flex gap-8 h-full flex-col md:flex-col py-12 px-8 bg-[#F1F2F4]'>
      <h1 className='font-bold md:text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2f31] leading-10'>
        Meet Our Team
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <p className='text-[#555f60] text-start md:text-center text-md sm:text-lg leading-7'>
          Your health is our top priority. Meet our dedicated team of medical professionals who will guide you on your
          journey to health and well-being. Explore the expertise and compassion embodied by our best doctors. At the
          heart of our mission is your well-being, and we prioritize your health above all else. 
        </p>
        <div className='border-2 border-black rounded-lg flex items-center justify-center md:h-full'>
          Place for the team of doctors image
        </div>
      </div>
      <div className='flex flex-col gap-8'>
        {doctors.map(doctor =>
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
          />
        )}
      </div>
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

export function DoctorCard({ doctor } : { doctor: Doctor}) {
  return (
    <Link 
      href={`/our-team/${doctor.id}`} 
      key={doctor.name} 
      className='cursor-pointer bg-white hover:scale-105 duration-100 shadow-md grid grid-cols-1 md:grid-cols-3 gap-4 p-6 hover:bg-[#fcfcfc] rounded-xl'
    >
      <div className='flex border border-black items-center justify-center rounded-lg col-span-1 md:col-span-1'>
        Image of the doctor
      </div>
      <div className='flex flex-col md:flex-row col-span-1 md:col-span-2'>
        <div className='flex flex-col'>
          <h2 className='text-[#333333] font-medium text-lg'>{doctor.name}</h2>
          <p className='text-[#656666] font-xs'>{doctor.title}</p>
          <p className='text-[#656666] font-sm pt-4'>{doctor.shortDescription}</p>
        </div>
      </div>
      <p className='text-[#656666] font-xs pt-4 text-end col-span-1 md:col-span-full'>
        Read More 
        <span>&rarr;</span>
      </p>
    </Link>  
  )
}
