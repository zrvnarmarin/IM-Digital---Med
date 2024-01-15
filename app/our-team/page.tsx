import React from 'react'
import Navbar from '../(home-sections)/Navbar'
import Footer from '../components/Footer'
import MeetOurTeamSection from './(our-team-sections)/MeetOurTeamSection'
import HeroSection from './(our-team-sections)/HeroSection'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Navbar />
      <HeroSection />
      <MeetOurTeamSection />
      <Footer />
    </main>
  )
}
