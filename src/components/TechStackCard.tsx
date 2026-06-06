"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { TechStackItem } from "@/types";

interface TechStackCardProps {
  tech: TechStackItem;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function TechStackCard({ tech, index }: TechStackCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setDimensions({ w: rect.width, h: rect.height });
    };

    const handleEnter = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const Icon = tech.Icon;

  // 3D tilt calculation
  const tiltX = isHovered && dimensions.h > 0 ? ((mousePos.y - dimensions.h / 2) / dimensions.h) * -8 : 0;
  const tiltY = isHovered && dimensions.w > 0 ? ((mousePos.x - dimensions.w / 2) / dimensions.w) * 8 : 0;

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      whileHover={{ scale: 1.08 }}
      className="relative flex items-center bg-white/[0.03] rounded-xl hover:bg-white/[0.06] transition-all cursor-pointer group overflow-hidden w-fit border border-white/[0.06] hover:border-white/[0.12]"
      style={{
        transform: `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Mouse follow glow */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          left: mousePos.x - 80,
          top: mousePos.y - 80,
          width: 160,
          height: 160,
          background: `radial-gradient(circle, ${tech.color}33 0%, ${tech.color}15 40%, transparent 70%)`,
          filter: "blur(30px)",
        }}
      />

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-xl transition-all duration-300 z-10 pointer-events-none"
        style={{
          boxShadow: isHovered ? `0 0 20px ${tech.color}20, inset 0 0 20px ${tech.color}08` : "none",
        }}
      />

      <div className="flex shrink-0 p-2 w-15 h-15 items-center justify-center relative z-10">
        <Icon
          size={35}
          color={tech.color}
          style={{
            filter: isHovered ? `drop-shadow(0 0 8px ${tech.color}60)` : "none",
            transition: "filter 0.3s ease",
          }}
        />
      </div>

      <div
        className="relative z-10 overflow-hidden transition-all duration-300 ease-out"
        style={{
          width: isHovered ? "75px" : "0px",
          opacity: isHovered ? 1 : 0,
        }}
      >
        <span className="text-sm font-medium text-zinc-500 group-hover:text-white transition-colors whitespace-nowrap block pr-3">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
}
