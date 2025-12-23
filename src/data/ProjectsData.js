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
    gallery: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        caption: "Dashboard Overview",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        caption: "Analytics Page",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
        caption: "Map Integration",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
        caption: "Mobile View",
      },
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800",
        caption: "User Profile",
      },
      {
        id: 6,
        url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
        caption: "Business Listing",
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
