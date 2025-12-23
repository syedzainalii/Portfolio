'use client'
import { workData, assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { use } from 'react'
import { motion } from 'motion/react'

export default function ProjectDetail({ params }) {
    // Unwrapping params for Next.js 15
    const resolvedParams = use(params);
    const { slug } = resolvedParams;

    // Find the project matching the URL slug
    const project = workData.find(p => 
        p.title.toLowerCase().replace(/\s+/g, '-') === slug
    );

    // If project doesn't exist, show 404
    if (!project) {
        notFound();
    }

    return (
        <div className='min-h-screen w-full px-[12%] py-20'>
            {/* --- Navigation --- */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link 
                    href="/#work" 
                    className='inline-flex items-center gap-2 mb-10 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all font-Ovo'
                >
                    <Image src={assets.right_arrow} alt='' className='w-4 rotate-180 dark:invert' />
                    Back to Portfolio
                </Link>
            </motion.div>

            {/* --- Project Hero --- */}
            <div className='max-w-5xl mx-auto'>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 mb-10 shadow-lg'
                >
                    <Image 
                        src={project.bgImage} 
                        alt={project.title} 
                        fill 
                        className='object-cover'
                        priority
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-12'>
                        <div>
                            <h1 className='text-4xl md:text-6xl font-Ovo text-white font-medium mb-4'>
                                {project.title}
                            </h1>
                            <p className='text-white/80 text-lg md:text-xl max-w-2xl'>
                                {project.description}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* --- Project Details Content --- */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                    
                    {/* Left Column: Detailed Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className='md:col-span-2 space-y-10'
                    >
                        <section>
                            <h2 className='text-2xl font-Ovo font-semibold mb-4 dark:text-white'>Project Overview</h2>
                            <p className='text-gray-700 dark:text-white/70 leading-relaxed text-lg'>
                                This project involved comprehensive work in {project.title}. 
                                My approach focused on technical accuracy, efficiency, and meeting specific industry standards. 
                                Whether it's complex 3D geometry or high-performance frontend code, the goal was to deliver a 
                                solution that is both functional and scalable.
                            </p>
                        </section>

                        <section className='bg-lightHover dark:bg-darkHover p-8 rounded-2xl border border-gray-100 dark:border-white/5'>
                            <h3 className='text-xl font-Ovo font-semibold mb-4 dark:text-white'>Key Challenges & Solutions</h3>
                            <ul className='space-y-4'>
                                <li className='flex gap-3 text-gray-700 dark:text-white/70'>
                                    <span className='text-black dark:text-white font-bold'>•</span>
                                    Integrated complex requirements into a streamlined workflow.
                                </li>
                                <li className='flex gap-3 text-gray-700 dark:text-white/70'>
                                    <span className='text-black dark:text-white font-bold'>•</span>
                                    Optimized performance for better user experience/simulation results.
                                </li>
                                <li className='flex gap-3 text-gray-700 dark:text-white/70'>
                                    <span className='text-black dark:text-white font-bold'>•</span>
                                    Ensured cross-platform compatibility and rigorous testing.
                                </li>
                            </ul>
                        </section>
                    </motion.div>

                    {/* Right Column: Meta Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className='space-y-8'
                    >
                        <div className='p-6 border border-gray-200 dark:border-white/10 rounded-2xl'>
                            <h4 className='font-bold mb-4 dark:text-white uppercase text-xs tracking-widest'>Core Competencies</h4>
                            <div className='flex flex-wrap gap-2'>
                                <span className='px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm dark:text-white/80 border border-gray-200 dark:border-white/5'>Innovation</span>
                                <span className='px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm dark:text-white/80 border border-gray-200 dark:border-white/5'>Precision</span>
                                <span className='px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm dark:text-white/80 border border-gray-200 dark:border-white/5'>Strategy</span>
                            </div>
                        </div>

                        <div className='p-8 bg-black dark:bg-white rounded-2xl text-center shadow-xl'>
                            <h4 className='text-white dark:text-black font-Ovo text-xl mb-4'>Like what you see?</h4>
                            <p className='text-white/70 dark:text-black/60 text-sm mb-6'>
                                I'm available for similar projects and technical consultations.
                            </p>
                            <Link 
                                href="/contact"
                                className='block w-full py-3 rounded-full bg-white dark:bg-black text-black dark:text-white font-medium hover:scale-105 transition-transform'
                            >
                                Hire Me
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}