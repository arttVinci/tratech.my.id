"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlowCard from "./GlowCard";
import Image from "next/image";
import type { Certificate } from "@/types";

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
  onClick: () => void;
}

export default function CertificateCard({ certificate, index, onClick }: CertificateCardProps) {
  const [isImageHovered, setIsImageHovered] = useState(false);

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
      onClick={onClick}
    >
      <div className="relative border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-500 h-full flex flex-col bg-white/[0.02]">
        <div
          className="relative aspect-4/3 overflow-hidden bg-zinc-900 shrink-0"
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
              src={certificate.image}
              alt={certificate.title}
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
                  <span>Show Credentials</span>
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
            {certificate.title}
          </h3>

          <p className="text-sm text-zinc-400 mb-3">
            {certificate.organization}
          </p>

          <div className="flex flex-col gap-1 mt-auto">
            <span className="text-xs text-zinc-600">
              {certificate.issuedLabel}
            </span>
            <span className="text-sm text-zinc-400">
              {certificate.issuedDate}
            </span>
          </div>
        </GlowCard>

        {/* Hover border glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/15 group-hover:to-violet-500/15 rounded-2xl blur transition duration-500 -z-10" />
      </div>
    </motion.div>
  );
}
