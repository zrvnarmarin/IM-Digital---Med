import React from 'react'
import Navbar from '../(home-sections)/Navbar'
import Footer from '../components/Footer'
import { medicalServices } from '../data'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#FFFFFF]">
      <Navbar />
      <section className='flex flex-col items-center justify-center lg:pt-4'>
        <div className='b-2 pt-6 px-8'>
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-star md:text-center text-[#2a2f31] leading-10 mb-6'>
                Services
            </h1>
            <p className='text-[#555f60] text-start md:text-start text-md sm:text-lg leading-7'>
                This is a list of all our services that we constantly provide to keep your health in check
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {medicalServices.map(service =>
                <MedicalServiceCard key={service.id} service={service} />  
            )}
        </div>
      </section>
      <Footer />
    </main>
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
      className='cursor-pointer bg-[#f5f3f3] hover:scale-105 duration-100 shadow-md grid grid-cols-1 md:grid-cols-3 gap-4 p-6 hover:bg-[#fcfcfc] rounded-xl'
    >
      <div className='flex border border-black items-center justify-center rounded-lg col-span-1 md:col-span-1'>
        Image of the doctor
      </div>
      <div className='flex flex-col md:flex-row col-span-1 md:col-span-2'>
        <div className='flex flex-col'>
          <h2 className='text-[#333333] font-medium text-lg'>{service.shortDescription}</h2>
        </div>
      </div>
      <p className='text-[#656666] font-xs pt-4 text-end col-span-1 md:col-span-full'>
        Read More 
        <span>&rarr;</span>
      </p>
    </Link>  
  )
}