"use client";

import { workData, assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const WorkPage = () => {
  return (
    <div className="w-full px-[10%] py-20 min-h-screen">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-4xl sm:text-5xl font-Ovo mb-4"
      >
        All Projects
      </motion.h1>

      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-16">
        A complete collection of my work, including CAD, FEA, frontend, and data visualization projects.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-black gap-8">
        {workData.map((project, index) => {
          const slug = project.title.toLowerCase().replace(/\s+/g, "-");

          return (
            <Link href={`/work/${slug}`} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="aspect-square bg-cover bg-center rounded-xl relative cursor-pointer shadow-md"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                <div className="absolute inset-0 bg-black/40 rounded-xl" />

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[85%] dark:text-black bg-white rounded-md p-4 flex justify-between items-center">
                  <div className="overflow-hidden">
                    <h2 className="font-semibold truncate">{project.title}</h2>
                    <p className="text-xs text-gray-600 truncate">
                      {project.description}
                    </p>
                  </div>

                  <Image
                    src={assets.send_icon}
                    alt=""
                    className="w-4"
                  />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WorkPage;
