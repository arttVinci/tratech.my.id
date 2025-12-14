import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, CheckCircle, Sun, Moon } from "lucide-react";

export default function ProfileHeader() {
  const [activeTab, setActiveTab] = useState("US");
  const [theme, setTheme] = useState("dark");

  return (
    <div className="pt-12 pb-4 px-5 text-center border-b border-zinc-700 font-sans">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="w-22 h-22 mb-3 mx-auto rounded-full overflow-hidden border-4 border-blue-100"
      >
        <div className="w-full h-full from-blue-500 to-blue-700 flex items-center justify-center">
          <User className="w-14 h-14 text-white" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <h1 className="text-xl font-semibold text-gray-300">Putra Rizky</h1>
        </div>
        <p className="text-gray-400 text-xs mb-4">@traa_rzkyy</p>

        <p className="text-gray-300 text-sm max-w-md mx-auto font-normal">
          Full Stack Dev | Tech Enthusiast | Clean Code | Docker
        </p>
      </motion.div>
    </div>
  );
}
