"use client";

import { motion } from "framer-motion";
import ProjectCards from "@/components/ProjectCards";
import { FolderOpen } from "lucide-react";

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 font-body"
    >
      <div>
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 font-mono tracking-tight">
          <FolderOpen className="w-7 h-7 text-cyan-400" />
          Projects
        </h2>
        <p className="text-zinc-500 mt-1 font-sans text-md">
          The following are the certificates and badges that I have obtained
          throughout my journey, which are academic or other categories.
        </p>
        <div className="animated-gradient-line mt-4 mb-6" />
        <ProjectCards />
      </div>
    </motion.div>
  );
}
