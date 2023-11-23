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

export function MedicalServiceCard({ service } : { service: Service }) {
  return (
    <Link 
      href={`/our-team/${service.id}`} 
      key={service.service} 
      className='cursor-pointer opacity-70 bg-white border border-gray-100 
      hover:scale-105 duration-100 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-4 p-6
       rounded-xl text-[#2a2f31]'
    >
      <div className='flex border row-start-1 row-end-3 border-black items-center justify-center rounded-lg col-span-1 md:col-span-1'>
        Image of the service
      </div>
      <div className='flex flex-col md:flex-row col-span-1 md:col-span-2'>
        <div className='flex flex-col'>
          <h2 className='pb-4 font-bold'>{service.service}</h2>
          <h2 className='font-normal text-sm md:text-md'>{service.shortDescription}</h2>
        </div>
      </div>
      <p className='flex flex-row gap-2 font-xs text-center md:col-span-2 place-self-end px-2 py-2 text-[#333333] font-semibold rounded-md'>
        <span>Read More</span>
        <span>&rarr;</span>
      </p>
    </Link>  
  )
}

