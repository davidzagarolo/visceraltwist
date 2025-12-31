// components/About.tsx
"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }, },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60, },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease:  "easeOut", }, },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60, },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease:  "easeOut", }, },
};

export { fadeInUp, fadeInLeft, fadeInRight }

export default function About() {
  return (
    <div id="about" className="w-full bg-gray-800 text-white">
      
      <section className="w-full py-24 px-6 md:px-20 bg-gray-800">
        <motion.div
          className="max-w-2xl mx-auto flex items-center md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-3xl text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Introduction</h2>
            <p className="text-lg md:text-xl text-gray-200">
              Hi! I&apos;m Dave, a Frontend and Fullstack Developer based in New York. 
              I specialize in creating web experiences that are not only visually appealing but also highly functional and performant. 
              I enjoy taking ideas from concept to reality, building applications that solve real problems and delight users along the way.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="w-full py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-16">
        <motion.div className="md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
          <Image src="/images/web-development.png" alt="Skills" width={710} height={558} className="rounded-xl" priority />
        </motion.div>
        <motion.div className="md:w-1/2 flex justify-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
          <div className="flex flex-col justify-center text-center md:text-left space-y-6 max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            <p className="text-lg md:text-xl text-gray-200">
            My expertise spans both frontend and backend development. 
            On the frontend, I work with React, Next.js, Tailwind CSS, and modern animation libraries to create smooth, interactive experiences. 
            On the backend, I use Node.js, Express, and various databases to build robust, scalable APIs. 
            I&apos;m passionate about clean, maintainable code and integrating best practices in every project I work on.
            </p>
          </div>
        </motion.div>
        </div>
      </section>

      <section className="w-full py-24 px-6 md:px-20 bg-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-16">
        <motion.div className="md:w-1/2 flex justify-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
          <div className="flex flex-col justify-center text-center md:text-left space-y-6 max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold">Frontend Development</h2>
            <p className="text-lg md:text-xl text-gray-200">
            I take pride in crafting dynamic, responsive, and fast-loading applications. 
            My approach focuses on modular code, reusable components, and seamless state management to ensure that every interface feels smooth and intuitive. 
            From interactive dashboards to visually rich websites, I bring frontend projects to life with both performance and polish in mind.
            </p>
          </div>
        </motion.div>
        <motion.div className="md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
          <Image src="/images/personal.png" alt="Frontend Development" width={710} height={558} className="rounded-xl" priority />
        </motion.div>
        </div>
      </section>      

      <section className="w-full py-24 px-6 md:px-20 bg-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-16">
        <motion.div className="md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
          <Image src="/images/phone-components.png" alt="UI/UX Design" width={710} height={558} className="rounded-xl" priority />
        </motion.div>
        <motion.div className="md:w-1/2 flex justify-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
          <div className="flex flex-col justify-center text-center md:text-left space-y-6 max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold">UI/UX Design</h2>
            <p className="text-lg md:text-xl text-gray-200">
            I focus on intuitive and visually appealing designs, crafting interfaces that are accessible, user-friendly, and aesthetically consistent across devices. 
            A great product isn&apos;t just functional; it&apos;s delightful to use. 
            I collaborate closely with designers and stakeholders to create intuitive, accessible, and visually engaging interfaces. 
            I&apos;m always thinking about the user&apos;s journey, using principles of hierarchy, spacing, and animation to guide attention and create enjoyable experiences.
            </p>
          </div>
        </motion.div>
        </div>
      </section>

      <section className="w-full py-24 px-6 md:px-20 bg-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:gap-16">
        <motion.div className="md:w-1/2 flex justify-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
          <div className="flex flex-col justify-center text-center md:text-left space-y-6 max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold">Personal</h2>
            <p className="text-lg md:text-xl text-gray-200">
            When I&apos;m not coding, I enjoy exploring design trends, creating personal projects, and contributing to open-source communities. 
            I&apos;m constantly exploring new technologies, reading about design and UX, and experimenting with animation and interactivity. 
            I believe great products are a mix of strong technical skills, thoughtful design, and a dash of creativity, and I aim to bring all three to every project.
            </p>
          </div>
        </motion.div>
        <motion.div className="md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
          <Image src="/images/social-media.png" alt="Personal" width={710} height={558} className="rounded-xl" priority />
        </motion.div>
        </div>
      </section> 
    </div>
  );
}
