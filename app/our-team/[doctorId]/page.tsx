import React from 'react';
import { doctors } from '@/app/data';
import Navbar from '@/app/(home-sections)/Navbar';
import Footer from '@/app/components/Footer';
import { EmergencySupportIcon } from '@/public/Icons';

export default function Page({ params }: { params: { doctorId: string }}) {
  const doctor = doctors.find(doctor => doctor.id === parseInt(params.doctorId, 10))

  return (
    <main className='flex min-h-screen flex-col items-center lg:pt-4 bg-white'>
      <Navbar />
      {doctor ? (
        <DoctorDetailsSection
          key={doctor.id}
          doctor={doctor}
        />
      ) : (
        <p>Doctor not found</p>
      )}
      <Footer />
    </main>
  );
}

export function DoctorDetailsSection({ doctor }: { doctor: Doctor }) {
  return (
    <section className='h-full grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 px-8 md:px-12 lg:px-24 bg-white'>
      <div className='border-2 border-black flex items-center justify-center'>
        Image of doctor
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-[#333333] font-medium text-lg lg:text-5xl'>{doctor.name}</h1>
        <div className='flex items-center gap-2'>
          <div className={`flex items-center justify-center bg-red-400 w-fit h-fit p-2 rounded-lg`}>
            <EmergencySupportIcon />
          </div>
          <p className='text-[#656666] text-xs lg:text-lg'>{doctor.title}</p>
        </div>
        <p className='text-[#656666]  lg:text-lg'>{doctor.description}</p>
        <h3 className='text-[#656666] text-xs lg:text-lg'>Achievements: </h3>
        <ul>
          {doctor.achievements.map(achievement =>
            <li key={achievement} className='text-[#656666] flex flex-row gap-2 lg:text-xl'>
              <span className='font-bold text-2xl text-[#3CAEAA]'>&#8226;</span> 
              {achievement} <br /> <br />
            </li>
          )}
        </ul>
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