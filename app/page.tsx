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
import ServicesSection from './(home-sections)/ServicesSection'
import TestImage from '../public/doctorOperating.jpg'
import '../public/carousel.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:pt-4 bg-[#FFFFFF]">
      <Navbar />
      <HeroSection />
      <WhyPeopleChooseUs />
      <section className='container'>
        <div className='slider-wrapper'>
          <div className='slider'>
            <img id='slide-1' src={TestImage} />
            <img id='slide-2' src={TestImage} />
            <img id='slide-3' src={TestImage} />
          </div>
          <div className='slider-nav'>
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div>
      </section>
      <ListSection />
      {/* <StatsSection /> */}
      <ServicesSection />
      <MeetOurDoctors />
      <FAQSection />
      <Footer />
    </main>
  )
}
