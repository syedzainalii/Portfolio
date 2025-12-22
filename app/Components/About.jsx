import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import {motion} from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
    >


        <motion.h4 className ='text-center mb-1 text-xl font-Ovo'
        initial={{y:-20, opacity: 0 }}
        whileInView={{y:0, opacity:1 }}
        transition={{duration:0.3, delay:0.3}}
        >Introduction</motion.h4>
 

        <motion.h2
        initial={{y:-20, opacity: 0 }}
        whileInView={{y:0, opacity:1 }}
        transition={{duration:0.3, delay:0.4}}
        
        className ='text-center sm:text-5xl font-Ovo'>About Me</motion.h2>

        <motion.div
        initial={{opacity: 0 }}
        whileInView={{opacity:1 }}
        transition={{duration:0.3}}
        
        className='flex w-full flex-col lg:flex-row items-center lg:items-start gap-20 my-20'>
            <motion.div 
        initial={{scale:0.9, opacity: 0 }}
        whileInView={{scale:1, opacity:1 }}
        transition={{duration:0.3}}
            
            className='w-64 sm:w-80 items-center rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt="user" className='w-full rounded-3xl' />
            </motion.div>
            <motion.div 
        initial={{opacity: 0 }}
        whileInView={{opacity:1 }}
        transition={{duration:0.3, delay:0.5}}
            
            className='flex-1'>

                <p className='mb-4 font-Ovo'>
                I'm a NED University of Engineering and Technology student 
                pursuing Bachelor of Engineering in Mechanical Engineering, 
                with training in injection molding, machining, and assembly processes. 
                Gained hands on experience at Sui Southern Gas Company Limited (SSGC)
                Meter Manufacturing Plant, engaging with quality control, plastic molding, 
                and painting processes that ensure high production standards. 
                </p>
                <p className='mb-4 font-Ovo'>
                Certified in Google IT Automation with Python and Project Management, 
                bringing complementary skills in automation and organizational efficiency. 
                Motivated to leverage technical expertise and project management knowledge to 
                contribute to innovative engineering solutions and process improvements.
                </p>

               <p className='mb-4 font-Ovo'>
                 Reacently, I worked in IOT & AI Exhibition as a Group Leader, where I led a team to develop
                 innovative projects showcasing the applications of Internet of Things (IoT) and 
                 Artificial Intelligence (AI). This experience enhanced my leadership skills and deepened 
                 my understanding of cutting edge technologies. Also, I am passionate about web development 
                 and design, constantly honing my skills in HTML, CSS, JavaScript, and various design tools to
                 create engaging and user friendly digital experiences.</p>
                
                <motion.ul
        initial={{opacity: 0 }}
        whileInView={{opacity:1 }}
        transition={{duration:0.3, delay:0.6}}
                
                className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 w-full '> 
                    {infoList.map(({icon, iconDark, title, description}, index) => (
                    <motion.li
        
        whileInView={{scale:1.05 }}
       
                    
                    className='border border-gray-400 border dark:border-gray-600  rounded-2xl p-10 cursor-pointer 
                    hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] 
                    break-words hyphens-auto dark:white dark:hover:shadow-[4px_4px_0_#fff] dark:hover:bg-darkHover/50'

                    key={index}><Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-2'/>
                    <h3 className='my-3 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-gray-700 text-sm whitespace-pre-line dark:text-white/80'>{description}</p> 
                    </motion.li>))}
                </motion.ul>

                        <motion.h4 
                        initial={{y:20, opacity: 0 }}
                        whileInView={{y:0, opacity:1 }}
                        transition={{delay:1, duration:0.8}}
                                        
                        className='mt-6 mb-2 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>

                        <motion.ul 
                                initial={{opacity: 0 }}
                                whileInView={{opacity:1 }}
                                transition={{duration:0.8, delay:1}}
                        
                        className='flex items-center gap-3 sm:gap-5'>
                            {toolsData.map((tool, index) => (
                                <motion.li 
                                     whileInView={{scale:1.1}}
                                
                                className='flex items-center justify-center w-12 sm:w-14 
                                aspect-square border border-gray-400 border dark:border-gray-600 rounded-lg cursor-pointer 
                                hover:-translate-y-1 duration-500 hover:bg-lightHover hover:shadow-[4px_4px_0_#000] 
                                dark:hover:shadow-[4px_4px_0_#fff] dark:hover:bg-darkHover/50'
                                 key={index}>
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