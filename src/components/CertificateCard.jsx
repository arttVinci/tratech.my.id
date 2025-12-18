import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X } from "lucide-react";
import GlowCard from "./GlowCard";

const certificates = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
    title: "Best Team Bangkit Company Track Capstone Project",
    organization: "Bangkit Academy",
    issuedLabel: "Issued on",
    issuedDate: "January 2025",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=300&fit=crop",
    title: "Certificate of Completion Bangkit Academy",
    organization: "Bangkit Academy",
    issuedLabel: "Issued on",
    issuedDate: "January 2025",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
    title: "Sertifikat Kepesertaan Studi Independen Bersertifikat Angkatan 7",
    organization: "Kampus Merdeka",
    issuedLabel: "Issued on",
    issuedDate: "December 2024",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=300&fit=crop",
    title: "Belajar Dasar Git dengan Github",
    organization: "Dicoding",
    issuedLabel: "Issued on",
    issuedDate: "December 2024",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
    title: "Memulai Dasar Programming Untuk Menjadi Pengembang Software",
    organization: "Dicoding",
    issuedLabel: "Issued on",
    issuedDate: "December 2024",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=300&fit=crop",
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    organization: "Dicoding",
    issuedLabel: "Issued on",
    issuedDate: "September 2024",
  },
];

const CertificateCard = ({ certificate, index, onClick }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300">
        <div
          className="relative aspect-4/3 overflow-hidden bg-zinc-800"
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <motion.img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isImageHovered ? 1.1 : 1,
              filter: isImageHovered ? "brightness(0.4)" : "brightness(1)",
            }}
            transition={{ duration: 0.3 }}
          />

          <AnimatePresence>
            {isImageHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span>Show Credentials</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Content */}
        <GlowCard certi={true}>
          <h3 className="text-base font-semibold text-white mb-2 line-clamp-2">
            {certificate.title}
          </h3>

          <p className="text-sm text-zinc-300 mb-3">
            {certificate.organization}
          </p>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-zinc-500">
              {certificate.issuedLabel}
            </span>
            <span className="text-sm text-zinc-300">
              {certificate.issuedDate}
            </span>
          </div>
        </GlowCard>

        {/* Hover Glow Effect */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300 -z-10" />
      </div>
    </motion.div>
  );
};

const CertificateModal = ({ certificate, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative max-w-4xl w-150 bg-zinc-900 rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-auto"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            {certificate.title}
          </h2>
          <p className="text-lg text-zinc-300 mb-4">
            {certificate.organization}
          </p>
          <div className="flex items-center gap-2 text-zinc-400">
            <span>{certificate.issuedLabel}</span>
            <span>•</span>
            <span className="text-white">{certificate.issuedDate}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function CertificateCards() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section className="mt-4 pb-3">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="text-gray-400 font-sans text-md">
            Total: {certificates.length}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            index={index}
            onClick={() => setSelectedCertificate(cert)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
