import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useState } from "react";
import {
  SiPhp,
  SiLaravel,
  SiGo,
  SiReact,
  SiJavascript,
  SiMysql,
  SiDocker,
  SiTailwindcss,
  SiHtml5,
  SiPostman,
  SiGit,
} from "@icons-pack/react-simple-icons";

const techStack = [
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "Golang", Icon: SiGo, color: "#00ADD8" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

export default function HomePage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6 font-body"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-200 mb-2 font-sans">
          Hi, I'm Putra Rizky
        </h2>
        <p className="text-gray-300">
          I live in Indonesia, Jawa Barat, Bekasi Utara
        </p>
        <div className="border-b border-zinc-700 mt-3 mb-6"></div>
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed font-normal text-md">
        <p>
          <span className="font-mono text-sky-400">
            I'm Putra Rizky Nugraha,
          </span>{" "}
          , an Information Systems student at Universitas Terbuka and a
          dedicated Fullstack Developer specializing in{" "}
          <span className="font-mono text-sky-400">PHP(Laravel), Golang,</span>{" "}
          and <span className="font-mono text-sky-400">React.</span> Passionate
          about{" "}
          <span className="font-mono text-sky-400">
            {" "}
            Clean Code and scalable architecture,
          </span>{" "}
          I utilize modern tools like{" "}
          <span className="font-mono text-sky-400">Docker</span> and{" "}
          <span className="font-mono text-sky-400">MySQL</span> to build robust,
          user-centric digital solutions. As an active member of the{" "}
          <span className="font-mono text-sky-400">
            Google Developer Group,
          </span>{" "}
          I am a fast learner eager to contribute my technical expertise and
          professional workflow to impactful software engineering projects.
        </p>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xl font-semibold text-gray-200">
            {"< /> Tech Stack "}
          </h3>
        </div>
        <p className="text-gray-400">My professional journey.</p>
        <div className="border-b border-gray-800 mt-4"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative flex items-center gap-3 p-4 bg-linear-to-br from-zinc-800/50 to-zinc-900/50 rounded-xl cursor-pointer group overflow-hidden"
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                animate={{
                  background:
                    hoveredIndex === index
                      ? [
                          "radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 100% 100%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 0% 0%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
                        ]
                      : "radial-gradient(circle at 50% 50%, transparent 0%, transparent 50%)",
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Icon with 3D rotation */}
              <motion.div
                animate={{
                  rotateY: hoveredIndex === index ? [0, 360] : 0,
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0 relative z-10"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <tech.Icon size={32} color={tech.color} />
              </motion.div>

              {/* Text with slide effect */}
              <motion.span
                animate={{
                  x: hoveredIndex === index ? 5 : 0,
                  color: hoveredIndex === index ? "#ffffff" : "#9ca3af",
                }}
                className="text-sm font-medium relative z-10"
              >
                {tech.name}
              </motion.span>

              {/* Particles effect */}
              {hoveredIndex === index && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      initial={{
                        x: "50%",
                        y: "50%",
                        opacity: 1,
                      }}
                      animate={{
                        x: `${Math.random() * 100}%`,
                        y: `${Math.random() * 100}%`,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </>
              )}

              {/* Border with gradient */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-500/20 transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{
                  boxShadow:
                    hoveredIndex === index
                      ? "0 0 30px rgba(6, 182, 212, 0.4)"
                      : "0 0 0px rgba(6, 182, 212, 0)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
