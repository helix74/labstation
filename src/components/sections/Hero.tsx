"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Industrial Grid */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        {/* Smoke/Fog Effect - Animated */}
        <div className="absolute bottom-0 left-0 w-full h-2/3 animate-smoke">
          <div className="absolute inset-0 bg-gradient-to-t from-lab-black via-lab-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-lab-yellow/5 via-transparent to-transparent opacity-50" />
        </div>
        
        {/* Additional fog layer */}
        <div 
          className="absolute bottom-0 left-0 w-full h-1/3 opacity-40"
          style={{
            background: 'radial-gradient(ellipse at bottom, rgba(255,215,0,0.1) 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="container relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
        {/* Text Content (Left) */}
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-lab-toxic font-mono text-sm tracking-widest mb-2">
              {"// SYSTEM_STATUS: ONLINE"}
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 leading-tight">
              THE LAB IS <br />
              <span 
                className="text-lab-yellow text-glow-strong glitch-text cursor-pointer"
                data-text="WORKING"
              >
                WORKING
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-lg font-arabic" dir="rtl">
              هبطنا للأرض 🌍
            </p>
            <p className="text-lg text-gray-400 max-w-lg mt-2">
              Benna scientifiquement prouvée.
            </p>
          </motion.div>

          {/* Hazard Button - Enhanced */}
          <motion.a
            href="#story"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-lab-yellow text-lab-black font-bold text-lg tracking-wider overflow-hidden glow-radioactive-pulse cursor-pointer"
            style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)" }}
          >
            <span className="relative z-10 flex items-center gap-3">
              LANCER LE PROTOCOLE
              <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </span>
            {/* Hazard Stripes Background */}
            <div 
              className="absolute inset-0 opacity-20 group-hover:opacity-50 transition-opacity duration-300"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #000, #000 10px, transparent 10px, transparent 20px)"
              }}
            />
          </motion.a>
        </div>

        {/* Character (Right) */}
        <div className="order-1 md:order-2 relative h-[50vh] md:h-[80vh] w-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full h-full"
          >
            {/* Radioactive Glow behind character */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full glow-radioactive-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(255,215,0,0.1) 40%, transparent 70%)'
              }}
            />
            
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/Middle Center Waving Hello wb.png"
                alt="Lab Scientist"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

