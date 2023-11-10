import React from 'react'
import HealthServicesMobile from '../../public/people-choose-us-section/HealthServices-Mobile.png'
import ExpertDoctorsMobile from '../../public/people-choose-us-section/ExpertDoctors-Mobile.png'
import EmergencySuppoerMobile from '../../public/people-choose-us-section/EmergencySupport-Mobile.png'
import SupportMobile from '../../public/people-choose-us-section/Support-Mobile.png'
import DoctorMobile from '../../public/people-choose-us-section/Doctor-Mobile.png'
import Image from 'next/image'

const services = [
    {
        imageSrc: HealthServicesMobile,
        title: '100+ Health Services'
    },
    {
        imageSrc: ExpertDoctorsMobile,
        title: 'Expert Doctors'
    },
    {
        imageSrc: EmergencySuppoerMobile,
        title: 'Emergency Support'
    },
    {
        imageSrc: SupportMobile,
        title: '24/7 Support'
    }
]

export default function WhyPeopleChooseUs() {
  return (
    <section className='flex h-full flex-col lg:flex-row py-12 px-8 pt-96 bg-white'>
        <h1 className='font-bold text-start md:text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2f31] leading-10'>
            Why People Choose Us
        </h1>
        <p className='text-[#555f60] text-start md:text-center text-md sm:text-lg leading-7 pt-6'>
            We strive to convert distant medical possibilities to current procedures, aiding our patients We are committed to fulfilling health aspirations of citizens across the globe.
        </p>
        <div className='grid grid-cols-2 gap-12 pt-10'>
            {services.map(service => 
                <div key={service.title} className='flex flex-col sm:flex-row gap-4'>
                    <div className='flex items-center justify-center'>
                        <Image src={service.imageSrc} width={40} height={40} alt={service.title} />
                    </div>
                    <p className='text-center text-[#333333] font-semibold'>{service.title}</p>
                </div>    
            )}
        </div>
        <div className='flex items-center justify-center'>
            <Image src={DoctorMobile} className='w-full' alt='Doctor' width={500} height={500} />
        </div>
    </section>
  )
}
