"use client";

import { motion } from "framer-motion";
import { Atom, Flame } from "lucide-react";
import Image from "next/image";

interface PeriodicCardProps {
  symbol: string;
  name: string;
  price: string;
  atomicNumber: number;
  imageSrc: string;
  stats: {
    protein: "Low" | "Med" | "High";
    spiciness: "Mild" | "Hot" | "Radioactive";
  };
}

export function PeriodicCard({
  symbol,
  name,
  price,
  atomicNumber,
  imageSrc,
  stats,
}: PeriodicCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative group w-80 h-96 rounded-3xl p-1"
    >
      {/* Neon Border Gradient */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lab-yellow via-transparent to-lab-toxic opacity-50 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
      
      {/* Card Body */}
      <div className="relative h-full w-full bg-lab-black/80 backdrop-blur-xl rounded-[22px] border border-white/10 p-6 lg:p-8 flex flex-col overflow-hidden">
        
        {/* Header: Atomic Number & Price */}
        <div className="flex justify-between items-start mb-2">
          <span className="text-lab-yellow/80 font-mono text-sm">{atomicNumber}</span>
          <span className="text-white font-bold text-lg">{price}</span>
        </div>

        {/* Symbol */}
        <div className="relative z-10">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-lab-yellow to-white font-heading leading-none">
            {symbol}
          </h1>
          <p className="text-white/60 text-sm font-mono mt-1 tracking-wider uppercase">{name}</p>
        </div>

        {/* Floating Image */}
        <motion.div 
          className="absolute -right-8 top-16 w-48 h-48 z-0"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
           {/* Fallback div if image fails, or the image itself */}
           <div className="relative w-full h-full">
             <Image 
                src={imageSrc} 
                alt={name} 
                fill 
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
             />
           </div>
        </motion.div>

        {/* Stats Footer */}
        <div className="mt-auto pt-4 border-t border-white/10 z-10">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs text-white/70">
                    <Atom className="w-4 h-4 text-lab-toxic" />
                    <span>PROTEIN</span>
                </div>
                <span className="text-lab-toxic font-mono text-xs">{stats.protein}</span>
            </div>
            
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-white/70">
                    <Flame className="w-4 h-4 text-lab-danger" />
                    <span>SPICINESS</span>
                </div>
                <span className={`font-mono text-xs ${stats.spiciness === 'Radioactive' ? 'text-lab-danger animate-pulse' : 'text-white'}`}>
                    {stats.spiciness}
                </span>
            </div>

            {/* Decorative Barcode */}
            <div className="mt-4 flex gap-0.5 opacity-30">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-2 w-1 bg-lab-yellow rounded-full" style={{ opacity: [0.2, 0.5, 0.8, 0.3, 0.9, 0.4, 0.7, 0.2, 0.6, 0.3][i % 10] }} />
                ))}
            </div>
        </div>
      </div>
    </motion.div>
  );
}
