import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Menu, BadgeCheck, Cloud, Sun } from "lucide-react";
import { MdVerified } from "react-icons/md";

export default function MainLayout() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    const menuName = path.charAt(0).toUpperCase() + path.slice(1);
    setActiveMenu(menuName);
  }, [location]);

  return (
    <div className="min-h-screen bg-blue-card flex justify-center items-start p-0 lg:py-14 lg:px-19">
      <header className="lg:hidden w-full fixed top-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 z-50 px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src="/images/profile3.jpg"
              alt="Avatar"
              className="w-9 h-9 rounded-full border border-zinc-700 object-cover"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-zinc-900 rounded-full"></span>
          </div>

          <div className="flex items-center gap-2">
            <h1 className="text-white font-semibold text-md tracking-wide">
              Putra Rizky
            </h1>
            <MdVerified className="w-4 h-4 text-blue-400 mt-1" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center cursor-pointer hover:bg-emerald-500 transition-colors">
            <span className="text-white text-xs font-bold">ID</span>
          </div>

          <button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
            <Cloud className="w-4 h-4" />
          </button> */}

          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white hover:bg-zinc-800 p-1.5 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div className="w-full max-w-400 flex overflow-hidden">
        <Sidebar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex-1 ml-0 lg:ml-66 pt-16 lg:pt-0"
        >
          <div className="max-w-5xl mx-auto py-6 px-6 lg:px-16 lg:py-0">
            <Outlet />
          </div>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 w-12 h-12 lg:w-14 lg:h-14 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center shadow-lg transition-colors"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </motion.button>
        </motion.main>
      </div>
    </div>
  );
}
