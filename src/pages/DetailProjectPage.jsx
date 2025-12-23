import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MoveLeft,
  ExternalLink,
  FolderOpen,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../data/ProjectsData";
import ProjectTechStack from "../components/ProjectTechStack";
import { SiGithub } from "@icons-pack/react-simple-icons";
import GlowCard from "../components/GlowCard";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer overflow-hidden rounded-lg bg-white/5 border border-white/10 aspect-video"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm font-medium">{image.caption}</p>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                <Maximize2 className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-6xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <p className="text-white text-lg font-medium">
                  {selectedImage.caption}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

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
            <div className="flex flex-wrapcd mt-auto ml-2">
              {project.techStack.map((tech, index) => (
                <ProjectTechStack key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.githubUrl}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <SiGithub className="w-5 h-5 text-gray-300" />
              <span>Source Code</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.liveUrl}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-gray-300" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4 mt-10 mb-10"
      >
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400">📸</span>
          Interface Showcase
        </h3>
        <ImageGallery images={project.gallery} />
      </motion.div>

      {/* Challenges & Solution */}
      <div className="grid md:grid-cols-2 gap-6">
        <GlowCard>
          <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-4">
            <span className="text-orange-400">⚡</span>
            Challenges
          </h3>
          <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
        </GlowCard>

        <GlowCard>
          <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-4">
            <span className="text-green-400">💡</span>
            Solution
          </h3>
          <p className="text-gray-300 leading-relaxed">{project.solution}</p>
        </GlowCard>
      </div>

      {/* Features Section */}
      <GlowCard certi={true} className={"rounded-3xl"}>
        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
          <span className="text-cyan-400 animate-pulse">✨</span>
          <span className="relative">Key Features</span>
        </h3>

        <div className="space-y-8">
          {project.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + featureIndex * 0.1 }}
              className="group space-y-4"
            >
              <h4 className="text-lg font-semibold text-white flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                {feature.title}
              </h4>

              <ul className="space-y-3 pl-6">
                {feature.key.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.4 + featureIndex * 0.1 + itemIndex * 0.05,
                    }}
                    className="
                relative flex items-start gap-4 text-gray-300
                cursor-pointer
                hover:text-white
                transition-all duration-300
                group/item
              "
                  >
                    {/* Arrow */}
                    <span
                      className="
                text-cyan-400 mt-1
                group-hover/item:translate-x-1
                transition-transform
              "
                    >
                      ▹
                    </span>

                    {/* Text */}
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </GlowCard>
    </motion.div>
  );
}
