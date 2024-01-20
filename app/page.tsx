import Navbar from "./(home-sections)/Navbar";
import HeroSection from "./(home-sections)/HeroSection";
import WhyPeopleChooseUs from "./(home-sections)/WhyPeopleChooseUs";
import MeetOurDoctors from "./(home-sections)/MeetOurDoctors";
import FAQSection from "./(home-sections)/FAQSection";
import Footer from "./components/Footer";
import ListSection from "./(home-sections)/ListSection";
import ServicesSection from "./(home-sections)/ServicesSection";
import TestimonialsSection from "./(home-sections)/TestimonialsSection";
import StatsSection from "./(home-sections)/StatsSection";
import NewsSection from "./(home-sections)/NewsSection";
import ContactSection from "./(home-sections)/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
      <Navbar />
      <HeroSection />
      <WhyPeopleChooseUs />
      <ListSection />
      <ServicesSection />
      <StatsSection />
      <MeetOurDoctors />
      <TestimonialsSection />
      <NewsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
