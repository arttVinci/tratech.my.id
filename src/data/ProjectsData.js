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
    image: "/images/projects/dekatku/project1.png",
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
    gallery: [
      {
        id: 1,
        url: "/images/projects/dekatku/1.png",
        caption: "User View",
      },
      {
        id: 2,
        url: "/images/projects/dekatku/2.png",
        caption: "Chat Bot/AI View",
      },
      {
        id: 3,
        url: "/images/projects/dekatku/3.png",
        caption: "Dashboard Admin",
      },
      {
        id: 4,
        url: "/images/projects/dekatku/4.png",
        caption: "Dashboard Product Admin",
      },
      {
        id: 5,
        url: "/images/projects/dekatku/5.png",
        caption: "Dashboard Super Admin",
      },
      {
        id: 6,
        url: "/images/projects/dekatku/6.png",
        caption: "Search Toko Terdekat",
      },
    ],
    features: [
      {
        title: "Geolocation & Peta Interaktif",
        key: [
          "Deteksi lokasi real-time untuk akurasi tinggi.",
          "Integrasi Leaflet.js (gratis, open-source, ringan).",
          "Menampilkan rute dari pengguna ke lokasi usaha.",
        ],
      },
      {
        title: "Integrasi AI (Smart Recommendation)",
        key: [
          "Menggunakan Groq AI sebagai mesin LLM super cepat.",
          "Chatbot konsultasi pencarian dengan bahasa natural.",
          "Rekomendasi berdasarkan jarak dan relevansi usaha.",
        ],
      },
      {
        title: "Direktori Komprehensif",
        key: [
          "UMKM produk: makanan, kerajinan, suvenir.",
          "Penyedia jasa lokal: reparasi, kebersihan, makeup, dll.",
          "Mendukung usaha rumahan tanpa toko fisik.",
        ],
      },
      {
        title: "Manajemen Data & Console (Filament Panel)",
        key: [
          "Dashboard analitik.",
          "Moderasi data usaha (approve/reject listing).",
          "Manajemen user & konfigurasi.",
          "Manajemen profil usaha.",
          "Upload foto.",
          "Pinpoint lokasi menggunakan peta Leaflet (klik/geser marker).",
        ],
      },
    ],
    challenges:
      "Integrating accurate geolocation with AI recommendations while maintaining fast performance across different devices and network conditions.",
    solution:
      "Implemented efficient caching strategies, optimized database queries, and used lazy loading for images to ensure smooth user experience.",
    featured: true,
  },
];
