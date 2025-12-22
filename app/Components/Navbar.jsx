import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useState, useEffect, useRef } from 'react';


const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const[isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    function openMenu() {
    sideMenuRef.current.style.transform = "translateX(-16rem";
  }

    const closeMenu =()=>{
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }

    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (scrollY > 50) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      });
    }, [])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden' >
      <Image src={assets.header_bg_color} alt="" className='w-full'/>
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 
        flex items-center justify-between z-50 ${isScroll 
        ?"bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20":""}`}>
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt=''
            className='w-28 alt"" cursor-pointer mr-14' 
          />
        </a>

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

        <div className='flex items-center gap-4'> 

          <button onClick={()=> setIsDarkMode(prev => !prev)} className='p-2 rounded-full 
           transition-all duration-300 active:scale-90 group'> 
        <Image src={isDarkMode ? assets.sun_icon: assets.moon_icon} alt="" 
        className='w-6 group-hover:rotate-[15deg] transition-transform' />
             </button>

          <a href="#contact" 
            className='hidden lg:flex items-center gap-1.5 px-10 py-2.5 
           border border-gray-400  rounded-full ml-4 font-Ovo transition-all duration-300 
            hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(0,0,0,0.1)] 
            active:scale-95 group dark:dark:border-gray-600 
            dark:hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)] 
            active:scale-95 group dark:border-gray-600'> Contact 
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" 
              className='w-3 transition-transform duration-300 group-hover:translate-x-1 
              group-hover:-translate-y-1' />
          </a>

          <button className='block md:hidden ml-3 hover:scale-110 active:scale-95 transition-transform' 
          onClick={openMenu}>
          <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6'/>
          </button>
        </div>
 
        <ul ref={sideMenuRef} className ='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 
        bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>  
          
        <div className='absolute top-6 right-6' onClick={closeMenu}> 
          <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className='w-5 cursor-pointer '/>
        </div>

          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#skills">Skills</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#experience">Experience</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#certification">Certification</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar

