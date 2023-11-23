import React from 'react'
import Navbar from '../(home-sections)/Navbar'
import AboutUsSection from './(about-us-sections)/AboutUsSection'
import OurFoundingStorySection from './(about-us-sections)/OurFoundingStorySection'
import WhatSetUsApartSection from './(about-us-sections)/WhatSetUsApartSection'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#FFFFFF]">
      <Navbar />
      <section className='flex flex-col items-center justify-center lg:pt-4 md:px-8 lg:px-24 pb-4'>
      <div className='b-2'>
        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-star md:text-center text-[#2a2f31] leading-10 mb-8 pt-6'>
          About Us
        </h1>
        <p className='text-[#555f60] text-start md:text-start text-md sm:text-lg leading-7'>
          Welcome to Kompany, where our commitment to your well-being drives everything we do. Founded on the principles of compassion, expertise, and innovation, we strive to redefine healthcare and make a positive impact on lives around the world. We believe in accessible and personalized healthcare.
        </p>
        <br /><br />
        <p className='text-[#555f60] text-start md:text-start text-md sm:text-lg leading-7'>
          Our mission is to empower individuals to take control of their health and well-being through a seamless blend of cutting-edge technology and compassionate care.
        </p>
      </div>

      {/* Founding Story */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-12'>
        <div className='md:col-span-1 text-[#555f60] text-start md:text-start text-md sm:text-lg leading-7'>
          <h2 className='text-xl font-bold mb-4'>Our Founding Story</h2>
          <p>
            In the early days of 2010, two visionary minds, Dr. Allison Harper and Tech Innovator Ethan Mitchell, came together with a shared dream — to revolutionize healthcare and make a lasting impact on the well-being of individuals worldwide.
          </p>
          <p>
            Dr. Harper, a seasoned healthcare professional with a passion for patient-centered care, had witnessed the gaps in accessibility and personalized attention in the healthcare industry. Meanwhile, Ethan Mitchell, a brilliant tech entrepreneur, envisioned a future where advanced technology could seamlessly integrate with healthcare, enhancing the overall experience for patients.
          </p>
          <p>
            Their paths converged, and in 2011, they founded [Your Company Name]. United by a commitment to innovation, compassion, and excellence, Dr. Harper and Ethan Mitchell set out to create a healthcare ecosystem that transcended traditional boundaries.
          </p>
        </div>
          <div className='border-2 border-black h-48 md:h-full items-center justify-center'>
            Image of founders
          </div>
      </div>

      {/* What Sets Us Apart */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#FFFFFF] w-full py-12'>
        <div className='order-2'>
          <h2 className='text-xl font-bold mb-4'>What Sets Us Apart</h2>
          <p className='text-[#555f60] text-start md:text-start text-md sm:text-lg leading-7'>
            <span className='font-semibold'>Patient-Centric Approach:</span> Your health is at the heart of everything we do. We prioritize your needs, ensuring a personalized and empathetic experience at every step.
          </p> 
          <br />
          <p className='text-[#555f60] text-start md:text-start text-md sm:text-lg leading-7'>
            <span className='font-semibold'>Innovation in Healthcare:</span> 
            We leverage the latest technologies and medical advancements to provide you with the best possible care. 
            Our commitment to innovation ensures that you have access to state-of-the-art solutions.
          </p> 
          <br />
          <p className='text-[#555f60] text-start md:text-start text-md sm:text-lg leading-7'>
            <span className='font-semibold'>Qualified Professionals:</span> 
            Our team comprises experienced healthcare professionals, from skilled doctors to compassionate support 
            staff. Rest assured, you`re in capable hands.
          </p> 
          <br />
        </div>
        <div>
          {/* Add any relevant images/icons for each point */}
          <div className='border-2 border-black h-48 md:h-full'></div>
        </div>
      </div>
    </section>
      <Footer />
    </main>
  )
}
