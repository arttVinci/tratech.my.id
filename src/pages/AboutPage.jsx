import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 font-body"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-2 font-sans">About</h2>
        <p className="text-gray-300">A brief introduction to who I am.</p>
        <div className="border-b border-zinc-700 mt-3 mb-6"></div>
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed font-normal text-md">
        <p>
          Hello there! Thank you for visiting my personal website. I'm Putra
          Rizky Nugraha, a dedicated student at the Faculty of Science and
          Technology, Universitas Terbuka, majoring in Information Systems.
        </p>

        <p>
          Currently, I am navigating an exciting career transition to become a
          professional Software Engineer, with a sharp focus on Web Development.
          My journey into tech is driven by a genuine passion for building
          digital solutions that are not only functional but also scalable and
          user-centric. I am deeply committed to mastering the craft of coding,
          moving beyond just writing syntax to engineering robust software
          architectures.
        </p>

        <p>
          As a Fullstack Developer, I have honed my skills across a modern
          technology stack. On the backend, I leverage the power of PHP
          (Laravel) and Golang to build secure and efficient APIs, managing data
          structures with MySQL. On the frontend, I utilize React and Tailwind
          CSS to create responsive and intuitive user interfaces. My development
          workflow is disciplined and professional, incorporating Docker for
          consistent containerized environments and Postman for comprehensive
          API testing.
        </p>

        <p>
          I am a staunch believer in Clean Code principles. For me, writing code
          is a form of communication; it must be clear, maintainable, and
          efficient to ensure long-term success. Whether I'm architecting a new
          feature or optimizing an existing system, I strive for excellence and
          clarity in every layer of the application.
        </p>

        <p>
          Beyond my personal projects, I am an active member of the Google
          Developers Group (GDG) community. Engaging with this vibrant network
          allows me to stay ahead of the latest industry trends, share
          knowledge, and collaborate with like-minded innovators. I am a fast
          learner who thrives in dynamic environments, and I am eager to bring
          my technical skills and fresh perspective to contribute to impactful
          projects.
        </p>

        <p className="text-gray-400">Best regards, and Thank You.</p>
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
