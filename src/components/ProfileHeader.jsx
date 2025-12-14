import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, CheckCircle, Sun, Moon } from "lucide-react";

export default function ProfileHeader() {
  const [activeTab, setActiveTab] = useState("US");
  const [theme, setTheme] = useState("dark");

  return (
    <div className="pt-8 pb-4 px-5 text-center border-b border-gray-900">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="w-28 h-28 mb-3 mx-auto rounded-full overflow-hidden border-4 border-orange-600"
      >
        <div className="w-full h-full from-orange-500 to-orange-700 flex items-center justify-center">
          <User className="w-14 h-14 text-white" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <h1 className="text-xl font-bold text-white">Satria Bahari</h1>
          <CheckCircle className="w-4 h-4 text-blue-500 fill-blue-500" />
        </div>
        <p className="text-gray-400 text-xs mb-4">@satriabahari</p>
      </motion.div>

      <div className="flex items-center justify-center gap-2">
        <div className="flex bg-zinc-900 rounded-full p-1">
          <button
            onClick={() => setActiveTab("US")}
            className={`px-6 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeTab === "US"
                ? "bg-emerald-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            US
          </button>
          <button
            onClick={() => setActiveTab("ID")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "ID"
                ? "bg-emerald-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            ID
          </button>
        </div>

        <div className="flex bg-zinc-900 rounded-full p-1">
          <button
            onClick={() => setTheme("light")}
            className={`p-2 rounded-full transition-all ${
              theme === "light" ? "bg-zinc-700" : "hover:bg-zinc-800"
            }`}
          >
            <Sun className="w-5 h-5 text-gray-400" />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`p-2 rounded-full transition-all ${
              theme === "dark" ? "bg-zinc-700" : "hover:bg-zinc-800"
            }`}
          >
            <Moon className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
