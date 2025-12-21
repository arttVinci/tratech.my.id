import React from "react";
import { motion } from "framer-motion";
import { MoveLeft, ExternalLink, FolderOpen } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../data/ProjectsData";
import ProjectTechStack from "../components/ProjectTechStack";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function DetailProjectPage() {
  const { id } = useParams();

  const project = projectsData.find((data) => data.id === parseInt(id));

  if (!project) {
    console.log("data tidak ditemukan!");
    return;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 font-body"
    >
      <div>
        <Link
          to={"/projects"}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200 group mb-7"
        >
          <MoveLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
          Back
        </Link>

        <h2 className="text-2xl font-bold text-white flex items-center gap-2 font-mono tracking-tight">
          <FolderOpen className="w-7 h-7 text-cyan-400" />
          {project.title}
        </h2>
        <p className="text-gray-400 mt-3 font-sans text-md">
          {project.description}
        </p>
        <div className="border-b border-zinc-700 mt-5 mb-6"></div>

        <div className="text-white flex items-center justify-between">
          {/* Left side - Tech Stack */}
          <div className="flex items-center gap-1">
            <span className="text-gray-400 font-medium">Tech Stack :</span>
            <div className="flex flex-wrapcd mt-auto">
              {project.techStack.map((tech, index) => (
                <ProjectTechStack key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <SiGithub className="w-5 h-5 text-gray-300" />
              <span>Source Code</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-gray-300" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
