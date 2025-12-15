import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import {
  SiBootstrap,
  SiComposer,
  SiCss,
  SiDocker,
  SiFilament,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLivewire,
  SiMysql,
  SiOpenai,
  SiPhp,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiDependabot,
} from "@icons-pack/react-simple-icons";

const techStack = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss, color: "#1572B6" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Golang", Icon: SiGo, color: "#00ADD8" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
  { name: "Livewire", Icon: SiLivewire, color: "#4E56A6" },
  { name: "Filament", Icon: SiFilament, color: "#F59E0B" },
  { name: "Composer", Icon: SiComposer, color: "#885630" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "AI", Icon: SiDependabot, color: "#412991" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "GitHub", Icon: SiGithub, color: "#f7f7f7" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

function TechStackCard({ tech, index }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleEnter = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const Icon = tech.Icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ delay: index * 0.05 }}
      className="relative flex items-center bg-zinc-800/50 rounded-xl hover:bg-zinc-800 transition-all cursor-pointer group overflow-hidden w-fit"
    >
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          left: mousePos.x - 100,
          top: mousePos.y - 100,
          width: 200,
          height: 200,
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(59, 130, 246, 0.3) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-cyan-500/30 transition-all duration-300 z-10" />
      <div className="flex shrink-0 p-2 w-15 h-15 items-center justify-center relative z-10">
        <Icon size={35} color={tech.color} />
      </div>

      <div
        className="relative z-10 overflow-hidden transition-all duration-300 ease-out"
        style={{
          width: isHovered ? "75px" : "0px",
          opacity: isHovered ? 1 : 0,
        }}
      >
        <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors whitespace-nowrap block pr-3">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
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

      <div className="space-y-6 text-gray-300 leading-relaxed font-normal text-base">
        <p>
          <span className="font-mono text-sky-400">
            I'm Putra Rizky Nugraha
          </span>
          , an Information Systems student at Universitas Terbuka and a
          dedicated Fullstack Developer specializing in{" "}
          <span className="font-mono text-sky-400">PHP (Laravel)</span>,{" "}
          <span className="font-mono text-sky-400">Golang</span>, and{" "}
          <span className="font-mono text-sky-400">React</span>. Passionate
          about{" "}
          <span className="font-mono text-sky-400">
            Clean Code and scalable architecture
          </span>
          , I utilize modern tools like{" "}
          <span className="font-mono text-sky-400">Docker</span> and{" "}
          <span className="font-mono text-sky-400">MySQL</span> to build robust,
          user-centric digital solutions. As an active member of the{" "}
          <span className="font-mono text-sky-400">Google Developer Group</span>
          , I am a fast learner eager to contribute my technical expertise and
          professional workflow to impactful software engineering projects.
        </p>
      </div>

      <div className="mt-16">
        <div className="border-b border-zinc-700 mt-3 mb-6"></div>
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl font-semibold text-white">
            <span className="text-cyan-400">{"< />"}</span>
            {" Tech Stack"}
          </h3>
        </div>
        <p className="text-gray-400 text-sm mb-6">My professional journey.</p>

        <div className="flex flex-wrap gap-2.5">
          {techStack.map((tech, index) => (
            <TechStackCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
