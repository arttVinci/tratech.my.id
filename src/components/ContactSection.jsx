import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { AiFillTikTok } from "react-icons/ai";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="font-sans">
      {" "}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-linear-to-r from-red-600 to-red-700 rounded-xl p-8 relative overflow-hidden shadow-lg">
          <div className="flex justify-between items-start">
            <div className="relative z-10">
              <h2 className="text-white text-3xl font-bold font-sans tracking-tight mb-2">
                Stay in Touch
              </h2>
              <p className="text-red-100 mb-6 font-body text-base">
                Reach out via email for inquiries or collaborations.
              </p>
              <motion.button
                className="bg-white/90 text-red-700 px-6 py-3 rounded-lg font-bold font-sans flex items-center gap-2 cursor-pointer shadow-sm"
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Go to Gmail
                <ExternalLink size={18} />
              </motion.button>
            </div>
            <div className="border-white/30 border-4 p-4 rounded-2xl rotate-3">
              <TbMail size={48} className="text-white" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-linear-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl p-8 relative overflow-hidden shadow-lg">
            <div className="flex justify-between h-30">
              <div className="relative z-10">
                <h2 className="text-white text-xl font-bold font-sans tracking-tight mb-2">
                  Follow My Journey
                </h2>
                <p className="text-white/90 mb-6 font-body text-sm">
                  Follow my creative journey.
                </p>
                <motion.button
                  className="bg-white/90 text-pink-600 px-5 py-2.5 rounded-lg font-bold font-sans text-sm flex items-center gap-2 cursor-pointer shadow-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Instagram
                  <ExternalLink size={16} />
                </motion.button>
              </div>
              <div className="w-20 h-20 border-white/30 border-4 rounded-xl flex items-center justify-center -rotate-6">
                <FaInstagram size={60} className="text-white" />
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-blue-700 to-blue-900 rounded-xl p-8 relative overflow-hidden shadow-lg">
            <div className="flex justify-between h-30">
              <div className="relative z-10">
                <h2 className="text-white text-xl font-bold font-sans tracking-tight mb-2">
                  Let's Connect
                </h2>
                <p className="text-blue-100 mb-6 font-body text-sm">
                  Connect with me professionally.
                </p>
                <motion.button
                  className="bg-white/90 text-blue-800 px-5 py-2.5 rounded-lg font-bold font-sans text-sm flex items-center gap-2 cursor-pointer shadow-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  LinkedIn
                  <ExternalLink size={16} />
                </motion.button>
              </div>
              <div className="w-20 h-20 border-white/30 border-4 rounded-xl flex items-center justify-center rotate-6">
                <FaLinkedin size={60} className="text-white" />
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-xl p-8 relative overflow-hidden shadow-lg">
            <div className="flex justify-between h-30">
              <div className="relative z-10">
                <h2 className="text-white text-xl font-bold font-sans tracking-tight mb-2">
                  Join the Fun
                </h2>
                <p className="text-gray-300 mb-6 font-body text-sm">
                  Watch engaging and fun content.
                </p>
                <motion.button
                  className="bg-white/90 text-gray-900 px-5 py-2.5 rounded-lg font-bold font-sans text-sm flex items-center gap-2 cursor-pointer shadow-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  TikTok
                  <ExternalLink size={16} />
                </motion.button>
              </div>
              <div className="w-20 h-20 border-white/30 border-4 rounded-xl flex items-center justify-center -rotate-3">
                <AiFillTikTok size={60} className="text-white" />
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-gray-900 to-black rounded-xl p-8 relative overflow-hidden border border-gray-800 shadow-lg">
            <div className="flex justify-between h-30">
              <div className="relative z-10">
                <h2 className="text-white text-xl font-bold font-sans tracking-tight mb-2">
                  Explore Code
                </h2>
                <p className="text-gray-400 mb-6 font-body text-sm">
                  Explore my open-source work.
                </p>
                <motion.button
                  className="bg-white/90 text-black px-5 py-2.5 rounded-lg font-bold font-sans text-sm flex items-center gap-2 cursor-pointer shadow-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  GitHub
                  <ExternalLink size={16} />
                </motion.button>
              </div>
              <div className="w-20 h-20 border-white/30 border-4 rounded-xl flex items-center justify-center rotate-3">
                <FaGithub size={60} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
