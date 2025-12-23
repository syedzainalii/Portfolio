import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import {motion} from "motion/react"

const Services = () => {
  return (
    <motion.div 
            initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
    
    
    id='services'className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{y:-20, opacity: 0 }}
        whileInView={{y:0, opacity:1 }}
        transition={{duration:0.3, delay:0.2}}
    
        
        className ='text-center mb-1 text-xl font-Ovo'>What I offer</motion.h4>
        <motion.h2 
        initial={{y:-20, opacity: 0 }}
        whileInView={{y:0, opacity:1 }}
        transition={{duration:0.3, delay:0.3}}
        
        className ='text-center sm:text-5xl font-Ovo'>My Services</motion.h2>


<motion.p 
        initial={{opacity: 0 }}
        whileInView={{opacity:1 }}
        transition={{duration:0.3, delay:0.4}}

className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'> I am currently focusing on Mechanical Engineering services including CAD modeling, FEA analysis, and programming. More services will be added soon.

</motion.p>

<motion.div
        initial={{opacity: 0 }}
        whileInView={{ opacity:1 }}
        transition={{duration:0.3, delay:0.5}}

className='grid grid-cols-auto gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 my-10'>
    {serviceData.map(({icon, title, description, link}, index) => (
        <motion.div 
        whileHover={{scale:1.05}}
        
key={index}
    className='border border-gray-400 dark:border-gray-600 rounded-2xl p-6 cursor-pointer 
               hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] 
               break-words hyphens-auto dark:bg-darkHover dark:hover:bg-darkHover dark:hover:shadow-white
               flex flex-col h-full' 
>
    <Image src={icon} alt='' className='w-14' />
    
    <h3 className='text-lg my-2 font-semibold dark:text-white'>
        {title}
    </h3>
    
    <p className='text-sm text-gray-700 leading-5 dark:text-white/80 mb-4'>
        {description}
    </p>


    <a href={link} className='flex items-center gap-2 text-sm mt-auto pt-1'> 
        Read more 
        <Image alt='' src={assets.right_arrow} className='w-4'/>
    </a>
        </motion.div>
    ))}
    </motion.div>
    </motion.div>
  )
}

export default Services