"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdVerified } from "react-icons/md";
import Image from "next/image";

const taglines = [
  "Full Stack Dev",
  "Tech Enthusiast",
  "Clean Code",
  "System Design",
];

export default function ProfileHeader() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const fullText = taglines[currentTagline];
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      timeout = setInterval(() => {
        if (charIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(timeout);
          setTimeout(() => setIsTyping(false), 2000);
        }
      }, 60);
    } else {
      timeout = setInterval(() => {
        if (charIndex < fullText.length) {
          setDisplayText(fullText.slice(0, fullText.length - charIndex));
          charIndex++;
        } else {
          clearInterval(timeout);
          setCurrentTagline((prev) => (prev + 1) % taglines.length);
          setIsTyping(true);
        }
      }, 40);
    }

    return () => clearInterval(timeout);
  }, [currentTagline, isTyping]);

  return (
    <div className="pt-12 pb-4 px-5 text-center border-b border-white/[0.06] font-sans">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        className="relative w-24 h-24 mb-4 mx-auto group"
      >
        {/* Animated gradient ring */}
        <div className="absolute inset-0 rounded-full avatar-ring" />
        <div className="absolute inset-[2.5px] rounded-full overflow-hidden bg-blue-bg">
          <Image
            src="/images/profile3.jpg"
            alt="Putra Rizky"
            width={96}
            height={96}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          />
        </div>

        {/* Online status */}
        <div className="absolute bottom-1 right-1 z-10">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-blue-bg"></span>
          </span>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-500 pointer-events-none" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-1.5 mb-1">
          <h1 className="text-xl font-bold text-white tracking-tight">Putra Rizky</h1>
          <MdVerified className="w-4.5 h-4.5 text-blue-400" />
        </div>
        <p className="text-zinc-500 text-xs mb-4">@traa_rzkyy</p>

        <div className="h-5 flex items-center justify-center">
          <span className="text-zinc-400 text-sm font-mono tracking-wide">
            {displayText}
            <span className="inline-block w-0.5 h-4 bg-cyan-400 ml-0.5 animate-pulse align-middle" />
          </span>
        </div>
      </motion.div>
    </div>
  );
}
