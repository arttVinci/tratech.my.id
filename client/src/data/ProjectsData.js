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
import { MdPayment } from "react-icons/md";

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
    image: "/images/projects/tratech/1.png",
    title: "tratech.my.id",
    description:
      "A dynamic personal portfolio platform featuring a custom CMS dashboard for real-time content management. The frontend offers an interactive experience using React and Framer Motion, while the backend is powered by a robust Golang service following Clean Architecture principles. Fully containerized with Docker and backed by MySQL. (Currently under active development).",
    tags: [
      "Golang",
      "Clean Architecture",
      "REST API",
      "MySQL",
      "Docker",
      "Microservices",
    ],
    githubUrl: "https://github.com/arttVinci/tratech.my.id",
    liveUrl: "https://tratech.my.id",
    techStack: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Golang", Icon: SiGo, color: "#00ADD8" },
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    ],
    gallery: [
      {
        id: 1,
        url: "/images/projects/tratech/1.png",
        caption: "Home Page",
      },
      {
        id: 2,
        url: "/images/projects/tratech/2.png",
        caption: "Certificate Detail Page",
      },
      {
        id: 3,
        url: "/images/projects/tratech/3.png",
        caption: "About Page",
      },
      {
        id: 4,
        url: "/images/projects/tratech/4.png",
        caption: "Certifate Page",
      },
      {
        id: 5,
        url: "/images/projects/tratech/5.png",
        caption: "Contact Page",
      },
      {
        id: 6,
        url: "/images/projects/tratech/6.png",
        caption: "Project Detail Page",
      },
    ],
    features: [
      {
        title: "Dynamic Content Management System (CMS)",
        key: [
          "Dashboard admin kustom untuk mengelola konten (Project, Skills, Profile).",
          "Update data portofolio secara real-time tanpa perlu redeploy kode.",
          "Sistem autentikasi aman untuk akses dashboard admin.",
        ],
      },
      {
        title: "Interactive & Modern UI/UX",
        key: [
          "Antarmuka responsif dan modern dibangun dengan React.js & Tailwind CSS.",
          "Animasi transisi halus dan interaktif menggunakan Framer Motion.",
          "Visualisasi data skill dan project yang menarik.",
        ],
      },
      {
        title: "Clean Architecture Backend",
        key: [
          "Backend Golang (Fiber) yang modular (Handler, Usecase, Repository).",
          "Pemisahan business logic yang jelas untuk kemudahan maintenance.",
          "RESTful API yang efisien untuk komunikasi data ke Frontend.",
        ],
      },
      {
        title: "DevOps & Deployment",
        key: [
          "Full Containerization menggunakan Docker (Client & Server).",
          "Manajemen konfigurasi environment yang terpusat.",
          "Koneksi database MySQL yang stabil dan scalable.",
        ],
      },
    ],
    challenges:
      "Mengintegrasikan frontend yang kaya akan animasi interaktif dengan data dinamis dari backend, serta mengelola struktur project monorepo (Client & Server) agar tetap terorganisir dan performa tetap kencang.",
    solution:
      "Menerapkan pemisahan direktori yang tegas antara Client dan Server, menggunakan Docker Compose untuk orkestrasi service di local development, dan mengoptimalkan endpoint API.",
    featured: true,
  },
  {
    id: 3,
    image: "/images/projects/golang-api-ecommerce/1.png",
    title: "RESTful API E-Commerce Golang",
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
      { name: "Golang", Icon: SiGo, color: "#00ADD8" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
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
    challenges:
      "Mengimplementasikan Clean Architecture yang benar-benar modular tanpa menyebabkan 'Circular Dependency' antar package, serta memastikan konsistensi data transaksi saat terjadi request yang bersamaan (Concurrency).",
    solution:
      "Menerapkan Dependency Injection secara disiplin untuk memutus ketergantungan antar layer, menggunakan Database Transaction (tx) untuk rollback otomatis jika terjadi kegagalan order, dan membungkus aplikasi dalam Docker container untuk lingkungan development yang konsisten.",
    featured: false,
  },
  {
    id: 4,
    image: "/images/projects/ecommerce-laravel-filament/1.png",
    title: "E-Commerce Laravel Payment Gateaway",
    description:
      "Laravel & Filament-based e-commerce application with Clean Architecture. Integrated with Moota (Payment) and Kurirku (Shipping).",
    tags: [
      "Golang",
      "Clean Architecture",
      "REST API",
      "MySQL",
      "Docker",
      "Microservices",
    ],
    githubUrl: "https://github.com/arttVinci/ecommerce-laravel-filament",
    liveUrl: "",
    techStack: [
      { name: "PHP", Icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
      { name: "Livewire", Icon: SiLivewire, color: "#FB70A9" },
      { name: "Filament", Icon: SiFilament, color: "#FAA02E" },
      { name: "Moota Gateway", Icon: MdPayment, color: "#10B981" },
    ],
    gallery: [
      {
        id: 1,
        url: "/images/projects/ecommerce-laravel-filament/1.png",
        caption: "Home Page",
      },
      {
        id: 2,
        url: "/images/projects/ecommerce-laravel-filament/2.png",
        caption: "Feature Page",
      },
      {
        id: 3,
        url: "/images/projects/ecommerce-laravel-filament/3.png",
        caption: "Product Page",
      },
      {
        id: 4,
        url: "/images/projects/ecommerce-laravel-filament/4.png",
        caption: "Cart Page",
      },
      {
        id: 5,
        url: "/images/projects/ecommerce-laravel-filament/5.png",
        caption: "Checkout Page",
      },
      {
        id: 6,
        url: "/images/projects/ecommerce-laravel-filament/6.png",
        caption: "Transaction",
      },
      {
        id: 7,
        url: "/images/projects/ecommerce-laravel-filament/7.png",
        caption: "Transaction",
      },
      {
        id: 8,
        url: "/images/projects/ecommerce-laravel-filament/8.png",
        caption: "Admin panel",
      },
      {
        id: 9,
        url: "/images/projects/ecommerce-laravel-filament/9.png",
        caption: "Admin panel",
      },
    ],
    features: [
      {
        title: "Clean Architecture on Laravel",
        key: [
          "Implementasi Service & Repository Pattern untuk memisahkan Business Logic dari Controller.",
          "Menggunakan DTO (Data Transfer Object) untuk konsistensi data antar layer.",
          "Struktur kode yang modular dan mudah di-scale (Scalable & Maintainable).",
        ],
      },
      {
        title: "Advanced Admin Panel (Filament)",
        key: [
          "Dashboard admin interaktif berbasis TALL Stack (Tailwind, Alpine, Laravel, Livewire).",
          "Manajemen Role & Permission (RBAC) yang granular menggunakan Filament Shield.",
          "Widget analitik real-time untuk memantau penjualan dan stok.",
        ],
      },
      {
        title: "Automated Payment (Moota Integration)",
        key: [
          "Integrasi API Moota untuk verifikasi pembayaran via mutasi bank otomatis.",
          "Sistem konfirmasi pesanan real-time tanpa upload bukti transfer manual.",
          "Handling webhook untuk update status pembayaran instan.",
        ],
      },
      {
        title: "Logistics & Shipping (Kurirku API)",
        key: [
          "Fitur Cek Ongkos Kirim otomatis ke berbagai ekspedisi (JNE, J&T, SiCepat, dll).",
          "Pelacakan nomor resi (AWB Tracking) langsung dari dashboard user.",
          "Kalkulasi biaya pengiriman akurat berdasarkan berat dan dimensi produk.",
        ],
      },
    ],
    challenges:
      "Mengadaptasi konsep Clean Architecture ke dalam ekosistem Laravel yang berbasis MVC tanpa mengorbankan fitur bawaan framework, serta menangani latensi dan konsistensi data saat berintegrasi dengan layanan pihak ketiga (Moota & Kurirku).",
    solution:
      "Menerapkan Repository Pattern secara disiplin untuk abstraksi database, menggunakan Laravel Queue/Jobs untuk memproses webhook pembayaran di latar belakang (background processing) agar tidak memblokir UI, dan caching respons API ongkir untuk performa yang lebih cepat.",
    featured: false,
  },
];
