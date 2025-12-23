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
                /* We wrap the whole card in the Link. 
                   Ensure 'link' in assets.js is exactly 'backend-programming'
                */
                <Link href={`/services/${link}`} key={index}>
                    <motion.div 
                        whileHover={{scale:1.05}}
                        className='border border-gray-400 dark:border-gray-600 rounded-2xl p-8 cursor-pointer 
                                   hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] 
                                   dark:bg-darkHover dark:hover:shadow-white flex flex-col h-full'
                    >
                        <Image src={icon} alt={title} className='w-10' />
                        
                        <h3 className='text-lg my-4 font-semibold dark:text-white'>
                            {title}
                        </h3>
                        
                        <p className='text-sm text-gray-700 leading-5 dark:text-white/80 mb-6'>
                            {description}
                        </p>

                        <div className='flex items-center gap-2 text-sm mt-auto font-medium text-gray-700 dark:text-white'> 
                            Read more 
                            <Image alt='arrow' src={assets.right_arrow} className='w-4'/>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services