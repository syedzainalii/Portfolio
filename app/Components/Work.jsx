import { workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import {motion} from "motion/react"

const Work = () => {
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
    
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'> 
    <motion.h4 
        initial={{y:-20, opacity: 0 }}
        whileInView={{y:0, opacity:1 }}
        transition={{duration:0.3, delay:0.3}}
    
    className ='text-center mb-1 text-xl font-Ovo'>My Portfolio</motion.h4>
        <motion.h2
        initial={{y:-20, opacity: 0 }}
        whileInView={{y:0, opacity:1 }}
        transition={{duration:0.3, delay:0.4}}
        
        className ='text-center sm:text-5xl font-Ovo'>My lastest work</motion.h2>


<motion.p 
        initial={{opacity: 0 }}
        whileInView={{opacity:1 }}
        transition={{duration:0.3, delay:0.5}}

className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'> Here are a few projects I've worked on recently. Want to see more?</motion.p>

<motion.div 
        initial={{opacity: 0 }}
        whileInView={{opacity:1 }}
        transition={{duration:0.5, delay:0.6}}

className='grid grid-cols-auto gap-6 sm:grid-cols-2 md:grid-cols-3 
lg:grid-cols-4 xl:grid-cols-5 my-10 dark:text-black'>
  {workData.map((project, index) => (
    <motion.div 
        whileInView={{scale:1.05 }}
        transition={{duration:0.3}}
    
    key={index} className='aspect-square bg-no repeat bg-cover bg-center 
    rounded-lg relative cursor-pointer group' 
    style={{backgroundImage: `url(${project.bgImage})`}}>
      <div className='bg-white w-10/12 rounded-md absolute bottom-5 
      left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between
      duration-500 group-hover:bottom-7'>
        <div>
    <h2 className='font-semi-bold'>{project.title}</h2>
    <p className='text-sm text-gray-700'>{project.description}</p>
  </div>
    <div className='border rounded-full border border-gray-400 dark:border-gray-600 w-9 aspect-square
    flex items-center justify-center shadow-[2px_2px_0_[#1A1A1B]] 
    group-hover:bg-[#44CF6C] transition'>
  <Image src={assets.send_icon} alt='send icon' className='w-5'/>
        </div>
      </div>

    </motion.div>

  ))}
</motion.div>

<motion.a 
        initial={{ opacity: 0 }}
        whileInView={{opacity:1 }}
        transition={{duration:0.3, delay:0.7}}

  href='' 
  className='relative group w-max flex items-center justify-center gap-2 
             /* Light Mode Styles */
             text-gray-700 border border-gray-400 
             /* Dark Mode Styles */
             dark:text-white border dark:border-gray-600 
             rounded-full px-10 py-3 mx-auto my-20
             overflow-hidden transition-all duration-500 
             hover:-translate-y-1 active:scale-95'
>
  <span className='relative z-10 flex items-center gap-2 
                   /* Hover text color change */
                   group-hover:text-white dark:group-hover:text-black 
                   duration-500 transition-colors'>
    Show more 
    <Image 
      src={assets.right_arrow_bold} 
      alt='right arrow' 
      className='w-4 group-hover:invert dark:invert dark:group-hover:invert-0 duration-500'
    />
  </span>

  <span className='absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out -z-0
                   /* Light: Black fill | Dark: White fill */
                   bg-black dark:bg-white'>
  </span>
</motion.a>
</motion.div>
  )
}

export default Work