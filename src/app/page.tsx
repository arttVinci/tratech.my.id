"use client";

import { motion } from "framer-motion";
import { CodeXml, Sparkles } from "lucide-react";
import TechStackCard from "@/components/TechStackCard";
import FeaturedSection from "@/components/FeaturedSection";
import {
  SiBootstrap,
  SiComposer,
  SiCss,
  SiDocker,
  SiFilament,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
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
import type { TechStackItem } from "@/types";

const techStack: TechStackItem[] = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss, color: "#1572B6" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Golang", Icon: SiGo, color: "#00ADD8" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "Livewire", Icon: SiLivewire, color: "#4E56A6" },
  { name: "Filament", Icon: SiFilament, color: "#F59E0B" },
  { name: "Composer", Icon: SiComposer, color: "#885630" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "AI", Icon: SiDependabot, color: "#412991" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "GitHub", Icon: SiGithub, color: "#f7f7f7" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
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

export default function HomePage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 font-body"
    >
      {/* Hero Section */}
      <motion.div variants={childVariants}>
        <h2 className="text-3xl font-bold text-white flex items-center gap-3 font-mono tracking-tight">
          <span>Hi, I&apos;m </span>
          <span className="gradient-text">Putra Rizky</span>
        </h2>
        <motion.p
          variants={childVariants}
          className="text-zinc-500 mt-2 font-sans text-md"
        >
          I live in Indonesia, Jawa Barat, Bekasi Utara.
        </motion.p>
        <div className="animated-gradient-line mt-4 mb-6" />
      </motion.div>

      {/* Bio Section */}
      <motion.div
        variants={containerVariants}
        className="space-y-5 text-zinc-400 leading-relaxed font-normal text-base"
      >
        <motion.p variants={childVariants}>
          <span className="font-mono text-cyan-400">
            I&apos;m Putra Rizky Nugraha
          </span>
          , an Information Systems student at Universitas Terbuka and a
          dedicated Fullstack Developer specializing in{" "}
          <span className="font-mono text-cyan-400">PHP (Laravel)</span>,{" "}
          <span className="font-mono text-cyan-400">Golang</span>, and{" "}
          <span className="font-mono text-cyan-400">React</span>. Passionate
          about{" "}
          <span className="font-mono text-cyan-400">
            Clean Code and scalable architecture
          </span>
          , I utilize modern tools like{" "}
          <span className="font-mono text-cyan-400">Docker</span> and{" "}
          <span className="font-mono text-cyan-400">MySQL</span> to build
          robust, user-centric digital solutions. As an active member of the{" "}
          <span className="font-mono text-cyan-400">
            Google Developer Group
          </span>
          , I am a fast learner eager to contribute my technical expertise and
          professional workflow to impactful software engineering projects.
        </motion.p>
      </motion.div>

      {/* Tech Stack */}
      <motion.div variants={childVariants} className="mt-16">
        <div className="animated-gradient-line mt-3 mb-6" />
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2.5 font-mono tracking-tight">
            <CodeXml className="w-7 h-7 text-cyan-400" />
            Tech Stack
          </h3>
          <p className="text-zinc-500 mt-1.5 font-sans text-md">
            This is the technology i used to build an application.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap gap-2.5 pb-1"
        >
          {techStack.map((tech, index) => (
            <TechStackCard key={tech.name} tech={tech} index={index} />
          ))}
        </motion.div>
      </motion.div>

      {/* Featured */}
      <motion.div variants={childVariants} className="mt-16">
        <div className="animated-gradient-line mt-3" />
        <FeaturedSection />
      </motion.div>
    </motion.div>
  );
}
