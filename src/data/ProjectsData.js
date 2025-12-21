import {
  SiTypescript,
  SiBootstrap,
  SiDocker,
  SiFilament,
  SiGo,
  SiJavascript,
  SiLaravel,
  SiLivewire,
  SiMysql,
  SiPhp,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiDependabot,
  SiLeaflet,
} from "@icons-pack/react-simple-icons";

export const projectsData = [
  {
    id: 1,
    image: "/images/projects/project1.png",
    title: "Dekatku",
    description:
      "Dekatku adalah platform direktori berbasis lokasi yang menghubungkan masyarakat (wisatawan/pengunjung) dengan UMKM dan Penyedia Jasa Lokal. Aplikasi ini membantu menemukan usaha rumahan yang biasanya sulit ditemukan di mesin pencari umum. Dengan integrasi Geolocation dan AI, Dekatku memberikan rekomendasi usaha terdekat secara cerdas dan akurat.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind", "Framer", "Node.js"],
    githubUrl: "https://github.com/username/project1",
    liveUrl: "https://satriabahari.my.id",
    techStack: [
      { name: "Typescript", Icon: SiTypescript, color: "#61DAFB" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
      { name: "Filament", Icon: SiFilament, color: "#F59E0B" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "AI", Icon: SiDependabot, color: "#412991" },
      { name: "Leaflet.js", Icon: SiLeaflet, color: "#412991" },
    ],
    featured: true,
  },
];
