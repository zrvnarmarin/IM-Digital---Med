import React from "react";
import Navbar from "../(home-sections)/Navbar";
import Footer from "../components/Footer";
import MedicalServiceCardsSection from "./(services-sections)/MedicalServiceCardsSection";
import HeroSection from "./(services-sections)/HeroSection";
import TestimonialsSection from "../(home-sections)/TestimonialsSection";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
      <Navbar />
      <HeroSection />
      <MedicalServiceCardsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
