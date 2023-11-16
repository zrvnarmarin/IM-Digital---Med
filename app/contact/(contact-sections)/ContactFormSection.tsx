import React from 'react'

export default function ContactFormSection() {
  return (
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
        <div>
            <button className='text-white lg:text-lg xl:text-xl font-semibold leading-7 bg-[#3caeaa] hover:bg-[#47ccc7] shadow-2xl hover:scale-105 duration-100 px-8 py-4 rounded-md'>Send Message</button>
        </div>
    </form>
  )
}
