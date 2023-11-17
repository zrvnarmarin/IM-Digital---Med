import React from 'react';
import { doctors } from '@/app/data';
import Navbar from '@/app/(home-sections)/Navbar';
import Footer from '@/app/components/Footer';

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
    <section className='flex gap-8 h-full flex-col md:flex-col py-12 px-8 md:px-12 lg:px-24 bg-white'>
      <h1 className='text-[#333333] font-medium text-lg'>{doctor.name}</h1>
      <p className='text-[#656666] font-xs'>{doctor.title}</p>
      <p>{doctor.description}</p>
      <ul>
        {doctor.achievements.map(achievement =>
          <li key={achievement}>
            {achievement}
          </li>
        )}
      </ul>
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