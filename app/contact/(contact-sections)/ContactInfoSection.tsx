import React from 'react'

export default function ContactInfoSection() {
  return (
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
  )
}
