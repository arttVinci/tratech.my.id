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
    <div>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Gmail Card */}
        <div className="bg-linear-to-r from-red-600 to-red-700 rounded-xl p-8 relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-white text-3xl font-bold mb-2">
                Stay in Touch
              </h2>
              <p className="text-red-100 mb-6">
                Reach out via email for inquiries or collaborations.
              </p>
              <motion.button
                className="bg-white/50 text-zinc-800 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: "#9ca3af" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Go to Gmail
                <ExternalLink size={18} />
              </motion.button>
            </div>
            <div className="border-white/40 border-4 p-4 rounded-2xl">
              <TbMail size={48} className="text-white" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Instagram Card */}
          <div className="bg-linear-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl p-8 relative overflow-hidden">
            <div className="flex justify-between h-30">
              <div>
                <h2 className="text-white text-xl font-bold mb-2">
                  Follow My Journey
                </h2>
                <p className="text-white text-opacity-90 mb-6">
                  Follow my creative journey.
                </p>
                <motion.button
                  className="bg-white/50 text-zinc-800 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#9ca3af",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Go to Instagram
                  <ExternalLink size={18} />
                </motion.button>
              </div>
              <div>
                <div className="border-white/40 border-4 p-1 rounded-2xl">
                  <FaInstagram size={60} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-linear-to-br from-blue-700 to-blue-900 rounded-xl p-8 relative overflow-hidden">
            <div className="flex justify-between h-30">
              <div>
                <h2 className="text-white text-2xl font-bold mb-2">
                  Let's Connect
                </h2>
                <p className="text-blue-100 mb-6">
                  Connect with me professionally.
                </p>
                <motion.button
                  className="bg-white/50 text-zinc-800 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.05, backgroundColor: "#9ca3af" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Go to Linkedin
                  <ExternalLink size={18} />
                </motion.button>
              </div>
              <div>
                <div className="border-white/40 border-4 p-1 rounded-2xl">
                  <FaLinkedin size={60} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* TikTok Card */}
          <div className="bg-linear-to-br from-gray-800 to-gray-900 rounded-xl p-8 relative overflow-hidden">
            <div className="flex justify-between h-30">
              <div>
                <h2 className="text-white text-2xl font-bold mb-2">
                  Join the Fun
                </h2>
                <p className="text-gray-300 mb-6">
                  Watch engaging and fun content.
                </p>
                <motion.button
                  className="bg-white/50 text-zinc-800  px-6 py-3 rounded-lg font-semibold flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.05, backgroundColor: "#9ca3af" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Go to Tiktok
                  <ExternalLink size={18} />
                </motion.button>
              </div>
              <div>
                <div className="border-white/40 border-4 p-1 rounded-2xl">
                  <AiFillTikTok size={60} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-linear-to-br from-gray-900 to-black rounded-xl p-8 relative overflow-hidden border border-gray-800">
            <div className="flex justify-between h-30">
              <div>
                <h2 className="text-white text-2xl font-bold mb-2">
                  Explore the Code
                </h2>
                <p className="text-gray-300 mb-6">
                  Explore my open-source work.
                </p>
                <motion.button
                  className="bg-white/50 text-zinc-800 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.05, backgroundColor: "#9ca3af" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Go to Github
                  <ExternalLink size={18} />
                </motion.button>
              </div>
              <div>
                <div className="border-white/40 border-4 p-1 rounded-2xl">
                  <FaGithub size={60} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h2 className="text-white text-2xl font-semibold mb-6">
            Or send me a message
          </h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
              />
            </div>
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={4}
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors resize-none"
            />
            <motion.button
              onClick={handleSubmit}
              className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold"
              whileHover={{ scale: 1.02, backgroundColor: "#374151" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Send Email
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
