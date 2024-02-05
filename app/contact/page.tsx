import HeroSection from "./(contact-sections)/HeroSection";
import Footer from "../components/Footer";
import ContactSection from "../(home-sections)/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
      <HeroSection />
      <ContactSection />
      <Footer />
    </main>
  );
}