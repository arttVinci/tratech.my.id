"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlowCard from "./GlowCard";
import Image from "next/image";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex gap-4">
      {/* Timeline connector */}
      <div className="hidden md:flex flex-col items-center pt-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.15, type: "spring" }}
          className="w-3 h-3 rounded-full bg-cyan-400/30 border-2 border-cyan-400 z-10 shrink-0 shadow-[0_0_10px_rgba(0,212,255,0.3)]"
        />
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ delay: index * 0.15 + 0.2, duration: 0.8, ease: "easeOut" }}
          className="w-px flex-1 bg-gradient-to-b from-cyan-400/30 to-transparent"
        />
      </div>

      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.7,
          delay: index * 0.12,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <GlowCard>
          <div className="flex gap-3 md:gap-6">
            <motion.div
              className="flex shrink-0"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative group">
                <Image
                  src={experience.logo}
                  alt="Company Logo"
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover p-1 cursor-pointer"
                />
                <div className="absolute inset-0 rounded-lg bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-300" />
              </div>
            </motion.div>

            <div className="flex-1 min-w-0">
              <motion.h3
                className="text-base md:text-lg font-semibold text-white mb-1 cursor-pointer font-mono tracking-tight leading-snug"
                transition={{ duration: 0.2 }}
              >
                {experience.title ?? null}
              </motion.h3>

              <motion.p
                whileHover={{ color: "#22d3ee" }}
                className="text-sm text-zinc-400 mb-1 font-sans"
              >
                <a
                  href={experience.urlCompany}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.company ?? null}
                </a>
              </motion.p>

              <p className="text-xs text-zinc-500 mb-2 font-sans">
                {experience.location ?? null}
              </p>

              <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-xs text-zinc-500 mb-3 font-mono">
                <span>{experience.period}</span>
                {experience.period && experience.duration ? "•" : null}

                <span>{experience.duration}</span>
                {experience.duration ? "•" : null}

                {experience.type ? (
                  <motion.span
                    className="px-2 py-0.5 bg-white/[0.05] border border-white/[0.08] rounded-md text-zinc-400"
                    whileHover={{ scale: 1.05, borderColor: "rgba(0,212,255,0.3)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {experience.type}
                  </motion.span>
                ) : null}

                {experience.type && experience.mode ? "•" : null}

                {experience.mode ? (
                  <motion.span
                    className="px-2 py-0.5 bg-white/[0.05] border border-white/[0.08] rounded-md text-zinc-400"
                    whileHover={{ scale: 1.05, borderColor: "rgba(0,212,255,0.3)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {experience.mode}
                  </motion.span>
                ) : null}
              </div>

              {experience.edu ? null : (
                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-1.5 text-zinc-500 cursor-pointer font-mono text-xs group"
                  whileHover={{ color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                  </motion.div>
                  <span className="text-xs md:text-sm group-hover:underline decoration-cyan-400/50 underline-offset-4">
                    {isExpanded
                      ? "Hide responsibilities"
                      : "Show responsibilities"}
                  </span>
                </motion.button>
              )}

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 pt-3 md:mt-4 md:pt-4 border-t border-white/[0.06]">
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
                            className="text-xs md:text-sm text-zinc-400 flex gap-2 font-sans leading-relaxed"
                          >
                            <span className="text-cyan-500/70 flex shrink-0 mt-0.5">
                              •
                            </span>
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
    </div>
  );
}
