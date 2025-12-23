"use client";

import { workData, assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-20 scroll-mt-20"
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-2 text-xl font-Ovo"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-center text-4xl sm:text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-14 font-Ovo text-gray-600"
      >
        Here are a few projects I’ve worked on recently. Want to see more?
      </motion.p>

      {/* Projects Grid (first 4 only) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {workData.slice(0, 4).map((project, index) => {
          const slug = project.title
            .toLowerCase()
            .replace(/\s+/g, "-");

          return (
            <Link href={`/work/${slug}`} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="aspect-square bg-cover bg-center rounded-xl relative cursor-pointer shadow-md group"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 rounded-xl" />

                {/* Card Info */}
                <div className="bg-white w-[85%] rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-4 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-md">
                  <div className="overflow-hidden">
                    <h3 className="font-semibold truncate text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-600 truncate">
                      {project.description}
                    </p>
                  </div>

                  <div className="border rounded-full border-gray-400 w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-[#44CF6C] group-hover:border-[#44CF6C] transition-all duration-300">
                    <Image
                      src={assets.send_icon}
                      alt=""
                      className="w-4 group-hover:brightness-0"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>

      {/* Show More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="flex justify-center"
      >
        <Link
          href="/work"
          className="relative group flex items-center gap-2 border border-gray-400 rounded-full px-10 py-3 mt-16 overflow-hidden transition-all duration-500 hover:-translate-y-1"
        >
          <span className="relative z-10 flex items-center gap-2 text-gray-700 group-hover:text-white transition-colors duration-500">
            Show more
            <Image
              src={assets.right_arrow_bold}
              alt=""
              className="w-4 group-hover:invert"
            />
          </span>

          <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 bg-black" />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Work;
