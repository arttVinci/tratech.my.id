import React, { useState } from "react";
import { motion } from "framer-motion";
import ProfileHeader from "./ProfileHeader";
import MenuItem from "./MenuItem";
import {
  Home,
  User,
  Award,
  Folder,
  LayoutDashboard,
  MessageCircle,
  Mail,
  MessageSquare,
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home" },
  { icon: User, label: "About" },
  { icon: Award, label: "Achievements" },
  { icon: Folder, label: "Projects" },
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: MessageCircle, label: "Chat Room" },
  { icon: Mail, label: "Contact" },
];

export default function Sidebar({ activeMenu, setActiveMenu }) {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-96 flex flex-col fixed top-0 h-screen"
    >
      <ProfileHeader />

      <div className="flex-1 px-16 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.label}
            item={item}
            isActive={activeMenu === item.label}
            onClick={() => setActiveMenu(item.label)}
            index={index}
          />
        ))}

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-3 px-5 py-3 mt-3 rounded-2xl from-emerald-600 to-emerald-500 text-white font-medium shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Smart Talk</span>
        </motion.button>
      </div>

      <div className="px-5 pb-6 pt-4 text-center border-t border-gray-900">
        <p className="text-gray-500 text-xs">COPYRIGHT © 2025</p>
        <p className="text-gray-500 text-xs">
          Satria Bahari. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
}
