"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  certi?: boolean;
}

export default function GlowCard({
  children,
  className = "",
  delay = 0,
  certi = false,
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setPos({
        x: e.clientX - r.left,
        y: e.clientY - r.top,
      });
      setDimensions({ w: r.width, h: r.height });
    };

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  // Calculate tilt based on mouse position
  const tiltX = hovered && dimensions.h > 0 ? ((pos.y - dimensions.h / 2) / dimensions.h) * -4 : 0;
  const tiltY = hovered && dimensions.w > 0 ? ((pos.x - dimensions.w / 2) / dimensions.w) * 4 : 0;

  const glowElement = (
    <div
      className="pointer-events-none absolute transition-opacity duration-500"
      style={{
        opacity: hovered ? 0.6 : 0,
        left: pos.x - 200,
        top: pos.y - 200,
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(0,212,255,0.25) 0%, rgba(124,58,237,0.15) 40%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
  );

  const borderGlow = (
    <div
      className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-500"
      style={{
        opacity: hovered ? 1 : 0,
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(0,212,255,0.12), transparent 40%)`,
      }}
    />
  );

  const content = (
    <div className="relative z-10 h-full flex flex-col justify-between">
      {children}
    </div>
  );

  const sharedClasses = `relative overflow-hidden
    bg-white/[0.03] backdrop-blur-xl
    border border-white/[0.06]
    hover:border-white/[0.12]
    transition-all duration-500`;

  return certi ? (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay, duration: 0.6 }}
      className={`${sharedClasses} p-4 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transition: "transform 0.3s ease-out",
      }}
    >
      {glowElement}
      {borderGlow}
      {content}
    </motion.div>
  ) : (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className={`${sharedClasses} rounded-2xl p-6 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transition: "transform 0.3s ease-out",
      }}
    >
      {glowElement}
      {borderGlow}
      {content}
    </motion.div>
  );
}
