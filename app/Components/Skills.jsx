"use client";

import { useEffect, useState, useCallback } from "react";
import {motion} from "motion/react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🎨",
    bgColor: "border border-gray-400 border dark:border-gray-600  rounded-2xl p-10 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] break-words hyphens-auto dark:bg-darkHover dark:hover:shadow-[4px_4px_0_#fff] dark:hover:bg-darkHover/50",
    skills: [
      { name: "React/Next.js", level: 60, color: "#61DAFB" },
      { name: "TypeScript", level: 0, color: "#3178C6" },
      { name: "Angular", level: 0, color: "#DD0031" },
      { name: "HTML/CSS", level: 40, color: "#E34F26" },
      { name: "Tailwind CSS", level: 40, color: "#38B2AC" },
      { name: "Material UI", level: 0, color: "#0081CB" },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    bgColor: "border border-gray-400 border dark:border-gray-600  rounded-2xl p-10 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] break-words hyphens-auto dark:bg-darkHover dark:hover:shadow-[4px_4px_0_#fff] dark:hover:bg-darkHover/50",
    skills: [
      { name: "Node.js", level: 70, color: "#339933" },
      { name: "Numpy", level: 85, color: "#cfd304ff" },
      { name: "NestJS", level: 80, color: "#E0234E" },
      { name: "Panda", level: 80, color: "#3776AB" },
      { name: "Matlab", level: 90, color: "#FF6C37" },
      { name: "GraphQL", level: 75, color: "#E535AB" },
    ],
  },
  {
    title: "CAD/FEA",
    icon: "☁️",
    bgColor: "border border-gray-400 border dark:border-gray-600  rounded-2xl p-10 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] break-words hyphens-auto dark:bg-darkHover dark:hover:shadow-[4px_4px_0_#fff] dark:hover:bg-darkHover/50",
    skills: [
      { name: "Solidworks", level: 80, color: "#336791" },
      { name: "Catia", level: 90, color: "#47A248" },
      { name: "Ansys", level: 50, color: "#DC382D" },
      { name: "Abaqus", level: 70, color: "#FF9900" },
      { name: "Simulink", level: 10, color: "#0078D4" },
      { name: "Solidworks Simulation", level: 50, color: "#2496ED" },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    bgColor: "border border-gray-400 border dark:border-gray-600  rounded-2xl p-10 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] break-words hyphens-auto dark:bg-darkHover dark:hover:shadow-[4px_4px_0_#fff] dark:hover:bg-darkHover/50",
    skills: [
      { name: "Git/GitHub", level: 90, color: "#F05032" },
      { name: "Jira", level: 60, color: "#2088FF" },
      { name: "Wrike", level: 65, color: "#C21325" },
      { name: "Agile/Scrum", level: 85, color: "#0052CC" },
      { name: "Linux", level: 60, color: "#FCC624" },
      { name: "Microsoft Office", level: 90, color: "#000000" },
    ],
  },
  {
    title: "Data Visualization",
    icon: "📱",
    bgColor: "border border-gray-400 border dark:border-gray-600  rounded-2xl p-10 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] break-words hyphens-auto dark:bg-darkHover dark:hover:shadow-[4px_4px_0_#fff] dark:hover:bg-darkHover/50",
    skills: [
      { name: "Matlplotlib", level: 70, color: "#61DAFB" },
      { name: "Tableau", level: 90, color: "#326CE5" },
      { name: "Power Bi", level: 60, color: "#D24939" },
      { name: "abs", level: 0, color: "#7B42BC" },
      { name: "aby", level: 0, color: "#009639" },
      { name: "abc", level: 0, color: "#FF6B6B" },
    ],
  },
];

export default function Skills() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null); // 'next' or 'prev'

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollPrev = useCallback(() => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedIndex((prev) => (prev === 0 ? skillCategories.length - 1 : prev - 1));
      setDirection(null);
    }, 600);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const scrollNext = useCallback(() => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedIndex((prev) => (prev === skillCategories.length - 1 ? 0 : prev + 1));
      setDirection(null);
    }, 600);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      scrollNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [scrollNext]);

  if (!isMounted) return null;

  const currentCategory = skillCategories[selectedIndex];

  const getPrevIndex = (current, offset) => {
    return (current - offset + skillCategories.length) % skillCategories.length;
  };

  const getNextIndex = (current, offset) => {
    return (current + offset) % skillCategories.length;
  };

  const prev2Index = getPrevIndex(selectedIndex, 2);
  const prev1Index = getPrevIndex(selectedIndex, 1);
  const next1Index = getNextIndex(selectedIndex, 1);
  const next2Index = getNextIndex(selectedIndex, 2);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes progressBar {
          from {
            width: 0;
          }
        }

        @keyframes rotateOutLeft {
          0% {
            transform: scale(1) rotateY(0deg);
            opacity: 1;
          }
          100% {
            transform: scale(0.7) rotateY(-90deg);
            opacity: 0;
          }
        }

        @keyframes rotateOutRight {
          0% {
            transform: scale(1) rotateY(0deg);
            opacity: 1;
          }
          100% {
            transform: scale(0.7) rotateY(90deg);
            opacity: 0;
          }
        }

        @keyframes rotateInFromLeft {
          0% {
            transform: scale(0.7) rotateY(90deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotateY(0deg);
            opacity: 1;
          }
        }

        @keyframes rotateInFromRight {
          0% {
            transform: scale(0.7) rotateY(-90deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotateY(0deg);
            opacity: 1;
          }
        }

        .skills-animate-card {
          animation: fadeInScale 0.5s ease-out;
        }

        .skills-rotate-out-left {
          animation: rotateOutLeft 0.6s ease-in-out forwards;
        }

        .skills-rotate-out-right {
          animation: rotateOutRight 0.6s ease-in-out forwards;
        }

        .skills-rotate-in-left {
          animation: rotateInFromLeft 0.6s ease-in-out forwards;
        }

        .skills-rotate-in-right {
          animation: rotateInFromRight 0.6s ease-in-out forwards;
        }

        .skills-animate-skill {
          animation: slideInRight 0.3s ease-out;
          animation-fill-mode: both;
        }

        .skills-animate-progress {
          animation: progressBar 1s ease-out;
          animation-fill-mode: both;
        }

        .skills-card-container {
          perspective: 2000px;
        }

        .skills-side-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .skills-side-card:hover {
          transform: translateY(-4px) scale(1.02) !important;
          opacity: 0.65 !important;
          z-index: 5 !important;
        }

        .skills-center-card:hover {
          transform: translateY(-4px) scale(1.02) !important;
        }

        .skills-center-card {
          transform-style: preserve-3d;
        }
      `}} />
      
      <div

      
      id='skills' className='w-full px-[12%] py10 scroll-mt-20'>
        
        <h4 

        
        className='text-center mb-1 text-xl font-Ovo'>My Expertise</h4>
        
        <h2  
        className='text-center text-5xl font-Ovo'>My Technical Skills</h2>
        
        <p 

        
        className='text-center max-w-2xl mx-auto mt-5 mb-2 font-Ovo'>
          Explore my comprehensive skill set across various technologies and frameworks </p>
      
      <div className="relative h-[650px] flex flex-col items-center overflow-visible py-8">
        <div className="w-full max-w-7xl relative skills-card-container">
          <div className="relative flex items-center justify-center gap-4 py-4">
            

<motion.div 
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 0.2, x: 0}}
              transition={{duration: 0.6, delay: 0.8}}
              onClick={() => {
                if (!isTransitioning) {
                  setDirection('prev');
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setSelectedIndex(prev2Index);
                    setDirection(null);
                  }, 600);
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              className={`skills-side-card cursor-pointer z-0 transition-all duration-500`}
              style={{
                transform: 'scale(0.7) translateX(-20px)',
                opacity: 0.2
              }}
            >
              <div
                className={`bg-gradient-to-br ${skillCategories[prev2Index].bgColor} p-6 rounded-2xl
                  backdrop-blur-sm border border-foreground/10 shadow-lg w-[320px]`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{skillCategories[prev2Index].icon}</span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {skillCategories[prev2Index].title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {skillCategories[prev2Index].skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-foreground text-sm">{skill.name}</span>
                        <span className="text-foreground/80 text-sm">{skill.level}%</span>
                      </div>
                      <motion.div 
                    initial={{y:-20, opacity: 0 }}
                    whileInView={{y:0, opacity:1 }}
                    transition={{duration:0.5, delay:0.3}}
                      className="h-1.5 bg-foreground/20 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Near Left Card (-1) */}
            <div 
              onClick={() => {
                if (!isTransitioning) {
                  setDirection('prev');
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setSelectedIndex(prev1Index);
                    setDirection(null);
                  }, 600);
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              className={`skills-side-card cursor-pointer z-[2] transition-all duration-500`}
              style={{
                transform: 'scale(0.85)',
                opacity: 0.5
              }}
            >
              <div
                className={`bg-gradient-to-br ${skillCategories[prev1Index].bgColor} p-7 rounded-2xl
                  backdrop-blur-sm border border-foreground/10 shadow-xl w-[360px]`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{skillCategories[prev1Index].icon}</span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {skillCategories[prev1Index].title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {skillCategories[prev1Index].skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-foreground/80">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-foreground/20 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Current Card (Center - Active) */}
            <div className="relative z-10">
              <div
                key={selectedIndex}
                className={`bg-gradient-to-br ${currentCategory.bgColor} p-8 rounded-2xl
                  backdrop-blur-sm border border-foreground/10 shadow-2xl 
                  w-[400px] transition-all duration-300 skills-center-card
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
                  ${direction === 'next' ? 'skills-rotate-out-left' : ''}
                  ${direction === 'prev' ? 'skills-rotate-out-right' : ''}
                  ${!direction ? 'skills-rotate-in-left' : ''}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{currentCategory.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {currentCategory.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {currentCategory.skills.map((skill, skillIndex) => (
                    <div
                      key={`${selectedIndex}-${skill.name}`}
                      className="skills-animate-skill"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-foreground/80">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-foreground/20 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full skills-animate-progress"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                            animationDelay: `${0.2 + skillIndex * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Near Right Card (+1) */}
            <div 
              onClick={() => {
                if (!isTransitioning) {
                  setDirection('next');
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setSelectedIndex(next1Index);
                    setDirection(null);
                  }, 600);
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              className={`skills-side-card cursor-pointer z-[2] transition-all duration-500`}
              style={{
                transform: 'scale(0.85)',
                opacity: 0.5
              }}
            >
              <div
                className={`bg-gradient-to-br ${skillCategories[next1Index].bgColor} p-7 rounded-2xl
                  backdrop-blur-sm border border-foreground/10 shadow-xl w-[360px]`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{skillCategories[next1Index].icon}</span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {skillCategories[next1Index].title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {skillCategories[next1Index].skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-foreground/80">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-foreground/20 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Far Right Card (+2) */}
            <div 
              onClick={() => {
                if (!isTransitioning) {
                  setDirection('next');
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setSelectedIndex(next2Index);
                    setDirection(null);
                  }, 600);
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              className={`skills-side-card cursor-pointer z-0 transition-all duration-500`}
              style={{
                transform: 'scale(0.7) translateX(20px)',
                opacity: 0.2
              }}
            >
              <div
                className={`bg-gradient-to-br ${skillCategories[next2Index].bgColor} p-6 rounded-2xl
                  backdrop-blur-sm border border-foreground/10 shadow-lg w-[320px]`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{skillCategories[next2Index].icon}</span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {skillCategories[next2Index].title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {skillCategories[next2Index].skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-foreground text-sm">{skill.name}</span>
                        <span className="text-foreground/80 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-foreground/20 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {skillCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  const newDirection = index > selectedIndex ? 'next' : 'prev';
                  setDirection(newDirection);
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setSelectedIndex(index);
                    setDirection(null);
                  }, 600);
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-foreground w-8"
                  : "bg-foreground/30 hover:bg-foreground/50 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={scrollPrev}
            disabled={isTransitioning}
            className="p-2 rounded-full bg-foreground/20 hover:bg-foreground/30 transition-all
              disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            disabled={isTransitioning}
            className="p-2 rounded-full bg-foreground/20 hover:bg-foreground/30 transition-all
              disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      </div>
    </>
  );
}