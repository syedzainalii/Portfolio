import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useState, useEffect, useRef } from 'react';

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    function openMenu() {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
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

    // Shared styles for the navigation links to keep code clean
    const navLinks = [
        { href: "#top", label: "Home" },
        { href: "#about", label: "About me" },
        { href: "#skills", label: "Skills" },
        { href: "#services", label: "Services" },
        { href: "#work", label: "My Work" },
        { href: "#experience", label: "Experience" },
        { href: "#certification", label: "Certification" },
        { href: "#contact", label: "Contact me" },
    ];

    return (
        <>
            {/* Background color blob - Hidden on dark mode */}
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt="" className='w-full' priority />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll 
                ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" 
                : ""}`}>
                
                {/* Logo Section */}
                <a href="#top">
                    <Image 
                        src={isDarkMode ? assets.logo_dark : assets.logo} 
                        alt='Logo'
                        className='w-24 md:w-28 cursor-pointer mr-4 lg:mr-14' 
                    />
                </a>

                {/* Desktop & Laptop Menu (Changed lg:flex to md:flex) */}
                <ul className={`hidden md:flex items-center gap-3 lg:gap-6 xl:gap-10 rounded-full px-6 lg:px-12 py-3 transition-all duration-500 ${isScroll 
                    ? "" 
                    : "bg-white shadow-sm bg-opacity-50 border border-gray-400 dark:border-gray-600 dark:bg-transparent"}`}>
                    
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a className='font-Ovo text-sm lg:text-base relative group whitespace-nowrap' href={link.href}>
                                {link.label}
                                <span className='absolute bottom-0 left-0 w-0 h-[1px] bg-gray-700 dark:bg-white transition-all duration-300 group-hover:w-full'></span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Side Buttons */}
                <div className='flex items-center gap-2 lg:gap-4'> 

                    {/* Dark Mode Toggle */}
                    <button onClick={() => setIsDarkMode(prev => !prev)} className='p-2 rounded-full transition-all duration-300 active:scale-90 group'> 
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6 group-hover:rotate-[15deg] transition-transform' />
                    </button>

                    {/* Desktop Contact Button (Hidden on small/medium, visible on large) */}
                    <a href="#contact" 
                        className='hidden lg:flex items-center gap-1.5 px-8 py-2.5 border border-gray-400 rounded-full font-Ovo transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95 group dark:border-gray-600'> 
                        Contact 
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    </a>

                    {/* Hamburger Menu (Visible on mobile/tablet) */}
                    <button className='block md:hidden ml-2 hover:scale-110 active:scale-95 transition-transform' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6'/>
                    </button>
                </div>

                {/* Mobile Side Menu */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 dark:bg-darkHover dark:text-white'> 
                    <div className='absolute top-6 right-6' onClick={closeMenu}> 
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className='w-5 cursor-pointer'/>
                    </div>

                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a className='font-Ovo' onClick={closeMenu} href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

            </nav>
        </>
    )
}

export default Navbar