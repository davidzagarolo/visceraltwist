"use client";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/components/About";

export default function Contact() {
  return (
    <section id="contact" className="w-full min-h-screen px-6 md:px-20 py-32 flex items-center">
      <div className="max-w-7xl mx-auto w-full min-h-112 flex flex-col md:flex-row gap-12">
        
        <motion.div
          className="md:w-1/2"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="h-full rounded-3xl bg-black/50 backdrop-blur-xl border border-white/20 shadow-xl px-10 py-12 flex items-center">
            <div className="space-y-6 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-shadow">
                What I can do for you
              </h2>
              <p className="text-lg md:text-xl text-gray-200 text-shadow">
                I help teams and individuals design and build fast, accessible,
                and visually polished digital experiences.
              </p>
              <p className="text-lg md:text-xl text-gray-200 text-shadow">
                From modern frontend architecture to thoughtful UI/UX design,
                I focus on clarity, performance, and maintainability.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="h-full rounded-3xl bg-black/50 backdrop-blur-xl border border-white/20 shadow-xl px-10 py-12 flex items-center justify-center">
            <div className="space-y-6 max-w-xl text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold text-white text-shadow">
                Let&apos;s work together
              </h3>
              <p className="text-lg text-gray-200 text-shadow">
                Have a project in mind or just want to talk through an idea?
                I&apos;d love to hear from you.
              </p>
              <div className="flex flex-col">
              <a
                href="mailto:davidzagarolo@gmail.com"
                className="mt-4 inline-flex justify-center md:justify-start gap-4 mb-4"
              >
                <span className="px-10 py-4 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition">
                  Get in touch
                </span>
              </a>             
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
