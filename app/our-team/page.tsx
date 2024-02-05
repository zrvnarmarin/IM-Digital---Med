import React from 'react'
import Footer from '../components/Footer'
import MeetOurTeamSection from './(our-team-sections)/MeetOurTeamSection'
import HeroSection from './(our-team-sections)/HeroSection'
import TestimonialsSection from '../(home-sections)/TestimonialsSection'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <HeroSection />
      <MeetOurTeamSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
