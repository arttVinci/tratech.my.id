"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { LayoutGrid, Award, Wrench } from "lucide-react";
import GlowCard from "./GlowCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function FeaturedSection() {
  return (
    <section className="mt-7 pb-3">
      <div className="mb-6 md:mb-8 px-1 md:px-0">
        <h3 className="text-xl md:text-2xl font-bold font-sans text-white flex items-center gap-2 tracking-tight">
          <LayoutGrid className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
          Featured
        </h3>
        <p className="text-zinc-500 mt-1 font-body text-md">
          Highlighted sections of my work & profile
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto md:auto-rows-[180px] gap-4 md:gap-5"
      >
        <motion.div variants={cardVariants} className="md:col-span-7 md:row-span-2">
          <Link
            href="/projects"
            className="block group relative h-full"
          >
            <GlowCard className="h-full overflow-hidden">
              <div className="flex flex-col md:flex-row h-full justify-between">
                <div className="p-5 md:p-6 flex flex-col justify-start w-full md:w-[45%] shrink-0 relative z-10">
                  <div className="bg-white/[0.05] border border-white/[0.08] w-fit p-2.5 md:p-3 rounded-xl mb-4">
                    <LayoutGrid className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                  </div>

                  <h4 className="text-lg md:text-xl font-semibold font-sans text-white tracking-tight mb-2">
                    Projects Showcase
                  </h4>
                  <p className="font-body text-zinc-500 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                    A selection of real apps built to solve real problems.
                  </p>
                </div>

                <div className="relative flex-1 flex flex-col gap-3 md:gap-4 p-5 pt-0 md:p-1 md:pl-2 overflow-hidden">
                  <div className="w-full aspect-video rounded-lg border border-white/[0.08] overflow-hidden shrink-0 shadow-lg shadow-black/40">
                    <Image
                      src="/images/projects/dekatku/project1.png"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="Project Dekatku"
                      width={500}
                      height={281}
                    />
                  </div>

                  <div className="w-full aspect-video rounded-lg border border-white/[0.08] overflow-hidden shrink-0 shadow-lg shadow-black/40">
                    <Image
                      src="/images/projects/golang-api-ecommerce/6.png"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="Project Ecommerce"
                      width={500}
                      height={281}
                    />
                  </div>
                </div>
              </div>
            </GlowCard>
          </Link>
        </motion.div>

        <motion.div variants={cardVariants} className="md:col-span-5 h-full min-h-40">
          <Link
            href="/achievements"
            className="block group h-full"
          >
            <GlowCard className="h-full p-5 md:p-6 flex flex-col justify-center">
              <div className="bg-white/[0.05] border border-white/[0.08] w-fit p-2.5 md:p-3 rounded-xl mb-4">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>

              <div>
                <h4 className="text-lg font-bold font-sans text-white">
                  Achievements
                </h4>
                <p className="text-sm font-body text-zinc-500 mt-1">
                  Milestones & recognitions.
                </p>
              </div>
            </GlowCard>
          </Link>
        </motion.div>

        <motion.div variants={cardVariants} className="md:col-span-5 h-full min-h-40">
          <Link
            href="/contact"
            className="block group h-full"
          >
            <GlowCard className="h-full p-5 md:p-6 flex flex-col justify-center">
              <div className="bg-white/[0.05] border border-white/[0.08] w-fit p-2.5 md:p-3 rounded-xl mb-4">
                <Wrench className="w-6 h-6 text-cyan-400" />
              </div>

              <div>
                <h4 className="text-lg font-bold font-sans text-white">
                  Services
                </h4>
                <p className="text-sm font-body text-zinc-500 mt-1">
                  Fullstack development & system design.
                </p>
              </div>
            </GlowCard>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
