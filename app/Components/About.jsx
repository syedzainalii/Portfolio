import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (
    <motion.div 
      id='about' 
      // FIX: Responsive padding. px-6 on mobile, px-10 on tablets, and 12% on large screens.
      className='w-full px-6 sm:px-10 lg:px-[12%] py-10 scroll-mt-20 overflow-x-hidden'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className='text-center mb-1 text-xl font-Ovo'
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className='text-center text-4xl sm:text-5xl font-Ovo'
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        // FIX: flex-col ensures the image sits ABOVE the text on mobile.
        className='flex w-full flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20 my-12 lg:my-20'
      >
        {/* User Image Wrapper */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='w-56 sm:w-80 rounded-3xl shrink-0'
        >
          <Image src={assets.user_image} alt="user" className='w-full rounded-3xl shadow-lg' />
        </motion.div>

        {/* Text Content Area */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className='flex-1'
        >
          <div className='mb-6 font-Ovo text-gray-700 dark:text-white/90 text-base sm:text-lg leading-relaxed text-left'>
            <p className='mb-4'>
              I'm a NED University of Engineering and Technology student pursuing Bachelor of Engineering in Mechanical Engineering, 
              with training in injection molding, machining, and assembly processes. Gained hands-on experience at Sui Southern Gas 
              Company Limited (SSGC) Meter Manufacturing Plant, engaging with quality control, plastic molding, and painting 
              processes that ensure high production standards. 
            </p>
            <p className='mb-4'>
              Certified in Google IT Automation with Python and Project Management, bringing complementary skills in automation 
              and organizational efficiency. Motivated to leverage technical expertise and project management knowledge to 
              contribute to innovative engineering solutions and process improvements.
            </p>
            <p className='mb-4'>
              Recently, I worked in IOT & AI Exhibition as a Group Leader, where I led a team to develop innovative projects 
              showcasing the applications of Internet of Things (IoT) and Artificial Intelligence (AI). This experience enhanced 
              my leadership skills and deepened my understanding of cutting-edge technologies.
            </p>
          </div>


          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
 
            className='grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 w-full'
          > 
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                whileHover={{ y: -5 }}
                className='border border-gray-400 dark:border-gray-600 rounded-2xl p-6 cursor-pointer hover:bg-lightHover hover:shadow-black dark:hover:shadow-white transition-all duration-300 dark:hover:bg-darkHover/50'
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-2'/>
                <h3 className='my-3 font-semibold text-gray-800 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm leading-relaxed dark:text-white/70'>{description}</p> 
              </motion.li>
            ))}
          </motion.ul>

       
          <motion.h4 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className='mt-10 mb-4 text-gray-700 font-Ovo dark:text-white/80'
          >
            Tools I use
          </motion.h4>

          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
         
            className='flex flex-wrap items-center gap-3 sm:gap-5'
          >
            {toolsData.map((tool, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-lightHover hover:shadow-black transition-all duration-300 dark:hover:shadow-white dark:hover:bg-darkHover/50'
              >
                <Image src={tool} alt="Tool" className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About