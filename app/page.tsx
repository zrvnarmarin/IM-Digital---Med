import Image from 'next/image'
import Navbar from './(home-sections)/Navbar'
import HeroSection from './(home-sections)/HeroSection'
import WhyPeopleChooseUs from './(home-sections)/WhyPeopleChooseUs'
import MeetOurDoctors from './(home-sections)/MeetOurDoctors'
import FAQSection from './(home-sections)/FAQSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:py-8 bg-[#d0ecf4]">
      <Navbar />
      <HeroSection />
      <WhyPeopleChooseUs />
      <MeetOurDoctors />
      <FAQSection />
      <Footer />
    </main>
  )
}
