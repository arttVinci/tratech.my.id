"use client";

import { useState, useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Menu, Hammer, X, Rocket } from "lucide-react";
import { MdVerified } from "react-icons/md";
import Image from "next/image";

interface MainLayoutClientProps {
  children: ReactNode;
}

const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: "blur(4px)",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function MainLayoutClient({ children }: MainLayoutClientProps) {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmartTalkOpen, setIsSmartTalkOpen] = useState(false);

  useEffect(() => {
    const path = pathname.slice(1) || "home";
    const menuName = path.charAt(0).toUpperCase() + path.slice(1);
    setActiveMenu(menuName);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-blue-bg flex justify-center items-start p-0 lg:py-14 lg:px-19 relative">
      <AnimatedBackground />
      <ScrollToTop />

      {/* Mobile Header — Glassmorphism */}
      <header className="lg:hidden w-full fixed top-0 left-0 right-0 z-50 px-4 h-16 flex items-center justify-between bg-blue-bg/60 backdrop-blur-2xl border-b border-white/[0.06]">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="avatar-ring rounded-full">
              <Image
                src="/images/profile3.jpg"
                alt="Avatar"
                width={36}
                height={36}
                className="w-9 h-9 rounded-full object-cover"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-zinc-900 rounded-full pulse-ripple"></span>
          </div>

          <div className="flex items-center gap-2">
            <h1 className="text-white font-semibold text-md tracking-wide">
              Putra Rizky
            </h1>
            <MdVerified className="w-4 h-4 text-blue-400 mt-1" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div className="w-full max-w-400 flex overflow-hidden relative z-10">
        <Sidebar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onOpenSmartTalk={() => setIsSmartTalkOpen(true)}
        />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 ml-0 lg:ml-66 pt-16 lg:pt-0"
        >
          <div className="max-w-5xl mx-auto py-6 px-6 lg:px-16 lg:py-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                variants={pageTransitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.main>
      </div>

      {/* Smart Talk Modal */}
      <AnimatePresence>
        {isSmartTalkOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSmartTalkOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-zinc-900/90 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl shadow-2xl z-70 text-center"
            >
              <button
                onClick={() => setIsSmartTalkOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center justify-center gap-4 py-4">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-2 border border-white/10">
                  <Hammer className="w-8 h-8 text-cyan-400 animate-pulse" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Under Development
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Fitur ini sedang dalam pengembangan oleh developers.
                    <br />
                    Nantikan update selanjutnya! <Rocket className="w-4 h-4 inline-block text-cyan-400" />
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsSmartTalkOpen(false)}
                className="w-full mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white py-2.5 rounded-xl font-medium transition-all cursor-pointer shimmer"
              >
                Siap, Ditunggu!
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
