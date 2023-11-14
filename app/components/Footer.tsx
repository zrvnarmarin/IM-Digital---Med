import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-gradient-to-r from-[#0C9CD3] to-[#3CAEAA] px-8 flex flex-col w-full'>
       <div className='flex flex-col gap-6'>
        <Link href={'/'}>
                <p className='text-3xl sm:text-4xl leading-10 font-black italic text-white md:text-6xl lg:text-[#3caeaa]'>LOGO</p>
            </Link>
       </div>

        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12'>
          {footerLinks.map(footerLink =>
            <div key={footerLink.heading}>
              <h3 className='text-white leading-2 text-xl pb-8 font-semibold'>{footerLink.heading}</h3>
              <div className='flex flex-col gap-2'>
                {footerLink.links.map(link =>
                  <Link href={`/${link}`} key={link} className='text-gray-200 leading-2 text-md hover:underline hover:underline-offset-4 hover:decoration-[#1D7349]'>{link}</Link>
                )}
              </div>
            </div>  
          )}
        </ul>
        <h3 className='text-white text-lg md:text-xl lg:text-2xl pt-32 pb-8'>&#169; IM Digital Ltd.</h3>
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