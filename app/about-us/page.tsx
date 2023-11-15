import React from 'react'
import Navbar from '../(home-sections)/Navbar'
import AboutUsSection from './(about-us-sections)/AboutUsSection'
import OurFoundingStorySection from './(about-us-sections)/OurFoundingStorySection'
import WhatSetUsApartSection from './(about-us-sections)/WhatSetUsApartSection'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-8 bg-[#d0ecf4]">
      <Navbar />
      <AboutUsSection />
      <OurFoundingStorySection />
      <WhatSetUsApartSection />
      <Footer />
    </main>
  )
}
