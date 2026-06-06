"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pin } from "lucide-react";
import GlowCard from "./GlowCard";
import ProjectTechStack from "./ProjectTechStack";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isImageHovered, setIsImageHovered] = useState(false);

  const router = useRouter();

  const handleViewDetail = () => {
    router.push(`/project/${project.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group cursor-pointer h-full"
      onClick={handleViewDetail}
    >
      <div className="relative border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-500 h-full flex flex-col bg-white/[0.02]">
        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <motion.div
              animate={{ boxShadow: ["0 0 12px rgba(0,212,255,0.3)", "0 0 24px rgba(0,212,255,0.5)", "0 0 12px rgba(0,212,255,0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-cyan-400 text-black px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1"
            >
              <Pin className="w-4 h-4" />
              Featured
            </motion.div>
          </div>
        )}

        <div
          className="relative aspect-video overflow-hidden bg-zinc-900 shrink-0"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <motion.div
            className="w-full h-full"
            animate={{
              scale: isImageHovered ? 1.08 : 1,
              filter: isImageHovered ? "brightness(0.35)" : "brightness(0.9)",
            }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>

          <AnimatePresence>
            {isImageHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex items-center gap-2 text-white font-semibold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20">
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

        <GlowCard certi={true}>
          <h3 className="text-xl font-semibold text-white line-clamp-2 min-h-12">
            {project.title}
          </h3>

          <p className="text-md text-zinc-500 mb-3 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap mt-auto">
            {project.techStack.map((tech, i) => (
              <ProjectTechStack key={tech.name} tech={tech} index={i} />
            ))}
          </div>
        </GlowCard>
      </div>
    </motion.div>
  );
}
