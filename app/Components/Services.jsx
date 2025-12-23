"use client"
import { serviceData, assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        id='services'
        className='w-full px-[12%] py-10 scroll-mt-20'
    >
        <motion.h4 
            initial={{y:-20, opacity: 0 }}
            whileInView={{y:0, opacity:1 }}
            transition={{duration:0.3, delay:0.2}}
            className='text-center mb-1 text-xl font-Ovo'
        >
            What I offer
        </motion.h4>
        
        <motion.h2 
            initial={{y:-20, opacity: 0 }}
            whileInView={{y:0, opacity:1 }}
            transition={{duration:0.3, delay:0.3}}
            className='text-center sm:text-5xl font-Ovo'
        >
            My Services
        </motion.h2>

        <motion.p 
            initial={{opacity: 0 }}
            whileInView={{opacity:1 }}
            transition={{duration:0.3, delay:0.4}}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        >
            I am currently focusing on Mechanical Engineering services including CAD modeling, FEA analysis, and programming.
        </motion.p>

        <motion.div
            initial={{opacity: 0 }}
            whileInView={{ opacity:1 }}
            transition={{duration:0.3, delay:0.5}}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'
        >
            {serviceData.map(({icon, title, description, link}, index) => (
                <Link href={`/services/${link}`} key={index} className="flex">
                    <motion.div 
                        whileHover="hover"
                        className='border border-gray-400 dark:border-gray-600 rounded-2xl p-8 cursor-pointer 
                                   hover:bg-lightHover duration-500 hover:shadow-[4px_4px_0_#000] 
                                   dark:bg-darkHover dark:hover:shadow-white flex flex-col h-full'
                    >
                        {/* Icon Animation */}
                        <motion.div
                            variants={{
                                hover: { scale: 1.1 }
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image src={icon} alt={title} className='w-10' />
                        </motion.div>
                        
                        <h3 className='text-lg my-4 font-semibold dark:text-white'>
                            {title}
                        </h3>
                        
                        <p className='text-sm text-gray-700 leading-5 dark:text-white/80 mb-6'>
                            {description}
                        </p>

                        {/* Enhanced Read More Button */}
                        <div className='flex items-center gap-2 text-sm mt-auto font-medium text-gray-700 dark:text-white'> 
                            <span className='relative'>
                                Read more
                                {/* Underline that expands on hover */}
                                <motion.span 
                                    variants={{
                                        hover: { width: '100%' }
                                    }}
                                    initial={{ width: 0 }}
                                    className='absolute left-0 -bottom-1 h-[1px] bg-black dark:bg-white'
                                    transition={{ duration: 0.3 }}
                                />
                            </span>
                            
                            {/* Arrow that slides on hover */}
                            <motion.div
                                variants={{
                                    hover: { x: 5 }
                                }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Image alt='arrow' src={assets.right_arrow} className='w-4'/>
                            </motion.div>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services