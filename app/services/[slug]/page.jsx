'use client'
import { serviceData, assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { use } from 'react' // Import 'use' to handle params

export default function ServicePage({ params }) {
  // In Next.js 15+, params must be unwrapped using 'use' or 'await'
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  // Find the service based on the 'link' property in assets.js
  const service = serviceData.find((s) => s.link === slug)

  if (!service) {
    notFound()
  }

  return (
    <div className='min-h-screen w-full px-[12%] py-20'>
      {/* Back Button */}
      <Link 
        href="/#services"
        className='inline-flex items-center gap-2 mb-8 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'
      >
        <Image 
          src={assets.right_arrow} 
          alt='back' 
          className='w-4 rotate-180'
        />
        Back to Services
      </Link>

      {/* Service Header */}
      <div className='max-w-4xl mx-auto'>
        <div className='flex items-center gap-6 mb-8'>
          <Image 
            src={service.icon} 
            alt={service.title} 
            className='w-20 h-20'
          />
          <div>
            <h1 className='text-4xl md:text-5xl font-bold font-Ovo dark:text-white mb-2'>
              {service.title}
            </h1>
            <p className='text-lg text-gray-600 dark:text-gray-300'>
              {service.description}
            </p>
          </div>
        </div>

        {/* Service Details */}
        <div className='max-w-none'>
          <div className='bg-gray-50 dark:bg-darkHover rounded-2xl p-8 mb-8 border border-gray-200 dark:border-white/10'>
            <h2 className='text-2xl font-semibold mb-4 dark:text-white font-Ovo'>
              Overview
            </h2>
            <p className='text-gray-700 dark:text-white/80 leading-relaxed'>
              {service.detailedDescription || service.description}
            </p>
          </div>

          {/* What's Included */}
          <div className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 dark:text-white font-Ovo'>
              What's Included
            </h2>
            <ul className='space-y-3'>
              {(service.includes || [
                'Professional consultation',
                'Detailed documentation',
                'Revisions and support'
              ]).map((item, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <span className='text-green-500 mt-1'>✓</span>
                  <span className='text-gray-700 dark:text-white/80'>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process */}
          <div className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 dark:text-white font-Ovo'>
              My Process
            </h2>
            <div className='grid gap-4'>
              {(service.process || [
                { title: 'Initial Consultation', description: 'We discuss your requirements and project scope' },
                { title: 'Development', description: 'I work on your project with regular updates' },
                { title: 'Delivery & Support', description: 'Final delivery with ongoing support' }
              ]).map((step, index) => (
                <div key={index} className='flex gap-4'>
                  <div className='flex-shrink-0 w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold text-sm'>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1 dark:text-white'>{step.title}</h3>
                    <p className='text-gray-600 dark:text-gray-400 text-sm'>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className='bg-gradient-to-r from-gray-900 to-gray-700 dark:from-darkHover dark:to-black rounded-2xl p-8 text-center text-white border border-white/10'>
            <h2 className='text-2xl font-semibold mb-3 font-Ovo'>
              Interested in this service?
            </h2>
            <p className='mb-6 text-gray-200'>
              Let's discuss how I can help with your project
            </p>
            <Link 
              href="/#contact"
              className='inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors'
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}