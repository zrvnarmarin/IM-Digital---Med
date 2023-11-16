import React from 'react';
import Navbar from '../(home-sections)/Navbar';
import Footer from '../components/Footer';
import ContactInfoSection from './(contact-sections)/ContactInfoSection';
import ContactFormSection from './(contact-sections)/ContactFormSection';
import HeroSection from './(contact-sections)/HeroSection';

export default function ContactSection() {
  return (
    <section className='flex flex-col items-center justify-center lg:pt-4 bg-gray-100'>
      <Navbar />
      <div className='px-8 pt-12 pb-6'>
        <HeroSection />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-16 px-8'>
        <ContactFormSection />
        <ContactInfoSection />
      </div>
      <Footer />
    </section>
  );
}