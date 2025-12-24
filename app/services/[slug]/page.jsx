"use client"
import { serviceData, assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, notFound } from 'next/navigation'
import { motion } from "motion/react"
import { useState, useEffect } from 'react'

const ServiceDetailPage = () => {
  const params = useParams()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const slug = params?.slug
    if (slug) {
      const foundService = serviceData.find(s => s.link === slug)
      setService(foundService)
      setLoading(false)
    }
  }, [params])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-Ovo dark:text-white">Loading...</div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-Ovo mb-4 dark:text-white">Service not found</h2>
          <Link href="/#services" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full px-[12%] py-20">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          href="/#services" 
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white mb-8 group"
        >
          <motion.div
            whileHover={{ x: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image 
              src={assets.right_arrow} 
              alt="back" 
              className="w-4 rotate-180" 
            />
          </motion.div>
          <span className="font-Ovo">Back to Services</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-16"
      >
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          >
            <Image 
              src={service.icon} 
              alt={service.title} 
              className="w-16 sm:w-20" 
            />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-Ovo dark:text-white">
            {service.title}
          </h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 font-Ovo max-w-3xl">
          {service.detailedDescription}
        </p>
      </motion.div>

      {/* What's Included Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-Ovo mb-8 dark:text-white">
          What's Included
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.includes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black dark:bg-white flex items-center justify-center mt-0.5">
                <svg 
                  className="w-4 h-4 text-white dark:text-black" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-Ovo">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-Ovo mb-8 dark:text-white">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="relative"
            >
              <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white font-Ovo">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connecting Line (hidden on last item) */}
              {index < service.process.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-6 h-0.5 bg-gray-300 dark:bg-gray-600" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 sm:p-12 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-Ovo mb-4 dark:text-white">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-Ovo">
          Let's discuss your project and see how I can help bring your ideas to life. 
          Get in touch today for a free consultation.
        </p>
        <Link href="/#contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-Ovo text-lg font-medium hover:shadow-xl transition-shadow"
          >
            Contact Me
          </motion.button>
        </Link>
      </motion.div>

      {/* Other Services Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-20"
      >
        <h2 className="text-3xl sm:text-4xl font-Ovo mb-8 dark:text-white text-center">
          Other Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData
            .filter(s => s.link !== service.link)
            .slice(0, 3)
            .map((otherService, index) => (
              <Link href={`/services/${otherService.link}`} key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="border border-gray-300 dark:border-gray-600 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-shadow h-full"
                >
                  <Image 
                    src={otherService.icon} 
                    alt={otherService.title} 
                    className="w-10 mb-4" 
                  />
                  <h3 className="text-xl font-semibold mb-2 dark:text-white font-Ovo">
                    {otherService.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {otherService.description}
                  </p>
                </motion.div>
              </Link>
            ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ServiceDetailPage