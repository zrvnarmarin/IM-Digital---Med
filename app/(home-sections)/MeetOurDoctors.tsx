import Image from 'next/image'
import React from 'react'
import BagIcon from '../../public/meet-our-doctors/BagIcon.png'
import HeartIcon from '../../public/meet-our-doctors/HeartIcon.png'
import StarIcon from '../../public/meet-our-doctors/StarIcon.png'

// Trebaju slike na kartice

export default function MeetOurDoctors() {
  return (
    <section className='flex h-full flex-col lg:flex-row py-16 px-8 bg-[#eff3fa]'>
        <h1 className='font-bold text-center lg:text-start md:text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2f31] leading-10'>
            Meet Our Doctors Specialists
        </h1>
        <p className='text-[#555f60] text-center lg:text-start md:text-center text-md sm:text-lg leading-7 pt-10'>
            Clinical Research Training and Medical Education · Critical Care Medicine  Additional NIH Doctors/Researchers
        </p>
        <div className='flex flex-col gap-4 pt-8'>
            {doctors.map(doctor =>
                <DoctorCard
                    name={doctor.name}
                    specialisation={doctor.specialisation}
                    yearsOfExperience={doctor.yearsOfExperience}
                    rating={doctor.rating}
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

export function DoctorCard ({ 
    name, specialisation, yearsOfExperience, rating
}: {
    name: string, specialisation: string, yearsOfExperience: number, rating: number
}) {

    return (
        <div className='bg-white  rounded-xl pb-10 pt-6 px-6'>
            <div>
                {/* Image here */}
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[#333333] font-medium text-lg'>{name}</h2>
                    <div className='px-2 py-2.5 border border-gray-400 rounded-full'>
                        <Image src={HeartIcon} width={20} height={20} alt='Heart Icon'  />
                    </div>
                </div>
                <p className='text-[#656666] font-medium'>{specialisation}</p>
                <div className='flex flex-row justify-between items-center pt-6'>
                    <div className='flex items-center gap-4'>
                        <Image src={BagIcon} width={20} height={20} alt='Heart Icon'  />
                        <p className='text-[#656666] font-medium'>{yearsOfExperience} Years</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image src={StarIcon} width={20} height={20} alt='Heart Icon'  />
                        <p className='text-[#656666] font-medium'>{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}