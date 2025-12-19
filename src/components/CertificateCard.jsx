import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import GlowCard from "./GlowCard";

const certificates = [
  {
    id: 1,
    image: "/images/certificate/serti2.jpg",
    title: "Invoasi AI For UMKN, IMPHNEN x Kolosal.ai Hackathon",
    organization: "IMPHNEN & Kolosal.ai",
    issuedDate: "Desember 2025",
    credentialUrl:
      "https://hackathon.imphnen.dev/certificate/O%2BKb4xLLc%2BtQ2B40jl5Nh6rnwBwm4JYuO2qYas1k%2BjQNstTxIRHEbzJhCtMdYdaD4e9kiQTx6Id4%2FADGwEkEH5tEY5Twk1FhtUIot30RvnI3ZtcJTn%2FdFzGT2h%2Fgb6WzNVPkyYANtGr1BRCIEzu0AOk8sJqsm8XTYLl3FsjOYc7dh4TL4krQT6xZw7r6lSrfr8BMSO5mMi8xPQZf",
    IdCredential: "hackathon.imphnen.dev-certificate-O2BKb4xLLc",
  },
  {
    id: 2,
    image: "/images/certificate/serti1.jpg",
    title:
      "Programming With PHP: Fundamental, Object Oriented Programming, PHP Web, Composer, Unit Test, MVC",
    organization: "Udemy",
    issuedDate: "Juni 2025",
    IdCredential: "UC-ab92d8b2-24f4-4152-bd8c-05e7abc868ae",
  },
  {
    id: 3,
    image: "/images/certificate/serti3.jpg",
    title: "Project-Based Internship, Evermos Backend Developer",
    organization: "Rakamin Academy & Evermos",
    issuedDate: "December 2024",
    IdCredential: "240169IAPPGIE26112025",
  },
  {
    id: 4,
    image: "/images/certificate/serti4.jpg",
    title: "Programming With Laravel",
    organization: "WPU Course",
    issuedDate: "November 2025",
    IdCredential: "VVR9QAL4",
  },
  {
    id: 5,
    image: "/images/certificate/serti5.jpg",
    title: "Fundamental Database MySQL",
    organization: "Coding Studio",
    issuedDate: "Juli 2025",
    IdCredential: "QEVUZERQAR",
  },
  {
    id: 6,
    image: "/images/certificate/serti6.jpg",
    title: "Introduction to Financial Literacy",
    organization: "Dicoding",
    issuedDate: "Oktober 2025",
    IdCredential: "N9ZO2RMO6PG5",
  },
  {
    id: 7,
    image: "/images/certificate/serti7.jpg",
    title: "Fundamental Front-End Web For Beginner",
    organization: "Dicoding",
    issuedDate: "Oktober 2025",
    IdCredential: "N9ZO509LYPG5",
  },
  {
    id: 8,
    image: "/images/certificate/serti10.jpg",
    title: "Fundamental Programming Web",
    organization: "Dicoding",
    issuedDate: "Oktober 2025",
    IdCredential: "2VX36K113XYQ",
  },
  {
    id: 9,
    image: "/images/certificate/serti9.png",
    title:
      "pass the selection and participate in the Event Badan EKRAF Developer Day 2025",
    organization: "Dicoding",
    issuedDate: "November 2025",
    IdCredential: "2VX36K113XYQ",
  },
  {
    id: 10,
    image: "/images/certificate/serti8.jpg",
    title: "ReactJS Bootcamp",
    organization: "WPU Course",
    issuedDate: "November 2025",
    IdCredential: "IAE14ID5",
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
      className="group cursor-pointer h-full"
      onClick={onClick}
    >
      <div className="relative border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300 h-full flex flex-col">
        <div
          className="relative aspect-4/3 overflow-hidden bg-zinc-800 shrink-0"
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
          <h3 className="text-base font-semibold text-white mb-2 line-clamp-2 min-h-12">
            {certificate.title}
          </h3>

          <p className="text-sm text-zinc-300 mb-3">
            {certificate.organization}
          </p>

          <div className="flex flex-col gap-1 mt-auto">
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
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Image */}
        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-auto"
        />

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white mb-1">
              {certificate.title}
            </h2>
            <p className="font-['Inter'] text-lg text-zinc-300">
              {certificate.organization}
            </p>
            <p className="text-sm text-zinc-400 mt-1">
              ID Credentials : #{certificate.IdCredential}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span>Published</span>
            <span>•</span>
            <span className="font-medium text-white">
              {certificate.issuedDate}
            </span>
            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2
                        px-4 py-2 ml-auto
                        rounded-full
                        border border-zinc-600
                        text-sm font-medium
                        text-zinc-200
                        hover:border-cyan-400
                        hover:text-cyan-400
                        transition-colors
                        font-sans
                        "
              >
                Tampilkan kredensial
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 3h7v7m0-7L10 14"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 5v14h14"
                  />
                </svg>
              </a>
            )}
          </div>

          {/* Credential Link */}
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
