"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MenuItem } from "@/lib/menu-data";

interface ExperimentVisualizerProps {
  activeItem: MenuItem | null;
  category: "burger" | "taco";
}

export function ExperimentVisualizer({ activeItem, category }: ExperimentVisualizerProps) {
  if (!activeItem) return null;

  return (
    <div className="relative w-full h-auto lg:h-[600px] flex items-center justify-center bg-lab-dark/30 rounded-2xl border border-lab-grey/30 overflow-hidden backdrop-blur-sm">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* Content Container - Grid Layout on Desktop */}
      <div className="relative z-20 w-full h-full p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Column: Details */}
        <div className="flex flex-col h-full justify-center space-y-6">
          {/* Header Data */}
          <div className="border-b border-lab-grey/50 pb-4">
            <h2 className="text-lab-toxic font-mono text-xs tracking-widest mb-1">
              {"// EXPERIMENT_ID: "}{activeItem.id.toUpperCase()}
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-white font-heading uppercase">
              {activeItem.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-lab-yellow font-mono text-xl">{activeItem.symbol}</div>
              <div className="text-gray-500 text-[10px] uppercase tracking-tighter">Atomic Symbol</div>
            </div>
          </div>

          {/* Data Overlay (Description & Ingredients) */}
          <motion.div
            key={activeItem.id + "-details"}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-lab-black/60 border border-lab-yellow/10 p-5 rounded-xl backdrop-blur-md"
          >
            <p className="text-lg md:text-xl text-white font-arabic dir-rtl mb-4 leading-relaxed">
              {activeItem.description_derja}
            </p>
            
            <div className="space-y-3">
              <h4 className="text-lab-toxic text-[10px] uppercase tracking-[0.2em] mb-2 border-b border-lab-toxic/20 pb-1 w-fit">
                Molecular Composition
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeItem.ingredients.map((ing, i) => (
                  <span key={i} className="text-[10px] md:text-xs text-gray-400 bg-lab-dark/80 px-2 py-1 rounded border border-lab-grey/50">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Product Image */}
        <div className="relative flex items-center justify-center h-[300px] lg:h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full h-full max-w-[350px] lg:max-w-full aspect-square"
            >
              {/* Enhanced Glow */}
              <div className="absolute inset-0 bg-lab-yellow/15 blur-[80px] rounded-full scale-110" />
              
              <Image
                src={activeItem.image || (category === "burger" ? "/images/menu-burgers.png" : "/images/menu-tacos.png")}
                alt={activeItem.name}
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
