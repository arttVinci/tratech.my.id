"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ProfileHeader from "./ProfileHeader";
import MenuItem from "./MenuItem";
import { PiCertificate } from "react-icons/pi";
import { Home, User, FolderOpen, Send, MessageSquare, X, Sparkles } from "lucide-react";
import type { MenuItemType } from "@/types";

const menuItems: MenuItemType[] = [
  { icon: Home, label: "Home", route: "/" },
  { icon: User, label: "About", route: "/about" },
  { icon: PiCertificate as MenuItemType["icon"], label: "Achievements", route: "/achievements" },
  { icon: FolderOpen, label: "Projects", route: "/projects" },
  { icon: Send, label: "Contact", route: "/contact" },
];

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  isOpen: boolean;
  onClose: () => void;
  onOpenSmartTalk: () => void;
}

export default function Sidebar({
  activeMenu,
  setActiveMenu,
  isOpen,
  onClose,
  onOpenSmartTalk,
}: SidebarProps) {
  const router = useRouter();

  const handleMenuClick = (item: MenuItemType) => {
    setActiveMenu(item.label);
    router.push(item.route);

    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={`
          w-full lg:w-60 flex flex-col fixed top-0 h-screen z-50
          bg-blue-bg/80 backdrop-blur-2xl lg:bg-transparent
          ml-0 lg:ml-20
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          transition-transform duration-300 lg:transition-none
          px-6 lg:px-0
        `}
      >
        {/* Sidebar right edge gradient line */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px">
          <div className="h-full animated-gradient-line" style={{ width: "1px", height: "100%" }} />
        </div>

        <button
          onClick={onClose}
          className="lg:hidden absolute top-6 right-6 text-white hover:text-gray-300 z-10 p-2 transition-colors"
        >
          <X className="w-7 h-7" />
        </button>

        <div className="pt-6 lg:pt-0">
          <ProfileHeader />
        </div>

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
            onClick={onOpenSmartTalk}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-56 relative group mx-auto overflow-hidden flex items-center justify-center gap-3 px-5 py-3 mt-7 rounded-2xl text-white font-medium transition-all cursor-pointer bg-gradient-to-r from-cyan-600/20 to-violet-600/20 border border-white/[0.08] hover:border-cyan-400/30 shimmer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            <Sparkles className="w-4.5 h-4.5 relative z-10 text-cyan-400" />
            <span className="relative z-10 text-sm">Smart Talk</span>
          </motion.button>

          <div className="px-5 pb-6 pt-2 mt-8 text-center border-t border-white/[0.06]">
            <p className="text-zinc-600 text-xs">
              © 2025 Traa Rzkyy. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
