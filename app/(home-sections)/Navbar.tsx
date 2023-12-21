'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()

  return (
    <header className='w-full'>
        <nav className='flex flex-row justify-between items-center py-6 bg-[#5dc0b8] lg:bg-inherit px-8'>
            <Link href={'/'}>
                <p className='text-3xl sm:text-4xl leading-10 font-black italic text-white md:text-6xl lg:text-[#194C7A]'>LOGO</p>
            </Link>
            <ul className='hidden lg:flex flex-row items-center justify-between gap-12'>
                <li className='text-[#194C7A] xs:text-md lg:text-lg xl:text-xl font-medium leading-7'><Link href={'/'}>Home</Link></li>
                <li className='text-[#194C7A] xs:text-md lg:text-lg xl:text-xl font-medium leading-7'><Link href={'/about-us'}>About Us</Link></li>
                <li className='text-[#194C7A] xs:text-md lg:text-lg xl:text-xl font-medium leading-7'><Link href={'/services'}>Services</Link></li>
                <li className='text-[#194C7A] xs:text-md lg:text-lg xl:text-xl font-medium leading-7'><Link href={'/our-team'}>Our Team</Link></li>
                <li className='text-[#194C7A] xs:text-md lg:text-lg xl:text-xl font-medium leading-7'><Link href={'/contact'}>Contact</Link></li>
            </ul>
            <div>
                <button className='hidden lg:block text-white lg:text-lg xl:text-xl font-semibold leading-7 bg-[#194C7A] hover:bg-[#47ccc7] shadow-lg hover:scale-105 duration-100 px-8 py-4 rounded-md'>Register</button>
            </div>
            <div className='block lg:hidden'>
            <button className="flex flex-col gap-1.5 items-end">
          <div className="w-7 rounded-md h-[2px] bg-white"></div>
          <div className="w-7 h-[2px] rounded-md bg-white"></div>
          <div className="w-7 h-[2px] rounded-md bg-white"></div>
        </button>
            </div>
        </nav>
    </header>
  )
}
