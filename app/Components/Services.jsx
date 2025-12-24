"use client"
import { serviceData, assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div 
        id='services'
        className='w-full px-[12%] py-10 scroll-mt-20'
    >
        <h4 className='text-center mb-1 text-xl font-Ovo'>
            What I offer
        </h4>
        
        <h2 className='text-center sm:text-5xl font-Ovo'>
            My Services
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I am currently focusing on Mechanical Engineering services including CAD modeling, FEA analysis, and programming.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index) => (
                <Link href={`/services/${link}`} key={index} className="flex group">
                    <div 
                        className='border border-gray-400 dark:border-gray-600 rounded-2xl p-8 cursor-pointer 
                                   hover:bg-lightHover duration-500 hover:shadow-[4px_4px_0_#000] 
                                   dark:bg-darkHover dark:hover:shadow-white flex flex-col h-full w-full'
                    >
                        {/* Icon Container - Scales on group hover */}
                        <div className='transition-transform duration-300 group-hover:scale-110'>
                            <Image src={icon} alt={title} className='w-10' />
                        </div>
                        
                        <h3 className='text-lg my-4 font-semibold dark:text-white'>
                            {title}
                        </h3>
                        
                        <p className='text-sm text-gray-700 leading-5 dark:text-white/80 mb-6'>
                            {description}
                        </p>

                        {/* Enhanced Read More Button Area */}
                        <div className='flex items-center gap-2 text-sm mt-auto font-medium text-gray-700 dark:text-white'> 
                            <span className='relative'>
                                Read more
                                {/* Underline that expands on group hover */}
                                <span className='absolute left-0 -bottom-1 h-[1px] bg-black dark:bg-white w-0 group-hover:w-full transition-all duration-300' />
                            </span>
                            
                            {/* Arrow that slides on group hover */}
                            <div className='transition-transform duration-300 group-hover:translate-x-1.5'>
                                <Image alt='arrow' src={assets.right_arrow} className='w-4'/>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Services