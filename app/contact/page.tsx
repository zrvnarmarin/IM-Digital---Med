import React from 'react';
import Navbar from '../(home-sections)/Navbar';
import Footer from '../components/Footer';

export default function ContactSection() {
  return (
    <section className='flex flex-col items-center justify-center py-4 bg-gray-100'>
      <Navbar />
      <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2a2f31] leading-10 mb-6'>
        Contact Us
      </h1>
      <p className='text-[#555f60] text-center text-md sm:text-lg leading-7 mb-8'>
        Have questions or need assistance? Feel free to reach out to our team. We are here to help you.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Contact Form */}
        <form className='bg-white p-6 rounded-md shadow-md'>
          <h2 className='text-xl font-bold mb-4'>Send us a Message</h2>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Your Name</label>
            <input type='text' id='name' name='name' className='mt-1 p-2 w-full border rounded-md' />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Your Email</label>
            <input type='email' id='email' name='email' className='mt-1 p-2 w-full border rounded-md' />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Your Message</label>
            <textarea id='message' name='message' rows={4} className='mt-1 p-2 w-full border rounded-md'></textarea>
          </div>
          <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'>Send Message</button>
        </form>

        {/* Contact Information */}
        <div className='bg-white p-6 rounded-md shadow-md'>
          <h2 className='text-xl font-bold mb-4'>Contact Information</h2>
          <p className='mb-2'>
            <span className='font-semibold'>Address:</span> 123 Main Street, Cityville, Country
          </p>
          <p className='mb-2'>
            <span className='font-semibold'>Phone:</span> +1 (123) 456-7890
          </p>
          <p className='mb-2'>
            <span className='font-semibold'>Email:</span> info@example.com
          </p>
          <p className='mb-2'>
            <span className='font-semibold'>Business Hours:</span> Monday - Friday, 9:00 AM - 5:00 PM
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}