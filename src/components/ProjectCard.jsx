import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import GlowCard from "./GlowCard";
import TechStackCard from "./TechStackCard";

import {
  SiTypescript,
  SiBootstrap,
  SiDocker,
  SiFilament,
  SiGo,
  SiJavascript,
  SiLaravel,
  SiLivewire,
  SiMysql,
  SiPhp,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiDependabot,
} from "@icons-pack/react-simple-icons";

const techStack = [
  { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Golang", Icon: SiGo, color: "#00ADD8" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "Livewire", Icon: SiLivewire, color: "#4E56A6" },
  { name: "Filament", Icon: SiFilament, color: "#F59E0B" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "AI", Icon: SiDependabot, color: "#412991" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Typescript", Icon: SiTypescript, color: "#00ADD8" },
];

const projects = [
  {
    id: 1,
    image: "/images/projects/project1.jpg",
    title: "Satriabahari.my.id",
    description:
      "Personal website & portfolio, built from scratch using Next.js, TypeScript, Tailwind...",
    tags: ["TypeScript", "Next.js", "React", "Tailwind", "Framer", "Node.js"],
    githubUrl: "https://github.com/username/project1",
    liveUrl: "https://satriabahari.my.id",
    featured: true,
  },
  {
    id: 2,
    image: "/images/projects/project2.jpg",
    title: "Berbagi.link",
    description:
      "Berbagi.link is a mini-website platform for online businesses but lacks mobile functi...",
    tags: ["Kotlin"],
    githubUrl: "https://github.com/username/project2",
    liveUrl: "https://berbagi.link",
    featured: true,
  },
  {
    id: 3,
    image: "/images/projects/project3.jpg",
    title: "Presensi Internal System",
    description:
      "Employee attendance management system with real-time tracking and reporting",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/username/project3",
  },
  {
    id: 4,
    image: "/images/projects/project4.jpg",
    title: "Robust Fitness",
    description:
      "Fitness tracking application with workout plans and progress monitoring",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/username/project4",
    liveUrl: "https://robust-fitness.com",
    featured: true,
  },
];

const ProjectCard = ({ project, index, onClick }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="relative border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300 h-full flex flex-col">
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <div className="bg-cyan-400 text-black px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </div>
          </div>
        )}

        <div
          className="relative aspect-video overflow-hidden bg-zinc-800 shrink-0"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isImageHovered ? 1.1 : 1,
              filter: isImageHovered ? "brightness(0.4)" : "brightness(1)",
            }}
            transition={{ duration: 0.3 }}
          />

          <AnimatePresence>
            {isImageHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span>View Details</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <GlowCard certi={true}>
          <h3 className="text-base font-semibold text-white mb-2 line-clamp-2 min-h-12">
            {project.title}
          </h3>

          <p className="text-sm text-zinc-400 mb-3 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {techStack.map((tech, index) => (
              <TechStackCard key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </GlowCard>

        {/* Hover Glow Effect */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300 -z-10" />
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative max-w-4xl w-full bg-zinc-900 rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Featured Badge in Modal */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-cyan-400 text-black px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </div>
          </div>
        )}

        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto"
        />

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white mb-1">
              {project.title}
            </h2>
            <p className="font-['Inter'] text-base text-zinc-300 mb-3">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-400 mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-zinc-800 px-3 py-2 rounded-lg border border-zinc-700"
                >
                  <div
                    className={`${project.colors[idx]} w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {tag.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-sm text-zinc-300 font-medium">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-zinc-400 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                        px-4 py-2
                        rounded-full
                        border border-zinc-600
                        text-sm font-medium
                        text-zinc-200
                        hover:border-cyan-400
                        hover:text-cyan-400
                        transition-colors
                        font-sans
                        "
              >
                View Code
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 3h7v7m0-7L10 14"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 5v14h14"
                  />
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                        px-4 py-2
                        rounded-full
                        bg-cyan-400
                        text-sm font-medium
                        text-black
                        hover:bg-cyan-500
                        transition-colors
                        font-sans
                        "
              >
                Live Demo
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProjectCards() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="mt-4 pb-3">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="text-gray-400 font-sans text-md">
            Total: {projects.length}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
