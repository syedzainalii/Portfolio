import { Asset, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { useState, useEffect, useRef } from 'react';


const Header = ({isDarkMode, setIsDarkMode}) => {
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/my_resume.pdf';
    link.download = 'Syed_Zain_Ali_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{duration:0.8, type: 'spring', stiffness:100}}
        >   
            <Image src={assets.profile_img} alt="" className='rounded-full w-32'/>
            
        </motion.div>
        <motion.h3 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity:1 }}
        transition={{duration:0.6, delay:0.3}}
        className='flex items-center gap-2 text-3xl md:text-5xl mb-4 font-ovo'>
                Hi! I'm Syed Zain Ali <Image src={assets.hand_icon} alt="" className='w-6'/>
            </motion.h3>

    <motion.h1
            initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity:1 }}
        transition={{duration:0.8, delay:0.5}}
    className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
        Mechanical Engineering Student at NED UET.</motion.h1>
        <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity:1 }}
        transition={{duration:0.6, delay:0.7}}

        className='max-w-xl mx-auto font-ovo'>
        I am a Mechanical Engineering student with experience in assembly and manufacturing at companies like SSGC.
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>    
            <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity:1 }}
          transition={{duration:0.6, delay:1}}
            
            href="#contact" className='px-10 py-3 border border-gray-400 border dark:border-gray-600 rounded-full bg-darkHover text-white flex items-center gap-2 transition-all duration-500 hover:-translate-y-1 dark:text-black dark:bg-white'> 
            Contact Me<Image src={isDarkMode ? assets.right_arrow_light : assets.right_arrow_white} alt="" className='w-4'/></motion.a>
            
            <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity:1 }}
          transition={{duration:0.6, delay:1.2}}
          href="/my_resume.pdf"
          download="Syed_Zain_Ali_Resume.pdf"
          className='px-10 py-3 border rounded-full border-gray-400 dark:border-gray-600 flex items-center gap-2 transition-all duration-500 hover:-translate-y-1 bg-white dark:bg-transparent cursor-pointer'>
            My Resume <Image src={isDarkMode ? assets.download_icon_dark : assets.download_icon} alt="My Resume" className='w-4'/>
          </motion.a>
   </div>
    </div>
  )
}

export default Header