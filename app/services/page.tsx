import React from 'react'
import Navbar from '../(home-sections)/Navbar'
import Footer from '../components/Footer'
import { medicalServices } from '../data'
import MedicalServiceCardsSection from './(services-sections)/MedicalServiceCardsSection'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#FFFFFF]">
      <Navbar />
      <section className='flex flex-col items-center justify-center lg:pt-4 md:px-8 lg:px-16 pb-4'>
        <div className='b-2 pt-6 px-8 pb-8'>
            <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-star md:text-center text-[#2a2f31] leading-10 mb-6'>
                Services
            </h1>
            <p className='text-[#555f60] text-start md:text-start text-md sm:text-lg leading-7'>
                This is a list of all our services that we constantly provide to keep your health in check
            </p>
        </div>
        <MedicalServiceCardsSection />
      </section>
      <Footer />
    </main>
  )
}

