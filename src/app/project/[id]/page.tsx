"use client";

import { motion } from "framer-motion";
import { MoveLeft, ExternalLink, FolderOpen, Camera, Zap, Lightbulb, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projectsData } from "@/data/ProjectsData";
import ProjectTechStack from "@/components/ProjectTechStack";
import { SiGithub } from "@icons-pack/react-simple-icons";
import GlowCard from "@/components/GlowCard";
import ImageGallery from "@/components/ImageGallery";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function DetailProjectPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projectsData.find((data) => data.id === parseInt(id));

  if (!project) {
    console.log("data tidak ditemukan!");
    return <div className="text-white p-10">Project not found</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 font-body pb-10"
    >
      <motion.div variants={childVariants}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 group mb-5 md:mb-7 border border-transparent hover:border-white/[0.08]"
        >
          <MoveLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back
        </Link>

        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3 font-mono tracking-tight leading-snug">
          <FolderOpen className="w-7 h-7 md:w-9 md:h-9 text-cyan-400 shrink-0" />
          {project.title}
        </h2>

        <p className="text-zinc-500 mt-3 font-sans text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        <div className="animated-gradient-line mt-6 mb-6" />

        <div className="text-white flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="text-zinc-500 font-medium text-sm md:text-base">
              Tech Stack :
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <ProjectTechStack key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-4 md:pt-0 border-t border-white/[0.06] md:border-t-0">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.githubUrl}
              className="flex items-center gap-2 px-3 py-2 md:px-0 md:py-0 bg-white/5 md:bg-transparent rounded-lg md:rounded-none text-cyan-400 hover:text-cyan-300 transition-colors text-sm md:text-base"
            >
              <SiGithub className="w-5 h-5 text-zinc-400" />
              <span>Source Code</span>
            </a>

            <span className="text-zinc-700 hidden md:block">|</span>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.liveUrl}
              className="flex items-center gap-2 px-3 py-2 md:px-0 md:py-0 bg-white/5 md:bg-transparent rounded-lg md:rounded-none text-cyan-400 hover:text-cyan-300 transition-colors text-sm md:text-base"
            >
              <ExternalLink className="w-5 h-5 text-zinc-400" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={childVariants}
        className="space-y-4 mt-8 md:mt-10 mb-8 md:mb-10"
      >
        <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
          <Camera className="w-5 h-5 text-cyan-400" />
          Interface Showcase
        </h3>
        <ImageGallery images={project.gallery} />
      </motion.div>

      <motion.div variants={childVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlowCard className="h-full">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-4">
            <Zap className="w-5 h-5 text-orange-400" />
            Challenges
          </h3>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            {project.challenges}
          </p>
        </GlowCard>

        <GlowCard className="h-full">
          <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-4">
            <Lightbulb className="w-5 h-5 text-green-400" />
            Solution
          </h3>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            {project.solution}
          </p>
        </GlowCard>
      </motion.div>

      <motion.div variants={childVariants}>
        <GlowCard certi={true} className={"rounded-2xl md:rounded-3xl mt-6"}>
          <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="relative">Key Features</span>
          </h3>

          <div className="space-y-6 md:space-y-8">
            {project.features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + featureIndex * 0.1 }}
                className="group space-y-3 md:space-y-4"
              >
                <h4 className="text-base md:text-lg font-semibold text-white flex items-center gap-3">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                  </span>
                  {feature.title}
                </h4>

                <ul className="space-y-3 pl-4 md:pl-6">
                  {feature.key.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.4 + featureIndex * 0.1 + itemIndex * 0.05,
                      }}
                      className="relative flex items-start gap-3 md:gap-4 text-zinc-400 hover:text-white transition-all duration-300 group/item text-sm md:text-base"
                    >
                      <ChevronRight className="w-4 h-4 text-cyan-400 mt-1 group-hover/item:translate-x-1 transition-transform shrink-0" />

                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </GlowCard>
      </motion.div>
    </motion.div>
  );
}
