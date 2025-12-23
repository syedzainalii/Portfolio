import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  // FIX: Using proper transform values to hide/show
  function openMenu() {
    sideMenuRef.current.style.transform = "translateX(-100%)";
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <>
      {/* Background Decor - Made responsive so it doesn't overflow */}
      <div className='fixed top-0 right-0 w-full md:w-11/12 -z-10 translate-y-[-80%] dark:hidden pointer-events-none'>
        <Image src={assets.header_bg_color} alt="" className='w-full' priority />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll 
        ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme/50" 
        : ""}`}>
        
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Logo'
            className='w-24 md:w-28 cursor-pointer' 
          />
        </a>

        {/* Desktop Menu - Hidden on Mobile */}
                <ul className={`hidden md:flex items-center gap-6 lg:gap-12 rounded-full

          px-12 py-3 ${isScroll ? "" : "bg-white  shadow-sm bg-opacity-50 border border-gray-400 border dark:border-gray-600 dark:bg-transparent"}`}>
          <li><a className='font-Ovo relative group' href="#top">Home <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 dark:bg-white transition-all duration-300 group-hover:w-full'></span></a></li>
          <li><a className='font-Ovo relative group' href="#about">About me <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 dark:bg-white transition-all duration-300 group-hover:w-full'></span></a></li>
          <li><a className='font-Ovo relative group' href="#skills">Skills <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 dark:bg-white transition-all duration-300 group-hover:w-full'></span></a></li>
          <li><a className='font-Ovo relative group' href="#services">Services <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 dark:bg-white transition-all duration-300 group-hover:w-full'></span></a></li>
          <li><a className='font-Ovo relative group' href="#work">My Work <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 dark:bg-white transition-all duration-300 group-hover:w-full'></span></a></li>
          <li><a className='font-Ovo relative group' href="#experience">Experience <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 dark:bg-white transition-all duration-300 group-hover:w-full'></span></a></li>
          <li><a className='font-Ovo relative group' href="#certification">Certification <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 dark:bg-white transition-all duration-300 group-hover:w-full'></span></a></li>
          <li><a className='font-Ovo relative group' href="#contact">Contact me <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 dark:bg-white transition-all duration-300 group-hover:w-full'></span></a></li>

        </ul>

        <div className='flex items-center gap-2 md:gap-4'> 

          <button onClick={() => setIsDarkMode(prev => !prev)} className='p-2 rounded-full active:scale-90 group'> 
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6' />
          </button>

 
          <a href="#contact" className='hidden sm:flex items-center gap-2 px-6 py-2 border border-gray-400 rounded-full font-Ovo dark:border-gray-600'>
            Contact 
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3' />
          </a>

          {/* Mobile Menu Toggle */}
          <button className='block md:hidden p-2' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6'/>
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul ref={sideMenuRef} 
          className='flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-full top-0 bottom-0 w-64 z-[60] h-screen bg-white transition-transform duration-500 dark:bg-darkHover dark:text-white shadow-2xl'
          style={{ transform: 'translateX(0)' }}
        >
          <div className='absolute top-6 right-6' onClick={closeMenu}> 
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className='w-5 cursor-pointer'/>
          </div>

          <li><a className='font-Ovo text-lg' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo text-lg' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-Ovo text-lg' onClick={closeMenu} href="#skills">Skills</a></li>
          <li><a className='font-Ovo text-lg' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='font-Ovo text-lg' onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className='font-Ovo text-lg' onClick={closeMenu} href="#experience">Experience</a></li>
          <li><a className='font-Ovo text-lg' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar