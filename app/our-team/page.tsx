import React from 'react'
import Navbar from '../(home-sections)/Navbar'
import Footer from '../components/Footer'
import MeetOurTeamSection from './(our-team-sections)/MeetOurTeamSection'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#FFFFFF]">
      <Navbar />
      <MeetOurTeamSection />
      <Footer />
    </main>
  )
}
