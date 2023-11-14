import Image from 'next/image'
import React from 'react'
import { HeartIcon, StarIcon, BagIcon } from '@/public/Icons'

// Trebaju slike na kartice

type Doctor = {
    name: string,
    specialisation: string,
    yearsOfExperience: number,
    rating: number
}

export default function MeetOurDoctors() {
  return (
    <section className='flex h-full flex-col lg:flex-col w-full py-16 px-8 bg-[#eff3fa]'>
        <h1 className='font-bold text-center md:text-center lg:text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2f31] leading-10'>
            Meet Our Doctor Specialists
        </h1>
        <p className='text-[#555f60] text-center lg:text-center md:text-center text-md sm:text-lg leading-7 pt-8'>
            Clinical Research Training and Medical Education · Critical Care Medicine  Additional NIH Doctors/Researchers
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16'>
            {doctors.map(doctor =>
                <DoctorCard
                    doctor={doctor}
                    key={doctor.name}
                />
            )}
        </div>
    </section>
  )
}

const doctors = [
    {
        name: 'Johan Smith',
        specialisation: 'Cardiologist',
        yearsOfExperience: 4,
        rating: 4.5
    },
    {
        name: 'Patrice Harris',
        specialisation: 'Pediatrist',
        yearsOfExperience: 5,
        rating: 4.8
    },
    {
        name: 'Shaun Murphy',
        specialisation: 'Dermatology',
        yearsOfExperience: 3,
        rating: 4.7
    },
    {
        name: 'John Bell',
        specialisation: 'Orthopedist',
        yearsOfExperience: 7,
        rating: 4.5
    }
]


export function DoctorCard ({ doctor }: { doctor: Doctor }) {

    return (
        <div className='cursor-pointer bg-white shadow-lg duration-100 shadow-[#d4e5ed]  rounded-xl pb-10 pt-6 px-6 hover:bg-[#fcfcfc] hover:scale-105'>
            <div>
                {/* Image here */}
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[#333333] font-medium text-lg'>{doctor.name}</h2>
                    <div className='px-2 py-2.5 border border-gray-400 rounded-full'>
                        <HeartIcon />
                    </div>
                </div>
                <p className='text-[#656666] font-medium'>{doctor.specialisation}</p>
                <div className='flex flex-row justify-between items-center pt-6'>
                    <div className='flex items-center gap-4'>
                        <BagIcon />
                        <p className='text-[#656666] font-medium'>{doctor.yearsOfExperience} Years</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <StarIcon />
                        <p className='text-[#656666] font-medium'>{doctor.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}