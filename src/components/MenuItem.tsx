"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { MenuItemType } from "@/types";

interface MenuItemProps {
  item: MenuItemType;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

export default function MenuItem({ item, isActive, onClick, index }: MenuItemProps) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + index * 0.05 }}
    >
      <Link
        href={item.route}
        onClick={onClick}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer relative overflow-hidden ${
          isActive
            ? "text-white"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        {/* Active background pill with layoutId */}
        {isActive && (
          <motion.div
            layoutId="activeMenuPill"
            className="absolute inset-0 bg-white/[0.06] border border-white/[0.08] rounded-xl"
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          />
        )}

        {/* Hover glow */}
        {!isActive && (
          <div className="absolute inset-0 rounded-xl bg-white/0 hover:bg-white/[0.03] transition-colors duration-300" />
        )}

        <div className="flex items-center gap-3 relative z-10">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? "text-cyan-400 drop-shadow-[0_0_6px_rgba(0,212,255,0.5)]" : ""}`} />
          </motion.div>
          <span className="font-medium text-sm relative z-10">{item.label}</span>
        </div>

        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,212,255,0.6)]" />
          </motion.div>
        )}
      </Link>
    </motion.div>
  );
}
