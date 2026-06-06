"use client";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { AiFillTikTok } from "react-icons/ai";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ContactSection() {
  return (
    <motion.div
      className="font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Gmail Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-xl rounded-2xl p-7 relative overflow-hidden shadow-lg border border-red-500/20"
        >
          <div className="absolute inset-0 shimmer pointer-events-none" />
          <div className="flex justify-between items-start relative z-10">
            <div>
              <h2 className="text-white text-3xl font-bold font-sans tracking-tight mb-2">
                Stay in Touch
              </h2>
              <p className="text-red-100/80 mb-6 font-body text-base">
                Reach out via email for inquiries or collaborations.
              </p>
              <motion.button
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=traarzkyy97@gmail.com",
                    "_blank",
                  )
                }
                className="bg-white/90 text-red-700 px-6 py-3 rounded-xl font-bold font-sans flex items-center gap-2 cursor-pointer shadow-sm hover:bg-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Go to Gmail
                <ExternalLink size={18} />
              </motion.button>
            </div>
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [3, -3, 3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="border-white/30 border-4 p-4 rounded-2xl"
            >
              <TbMail size={48} className="text-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-5"
        >
          {/* Instagram */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-orange-500/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-lg border border-purple-500/20"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="relative z-10 flex-1">
                <h2 className="text-white text-lg md:text-xl font-bold font-sans tracking-tight mb-1 md:mb-2">
                  Follow My Journey
                </h2>
                <p className="text-white/70 mb-4 md:mb-6 font-body text-xs md:text-sm">
                  Follow my creative journey.
                </p>
                <motion.button
                  onClick={() =>
                    window.open("https://www.instagram.com/artt__r", "_blank")
                  }
                  className="bg-white/90 text-pink-600 px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-bold font-sans text-xs md:text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:bg-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Instagram
                  <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </motion.button>
              </div>
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [-6, -3, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 md:w-20 md:h-20 border-white/30 border-2 md:border-4 rounded-xl flex items-center justify-center shrink-0"
              >
                <FaInstagram className="text-white w-7 h-7 md:w-15 md:h-15" />
              </motion.div>
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-700/90 to-blue-900/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-lg border border-blue-500/20"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="relative z-10 flex-1">
                <h2 className="text-white text-lg md:text-xl font-bold font-sans tracking-tight mb-1 md:mb-2">
                  Let&apos;s Connect
                </h2>
                <p className="text-blue-100/70 mb-4 md:mb-6 font-body text-xs md:text-sm">
                  Connect with me professionally.
                </p>
                <motion.button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/putra-rizky-nugraha",
                      "_blank",
                    )
                  }
                  className="bg-white/90 text-blue-700 px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-bold font-sans text-xs md:text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:bg-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  LinkedIn
                  <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </motion.button>
              </div>
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [6, 3, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 md:w-20 md:h-20 border-white/30 border-2 md:border-4 rounded-xl flex items-center justify-center shrink-0"
              >
                <FaLinkedin className="text-white w-7 h-7 md:w-15 md:h-15" />
              </motion.div>
            </div>
          </motion.div>

          {/* TikTok */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-lg border border-white/[0.06]"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="relative z-10 flex-1">
                <h2 className="text-white text-lg md:text-xl font-bold font-sans tracking-tight mb-1 md:mb-2">
                  Join the Fun
                </h2>
                <p className="text-zinc-400 mb-4 md:mb-6 font-body text-xs md:text-sm">
                  Watch engaging and fun content.
                </p>
                <motion.button
                  onClick={() =>
                    window.open("https://www.tiktok.com/@artt_rzky", "_blank")
                  }
                  className="bg-white/90 text-gray-900 px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-bold font-sans text-xs md:text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:bg-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  TikTok
                  <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </motion.button>
              </div>
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [-3, 0, -3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 md:w-20 md:h-20 border-white/20 border-2 md:border-4 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm"
              >
                <AiFillTikTok className="text-white w-7 h-7 md:w-15 md:h-15" />
              </motion.div>
            </div>
          </motion.div>

          {/* GitHub */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 relative overflow-hidden border border-white/[0.06] shadow-lg"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="relative z-10 flex-1">
                <h2 className="text-white text-lg md:text-xl font-bold font-sans tracking-tight mb-1 md:mb-2">
                  Explore Code
                </h2>
                <p className="text-zinc-500 mb-4 md:mb-6 font-body text-xs md:text-sm">
                  Explore my open-source work.
                </p>
                <motion.button
                  onClick={() =>
                    window.open("https://github.com/arttVinci", "_blank")
                  }
                  className="bg-white/90 text-black px-4 py-2 md:px-5 md:py-2.5 rounded-xl font-bold font-sans text-xs md:text-sm flex items-center gap-2 cursor-pointer shadow-sm hover:bg-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  GitHub
                  <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </motion.button>
              </div>

              <motion.div
                animate={{ y: [0, -5, 0], rotate: [3, 0, 3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 md:w-20 md:h-20 border-white/20 border-2 md:border-4 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm"
              >
                <FaGithub className="text-white w-7 h-7 md:w-15 md:h-15" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
