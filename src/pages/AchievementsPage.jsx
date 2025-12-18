import React from "react";
import { motion } from "framer-motion";
import CertificateCard from "../components/CertificateCard";
import { Award } from "lucide-react";

export default function AchievementsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 font-body"
    >
      <div>
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 font-mono tracking-tight">
          <Award className="w-7 h-7 text-cyan-400" />
          Certificates
        </h2>
        <p className="text-gray-400 mt-1 font-sans text-md">
          A brief introduction to who I am.
        </p>
        <div className="border-b border-zinc-700 mt-3 mb-6"></div>
        <CertificateCard />
      </div>
    </motion.div>
  );
}
