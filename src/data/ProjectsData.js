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
    githubUrl: "https://github.com/alfandy12/dekatku.git",
    liveUrl: "https://origin.web.id/",
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
  {
    id: 2,
    image: "/images/projects/golang-api-ecommerce/1.png",
    title: "RESTful API E-Commerce berbasis Go (Golang)",
    description:
      "A robust and production-ready RESTful API for an E-Commerce platform, built with Golang (Fiber) using Clean Architecture principles. This project features secure authentication, transaction handling with data snapshots, and is fully containerized with Docker.",
    tags: [
      "Golang",
      "Clean Architecture",
      "REST API",
      "MySQL",
      "Docker",
      "Microservices",
    ],
    githubUrl: "https://github.com/arttVinci/Golang-API-Ecommerce",
    liveUrl: "",
    techStack: [
      { name: "Golang 1.25", Icon: SiGo, color: "#00ADD8" },
      { name: "MySQL 8.0", Icon: SiMysql, color: "#4479A1" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    ],
    gallery: [
      {
        id: 1,
        url: "/images/projects/golang-api-ecommerce/1.png",
        caption: "docker-compose up --build",
      },
      {
        id: 2,
        url: "/images/projects/golang-api-ecommerce/2.png",
        caption: "Docker Container Status",
      },
      {
        id: 3,
        url: "/images/projects/golang-api-ecommerce/3.png",
        caption: "Login Endpoint Test",
      },
      {
        id: 4,
        url: "/images/projects/golang-api-ecommerce/4.png",
        caption: "Products Endpoint Test",
      },
      {
        id: 5,
        url: "/images/projects/golang-api-ecommerce/5.png",
        caption: "Transaction Endpoint Test",
      },
      {
        id: 6,
        url: "/images/projects/golang-api-ecommerce/6.png",
        caption: "Project Structure (Tree View)",
      },
    ],
    features: [
      {
        title: "Clean Architecture Implementation",
        key: [
          "Pemisahan layer yang ketat (Handler, Usecase, Repository, Domain).",
          "Mudah ditesting dan di-maintenace (Separation of Concerns).",
          "Dependency Injection untuk fleksibilitas kode.",
        ],
      },
      {
        title: "Robust Authentication & Security",
        key: [
          "Sistem Login & Register menggunakan JWT (JSON Web Token).",
          "Middleware untuk validasi Role (Admin vs User/Customer).",
          "Hashing password aman menggunakan Bcrypt.",
        ],
      },
      {
        title: "Transactional Order Management",
        key: [
          "Mendukung transaksi atomic database (ACID compliant).",
          "Validasi stok real-time saat checkout.",
          "Manajemen status pesanan (Pending, Paid, Sent).",
        ],
      },
      {
        title: "DevOps & Tooling",
        key: [
          "Containerization penuh menggunakan Docker & Docker Compose.",
          "Database Migration menggunakan Golang-Migrate.",
          "Centralized Configuration menggunakan Viper.",
          "Structured Logging dengan Logrus.",
        ],
      },
    ],
    // Challenge disesuaikan ke backend context
    challenges:
      "Mengimplementasikan Clean Architecture yang benar-benar modular tanpa menyebabkan 'Circular Dependency' antar package, serta memastikan konsistensi data transaksi saat terjadi request yang bersamaan (Concurrency).",
    // Solution disesuaikan ke teknikal
    solution:
      "Menerapkan Dependency Injection secara disiplin untuk memutus ketergantungan antar layer, menggunakan Database Transaction (tx) untuk rollback otomatis jika terjadi kegagalan order, dan membungkus aplikasi dalam Docker container untuk lingkungan development yang konsisten.",
    featured: true,
  },
];
