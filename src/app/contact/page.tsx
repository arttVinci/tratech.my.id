"use client";

import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import { MdOutlineContacts } from "react-icons/md";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 font-body"
    >
      <div>
        <h2 className="text-2xl font-bold text-white flex items-center gap-2 font-mono tracking-tight">
          <MdOutlineContacts className="w-7 h-7 text-cyan-400" />
          Contact
        </h2>
        <p className="text-zinc-500 mt-1 font-sans text-md">
          Let&apos;s connect with each other and exchange knowledge or experience.
        </p>
        <div className="animated-gradient-line mt-4 mb-6" />
        <ContactSection />
      </div>
    </motion.div>
  );
}
