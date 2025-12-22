import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (

<div className='mt-4'>
    {/* Logo */}
    <div className='mb-4 px-10 mx-[8%] mt-4'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36'/>
    </div>
    
    {/* Contact Details in Single Line */}
    <div className='flex items-center gap-8 text-sm mb-4 px-10 mx-[8%] mt-4 '>
        <div className='flex items-center gap-2'>   
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-5'/>
            <span>syedzainali4372@outlook.com</span>
        </div>
        <div className='flex items-center gap-2'>   
            <Image src={isDarkMode ? assets.phone_dark : assets.phone} alt='' className='w-5'/>
            <span>+92 300 2678500</span>
        </div>
        <div className='flex items-center gap-2'>   
            <Image src={isDarkMode ? assets.location_dark : assets.location} alt='' className='w-5'/>
            <span>Karachi, Pakistan</span>
        </div>
    </div>
    



        <div className="text-center sm:flex items-center justify-between border-t border-gray-400
        mx-[10%] mt-6 py-6">   
            <p>© 2025 Syed Zain Ali. All rights reserved</p>
            <ul className='flex items-center gap-2 justify-center mt-4 sm:mt-0'> 
                <li>
                    <a target='_black' href="https://www.linkedin.com/in/syedzainalii/">
                    <Image src={isDarkMode ? assets.linkendin_logo_dark : assets.linkendin_logo} alt="LinkedIn" className="w-10" /> </a> 
                </li>
               <li> <a target='_black' href="https://github.com/syedzainalii/">
               <Image src={isDarkMode ? assets.github_logo_dark : assets.github_logo} alt="GitHub" className="w-8" /> </a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer