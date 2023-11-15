import React from 'react'
import Navbar from '@/app/(home-sections)/Navbar'
import Footer from '@/app/components/Footer'

export default function Page({ params }: { params: { doctorId: number }}) {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-8 bg-[#d0ecf4]">
      <Navbar />
      {params.doctorId}
      <Footer />
    </main>
  )
}
