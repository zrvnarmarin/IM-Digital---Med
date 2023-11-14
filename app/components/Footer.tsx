import React from 'react'
import Link from 'next/link'
import Pattern from '../../public/pattern.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-gradient-to-r from-[#0C9CD3] to-[#3CAEAA] px-8 pt-8 pb-4 flex flex-col w-full h-full relative'>
       {/* <Image src={Pattern} alt='nesto' width={200} height={200} className='absolute right-0 top-0' /> */}
       <div className='flex flex-col'>
            <Link href={'/'}>
              <p className='text-3xl sm:text-4xl leading-10 font-bold text-white md:text-6xl'>LOGO</p>
            </Link>
         <div className='grid grid-cols-1 lg:grid-cols-2'>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12'>
              {footerLinks.map(footerLink =>
                <div key={footerLink.heading}>
                  <h3 className='text-white leading-2 text-md pb-4 font-medium'>{footerLink.heading}</h3>
                  <div className='flex flex-col gap-2'>
                    {footerLink.links.map(link =>
                      <Link href={`/${link}`} key={link} className='text-gray-200 leading-2 text-sm hover:underline hover:underline-offset-4 hover:decoration-[#1D7349]'>{link}</Link>
                    )}
                  </div>
                </div>
              )}
            </ul>
          <div className='pt-12 flex flex-col items-end'>
            <h2 className='text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl leading-10 font-bold text-white'>
              Subscribe to Our newsletter.
            </h2>
            <p className='text-gray-200 leading-2 text-xs hover:underline hover:underline-offset-4 hover:decoration-[#1D7349]'>
              To make your stay special-and even more memorable.
            </p>
          </div>
         </div>
       </div>
        <h3 className='text-white text-sm md:text-md lg:text-lg pt-16 pb-4'>&#169; IM Digital Ltd.</h3>
    </footer>
  )
}

const footerLinks = [
  {
    heading: 'About Us',
    links: [ 'Home', 'About' ]
  },
  {
    heading: 'Company',
    links: [ 'Home', 'About' ]
  },
  {
    heading: 'Terms And Policies',
    links: [ 'Home', 'About' ]
  }
]
