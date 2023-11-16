import React from 'react'
import Link from 'next/link'
import { medicalServices } from '@/app/data'

export default function MedicalServiceCardsSection() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8 px-8'>
      {medicalServices.map(service =>
        <MedicalServiceCard key={service.id} service={service} />  
      )}
    </section>
  )
}

type Service = {
    id: number,
    icon: string, 
    service: string,
    shortDescription: string,
    includes: string[],
    recovery: string,
    examination: string,
    surgicalProcess: string,
    complications: string
}
// #3caeaa hover card

export function MedicalServiceCard({ service } : { service: Service }) {
  return (
    <Link 
      href={`/our-team/${service.id}`} 
      key={service.service} 
      className='cursor-pointer opacity-70 bg-[#f8f8f8] border border-gray-200 
      hover:scale-105 duration-100 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4 p-6
      hover:bg-[#55cac6] rounded-xl text-[#333333] hover:text-[#f8f8f8]'
    >
      <div className='flex border border-black items-center justify-center rounded-lg col-span-1 md:col-span-1'>
        Image of the service
      </div>
      <div className='flex flex-col md:flex-row col-span-1 md:col-span-2'>
        <div className='flex flex-col'>
          <h2 className='pb-4'>{service.service}</h2>
          <h2 className='font-normal text-xs md:text-md'>{service.shortDescription}</h2>
        </div>
      </div>
      <p className='flex flex-row gap-2 font-xs pt-4 text-center  md:col-span-full text-white font-semibold hover:font-normal bg-[#47ccc7] rounded-md'>
        <span>Read More</span>
        <span>&rarr;</span>
      </p>
    </Link>  
  )
}
