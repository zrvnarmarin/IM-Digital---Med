import React from 'react'
import { ConstantSupportIcon, HealthServicesIcon, ExpertDoctorsIcon, EmergencySupportIcon } from '@/public/Icons'
import Image from 'next/image'

const services = [
    {
        icon: HealthServicesIcon,
        iconBackground: 'bg-blue-500',
        title: '100+ Health Services'
    },
    {
        icon: ExpertDoctorsIcon,
        iconBackground: 'bg-green-500',
        title: 'Expert Doctors'
    },
    {
        icon: EmergencySupportIcon,
        iconBackground: 'bg-red-500',
        title: 'Emergency Support'
    },
    {
        icon: ConstantSupportIcon,
        iconBackground: 'bg-orange-500',
        title: '24/7 Support'
    }
]

type Service = {
    icon: () => JSX.Element
    iconBackground: string
    title: string
  };

export default function WhyPeopleChooseUs() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-8 bg-white'>
        <div className='flex flex-col'>
            <h1 className='font-bold text-start md:text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2f31] leading-10'>
                Why People Choose Us
            </h1>
            <p className='text-[#555f60] text-start md:text-center text-md sm:text-lg leading-7 pt-8'>
                We strive to convert distant medical possibilities to current procedures, aiding our patients We are committed to fulfilling health aspirations of citizens across the globe.
            </p>
            <div className='grid grid-cols-2 gap-12 pt-10'>
                {services.map(service =>
                    <ServiceCard
                        key={service.title}
                        service={service}
                    />
                )}
            </div>
        </div>
        <div className='flex items-center justify-center border-2 mt-12 border-black'>
            Insert Random Doctor Image here
        </div>
    </section>
  )
}

export function ServiceCard ({ service }: { service: Service }) {
    return (
        <div key={service.title} className={`flex flex-col sm:flex-row items-center gap-4 ${service.iconBackground} shadow-lg bg-opacity-5 rounded-lg p-4`}>
            <div className={`flex items-center justify-center ${service.iconBackground} w-fit h-fit p-2 rounded-lg`}>
                {service?.icon()}
            </div>
            <p className='text-center text-sm md:text-lg lg:text-xl text-[#333333] font-semibold'>{service.title}</p>
        </div>  
    )
}