import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <h2 className="text-4xl font-bold text-white">Welcome!</h2>
      <p className="text-gray-300 text-lg leading-relaxed">
        Welcome to my personal portfolio website. Here you can learn more about
        my work, skills, and projects.
      </p>
    </motion.div>
  );
}
