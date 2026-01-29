"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Instagram } from "lucide-react";

export function VideoBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700]/5 via-transparent to-[#ffd700]/5" />

      <div className="container px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffd700]/10 border border-[#ffd700]/30 mb-6"
          >
            <Instagram className="w-5 h-5 text-[#ffd700]" />
            <span className="text-[#ffd700] font-medium">@lab.station.tn</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Lab </span>
            <span className="text-[#ffd700]">Moments</span>
          </h2>
        </motion.div>

        {/* Video Grid - Placeholder for Instagram Reels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {[1, 2, 3, 4].map((item) => (
            <VideoPlaceholder key={item} index={item} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/lab.station.tn/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold hover:scale-105 transition-transform"
          >
            <Instagram size={22} />
            Suivez-nous sur Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Placeholder for video/reel content
function VideoPlaceholder({ index }: { index: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] group cursor-pointer"
    >
      {/* Placeholder gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${45 + index * 30}deg, #ffd700${10 + index * 5}, #0a0a0a)`
        }}
      />

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Play size={28} className="text-white ml-1" fill="white" />
        </div>
      </div>

      {/* Placeholder text */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="text-xs text-white/60 mb-1">Video #{index}</div>
        <div className="text-sm text-white font-medium">Coming Soon</div>
      </div>

      {/* Instagram icon */}
      <div className="absolute top-4 right-4">
        <Instagram size={20} className="text-white/40" />
      </div>
    </motion.div>
  );
}
