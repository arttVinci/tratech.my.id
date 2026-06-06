"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import type { Certificate } from "@/types";

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, filter: "blur(8px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        exit={{ scale: 0.9, opacity: 0, filter: "blur(8px)" }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative max-w-4xl w-150 bg-zinc-900/90 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/[0.08]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer backdrop-blur-sm"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="relative w-full aspect-4/3">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white mb-1">
              {certificate.title}
            </h2>
            <p className="font-sans text-lg text-zinc-300">
              {certificate.organization}
            </p>
            <p className="text-sm text-zinc-500 mt-1">
              ID Credentials : #{certificate.IdCredential}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-500">
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
                        rounded-xl
                        border border-white/[0.08]
                        text-sm font-medium
                        text-zinc-300
                        hover:border-cyan-400/30
                        hover:text-cyan-400
                        transition-all duration-300
                        font-sans
                        bg-white/[0.03]
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
        </div>
      </motion.div>
    </motion.div>
  );
}
