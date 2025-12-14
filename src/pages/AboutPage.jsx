import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-4xl font-bold text-white mb-2">About</h2>
        <p className="text-gray-400">A brief introduction to who I am.</p>
        <div className="border-b border-gray-800 mt-3 mb-6"></div>
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
        <p>
          Hello there! Thank you for visiting my personal website. I'm Satria
          Bahari, a student majoring in Information Systems at the University of
          Jambi. I'm a Fullstack Developer with a passion for building impactful
          software products. My stack includes modern frontend technologies like
          Next.js, TypeScript, and Tailwind CSS, as well as backend development
          using Golang. For mobile applications, I develop native Android apps
          using Kotlin.
        </p>

        <p>
          I enjoy creating solutions that are both user-friendly and performant.
          Whether it's building intuitive interfaces or architecting backend
          services, I aim to bring efficiency and clarity into every layer of
          the application. I'm a fast learner who thrives in dynamic
          environments, and I enjoy solving complex problems collaboratively.
        </p>

        <p>
          I believe that great communication and team synergy are key to success
          in software development. My experience has shaped my technical and
          analytical skills, as well as my leadership qualities. I'm always
          excited to work in teams, learn from others, and contribute to
          impactful projects.
        </p>

        <p className="text-gray-400">Best regards,</p>

        <div className="text-emerald-400 text-5xl italic font-bold">satria</div>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-3 mb-3">
          <Briefcase className="w-7 h-7 text-white" />
          <h3 className="text-3xl font-bold text-white">Career</h3>
        </div>
        <p className="text-gray-400">My professional journey.</p>
        <div className="border-b border-gray-800 mt-4"></div>
      </div>
    </motion.div>
  );
}
