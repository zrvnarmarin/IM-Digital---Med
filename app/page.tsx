import Image from 'next/image'
import Navbar from './(home-sections)/Navbar'
import HeroSection from './(home-sections)/HeroSection'
import WhyPeopleChooseUs from './(home-sections)/WhyPeopleChooseUs'
import MeetOurDoctors from './(home-sections)/MeetOurDoctors'
import FAQSection from './(home-sections)/FAQSection'
import Footer from './components/Footer'
import StatsSection from './(home-sections)/StatsSection'
import { Sidebar } from './layout'
import ListSection from './(home-sections)/ListSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#FFFFFF]">
      <Navbar />
      <HeroSection />
      <WhyPeopleChooseUs />
      <ListSection />
      <StatsSection />
      <MeetOurDoctors />
      <FAQSection />
      <Footer />
    </main>
  )
}
