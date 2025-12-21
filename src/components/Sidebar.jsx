import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import MenuItem from "./MenuItem";
import {
  Home,
  User,
  Award,
  FolderOpen,
  Send,
  MessageSquare,
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home", route: "/" },
  { icon: User, label: "About", route: "/about" },
  { icon: Award, label: "Achievements", route: "/achievements" },
  { icon: FolderOpen, label: "Projects", route: "/projects" },
  { icon: Send, label: "Contact", route: "/contact" },
];

export default function Sidebar({ activeMenu, setActiveMenu }) {
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    setActiveMenu(item.label);
    navigate(item.route);
  };

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-60 ml-20 flex flex-col fixed top-0 h-screen"
    >
      <ProfileHeader />

      <div className="flex-1 py-4 space-y-1">
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.label}
            item={item}
            isActive={activeMenu === item.label}
            onClick={() => handleMenuClick(item)}
            index={index}
          />
        ))}

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-56 relative group mx-auto overflow-hidden flex items-center justify-center gap-3 px-5 py-3 mt-4 rounded-2xl text-white font-medium shadow-md shadow-cyan-500/50 hover:shadow-cyan-400/70 transition-all cursor-pointer"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Smart Talk</span>
        </motion.button>

        <div className="px-5 pb-6 pt-2 mt-8 text-center border-t border-zinc-700">
          <p className="text-gray-500 text-xs">
            © 2025 Traa Rzkyy. All rights reserved.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
