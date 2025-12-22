"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Internship",
    company: "Sui Southren Gas Company LTD",
    period: "March - April (2024)",
    location: "Karachi, Pakistan",
    logo: "🏭",
    description:
      "One-month internship at Sui Southern Gas Company (SSGC), gaining hands-on experience in gas meter manufacturing, quality control, assembly, calibration, and industrial SOPs",
    achievements: [
      "Gained hands-on exposure to gas meter manufacturing and assembly",
      "Assisted in quality control inspections and testing procedures",
      "Learned calibration techniques as per EN 1359 standards",
      "Understood industrial SOPs, safety protocols, and plant workflows",
      "Improved teamwork and problem-solving in an industrial environment",
    ],
    technologies: [
      "CNC",
      "Injection molding",
      "Meter Calibration",
      "Quality Testing",
      "Surface Treatment",
    ],
  },

 
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-center mb-1 text-xl font-Ovo"
      >
        My Journey
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-Ovo mb-5"
      >
        Work Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        A showcase of my professional growth and the amazing teams I've
        collaborated with
      </motion.p>

      <div className="max-w-6xl mx-auto">
        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {experiences.map((exp, index) => (
            <button
              key={exp.id}
              onClick={() => setActiveIndex(index)}
              className={`
                px-6 py-3 rounded-full font-semibold text-sm
                transition-all duration-300 transform
                ${
                  activeIndex === index
                    ? "bg-white text-black  scale-105 dark:bg-darkHover border border-gray-400 dark:border-gray-600 dark:text-white shadow-lg"
                    : "bg-white dark:bg-darkHover text-gray-700 dark:text-white border border-gray-300 border dark:border-darkTheme hover:scale-105 hover:border-gray-400"
                }
              `}
            >
              <span className="mr-2">{exp.logo}</span>
              {exp.company}
            </button>
          ))}
        </motion.div>

        {/* Experience Content with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Company Header Card */}
            <div className="bg-white dark:bg-darkHover rounded-2xl p-6 shadow-2xl mb-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{experiences[activeIndex].logo}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      {experiences[activeIndex].company}
                    </h3>
                    <p className="text-black dark:text-white text-lg">{experiences[activeIndex].role}</p>
                  </div>
                </div>
                <div className="text-right text-black dark:text-white">
                  <div className="flex items-center gap-2 justify-end">
                    📍 {experiences[activeIndex].location}
                  </div>
                  <div className="flex items-center gap-2 justify-end mt-1">
                    📅 {experiences[activeIndex].period}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Card */}
            <div
              className="bg-white dark:bg-darkHover border border-gray-300 dark:border-gray-700 
              rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Description */}
              <p className="text-black dark:text-white mb-8 leading-relaxed text-lg">
                {experiences[activeIndex].description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-bold text-black dark:text-white mb-4 flex items-center gap-2">
                    🎯 Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {experiences[activeIndex].achievements.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-lg
                        bg-white dark:bg-darkHover 
                        border border-gray-400 dark:border-gray-600   
                        hover:scale-102 transition-transform duration-300"
                      >
                        <span className="text-blue-500 text-xl mt-0.5">✓</span>
                        <span className="text-black dark:text-white text-sm leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    🛠️ Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {experiences[activeIndex].technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="px-5 py-3  border border-gray-400 dark:border-gray-600
                        text-black rounded-full text-sm font-semibold dark:text-white
                        hover:scale-110 transition-all duration-200 shadow-md
                        hover:shadow-lg cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => setActiveIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1))}
                className="flex items-center gap-2 px-6 py-3 rounded-full
                 border border-gray-400 dark:border-gray-600
                text-gray-700 dark:text-gray-300 font-semibold
                hover:scale-105 transition-all duration-300 hover:border-gray-400"
              >
                <span>←</span> Previous
              </button>

              <div className="flex gap-2">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-darkHover w-8 dark:bg-white"
                        : "bg-gray-300 dark:bg-darkHover hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1))}
                className="flex items-center gap-2 px-6 py-3 rounded-full
                 border border-gray-400 dark:border-gray-600
                text-gray-700 dark:text-gray-300 font-semibold
                hover:scale-105 transition-all duration-300 hover:border-gray-400"
              >
                Next <span>→</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Download Button - Now properly spaced */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-center mt-12"
>
  <a
    href="/report.pdf"
    download
    className='relative group w-max flex items-center justify-center gap-2 
               /* Light Mode Styles */
               text-gray-700 border-[0.5px]  
               /* Dark Mode Styles */
               dark:text-white border border-gray-400 dark:border-gray-600
               rounded-full px-10 py-3 mx-auto my-20
               overflow-hidden transition-all duration-500 
               hover:-translate-y-1 active:scale-95'
  >
    {/* Text and icon container */}
    <span className='relative z-10 flex items-center gap-2 
                     /* Hover text color change */
                     group-hover:text-white dark:group-hover:text-black 
                     duration-500 transition-colors'>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Download Full Report
    </span>

    {/* Background fill effect */}
    <span className='absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-in-out -z-0
                     /* Light: Black fill | Dark: White fill */
                     bg-black dark:bg-white'>
    </span>
  </a>
</motion.div>
      </div>
    </div>
  );
}