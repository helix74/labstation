"use client";

import { motion } from "framer-motion";
import { MenuItem, formatPrice } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

interface ExperimentListProps {
  items: MenuItem[];
  activeItem: MenuItem | null;
  onSelect: (item: MenuItem) => void;
}

export function ExperimentList({ items, activeItem, onSelect }: ExperimentListProps) {
  return (
    <div className="space-y-2 w-full max-w-2xl mx-auto md:mx-0">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onSelect(item)}
          onMouseEnter={() => onSelect(item)}
          className={cn(
            "group relative flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent",
            activeItem?.id === item.id
              ? "bg-lab-dark/80 border-lab-yellow/30 shadow-[0_0_15px_rgba(255,215,0,0.1)]"
              : "hover:bg-lab-dark/50 hover:border-lab-grey"
          )}
        >
          {/* Symbol Box */}
          <div
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded bg-lab-black border font-mono text-lg font-bold transition-colors",
              activeItem?.id === item.id
                ? "border-lab-yellow text-lab-yellow shadow-[0_0_10px_rgba(255,215,0,0.2)]"
                : "border-lab-grey text-gray-500 group-hover:border-lab-toxic group-hover:text-lab-toxic"
            )}
          >
            {item.symbol}
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3
                className={cn(
                  "font-heading text-lg uppercase tracking-wide transition-colors",
                  activeItem?.id === item.id ? "text-white" : "text-gray-400 group-hover:text-white"
                )}
              >
                {item.name}
              </h3>
              <span className="font-mono text-lab-yellow">{formatPrice(item.price)}</span>
            </div>
            
            {/* Badges */}
            <div className="flex gap-2 mt-1">
              {item.isSignature && (
                <span className="text-[10px] uppercase tracking-wider text-lab-toxic border border-lab-toxic/30 px-2 py-0.5 rounded-full bg-lab-toxic/10">
                  Signature
                </span>
              )}
              {item.isSpicy && (
                <span className="text-[10px] uppercase tracking-wider text-lab-danger border border-lab-danger/30 px-2 py-0.5 rounded-full bg-lab-danger/10 flex items-center gap-1">
                  Spicy {Array(item.spicyLevel).fill("🔥").join("")}
                </span>
              )}
            </div>
          </div>

          {/* Active Indicator (Arrow) */}
          {activeItem?.id === item.id && (
            <motion.div
              layoutId="active-indicator"
              className="absolute right-2 text-lab-yellow"
            >
              ▶
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
