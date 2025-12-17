import React, { useState } from "react";
import { ChevronDown, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlowCard from "./GlowCard";

const experiences = [
  {
    id: 1,
    logo: "🏢",
    title: "Backend Golang Developer",
    company: "Pt. Affan Technology Indonesia (Parto.id)",
    location: "Jambi, Indonesia 🇮🇩",
    period: "Jul 2025 - Sep 2025",
    duration: "2 Months",
    type: "Internship",
    mode: "Onsite",
    responsibilities: [
      "Developed RESTful APIs using Golang and Gin framework",
      "Implemented authentication and authorization systems",
      "Optimized database queries for better performance",
      "Collaborated with frontend team for seamless integration",
    ],
  },
  {
    id: 2,
    logo: "🌐",
    title: "Frontend Web Developer",
    company: "Pt. Eltran Indonesia",
    location: "Bandung, Indonesia 🇮🇩",
    period: "May 2025 - Nov 2025",
    duration: "6 Months",
    type: "Internship",
    mode: "Remote",
    responsibilities: [
      "Built responsive web applications using React and TypeScript",
      "Implemented modern UI/UX designs with Tailwind CSS",
      "Integrated RESTful APIs and managed state with Redux",
      "Conducted code reviews and maintained documentation",
    ],
  },
  {
    id: 3,
    logo: "🎓",
    title: "Head of Technology in the Research and Technology Division",
    company:
      "Himpunan Mahasiswa Sistem Informasi Universitas Jambi (HIMASI UNJA)",
    location: "Jambi, Indonesia 🇮🇩",
    period: "Dec 2024 - Present",
    duration: "1 year",
    type: "Part-time",
    mode: "Onsite",
    responsibilities: [
      "Led technology initiatives and research projects",
      "Mentored junior members in software development",
      "Organized technical workshops and training sessions",
      "Managed division resources and project timelines",
    ],
  },
  {
    id: 4,
    logo: "📱",
    title: "Mobile Development Cohort",
    company: "Bangkit Academy led by Google, Tokopedia, Gojek & Traveloka",
    location: "Bandung, Indonesia 🇮🇩",
    period: "Sep 2024 - Dec 2024",
    duration: "3 Months",
    type: "Part-time",
    mode: "Remote",
    responsibilities: [
      "Learned mobile app development with Kotlin and Android Studio",
      "Built and deployed Android applications",
      "Collaborated on capstone project with cross-functional team",
      "Completed certifications in mobile development",
    ],
  },
];

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <GlowCard>
        <div className="flex gap-4">
          <motion.div
            className="flex shrink-0"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl">
              {experience.logo}
            </div>
          </motion.div>

          <div className="flex-1 min-w-0">
            <motion.h3
              className="text-lg font-semibold text-white mb-1"
              whileHover={{ color: "#22d3ee" }}
              transition={{ duration: 0.2 }}
            >
              {experience.title}
            </motion.h3>

            <p className="text-sm text-zinc-300 mb-1">{experience.company}</p>

            <p className="text-xs text-zinc-400 mb-2">{experience.location}</p>

            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 mb-3">
              <span>{experience.period}</span>
              <span>•</span>
              <span>{experience.duration}</span>
              <span>•</span>
              <motion.span
                className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-300 text-xs"
                whileHover={{ backgroundColor: "#3f3f46", scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {experience.type}
              </motion.span>
              <span>•</span>
              <motion.span
                className="px-1.5 py-0.5 bg-zinc-800 rounded text-zinc-300 text-xs"
                whileHover={{ backgroundColor: "#3f3f46", scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {experience.mode}
              </motion.span>
            </div>

            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-zinc-400"
              whileHover={{ color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
              <span className="text-sm">
                {isExpanded ? "Hide responsibilities" : "Show responsibilities"}
              </span>
            </motion.button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <ul className="space-y-2">
                      {experience.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: idx * 0.05,
                          }}
                          className="text-sm text-zinc-300 flex gap-2"
                        >
                          <span className="text-zinc-500 flex shrink-0">•</span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
};

export default function CareerCard() {
  return (
    <section className="mt-7 pb-3">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
          <Briefcase className="w-7 h-7 text-cyan-400" />
          Career
        </h3>
        <p className="text-gray-300 mt-1">My professional journey.</p>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
