"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface LabButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "danger" | "outline";
  className?: string;
}

export function LabButton({ children, variant = "primary", className, ...props }: LabButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative overflow-hidden px-10 py-5 font-bold uppercase tracking-wider transition-all",
        "clip-path-slant", // We will add this utility or just use standard shapes
        className
      )}
      {...props}
    >
      {/* Background with Warning Stripes */}
      <div className={cn(
        "absolute inset-0 z-0",
        variant === "primary" && "bg-lab-yellow",
        variant === "danger" && "bg-lab-danger",
        variant === "outline" && "bg-transparent border-2 border-lab-yellow"
      )}>
        {/* Stripes Pattern */}
        {variant !== "outline" && (
            <div 
                className="absolute inset-0 opacity-20" 
                style={{
                    backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)"
                }} 
            />
        )}
      </div>

      {/* Content */}
      <span className={cn(
        "relative z-10 flex items-center gap-2",
        variant === "primary" ? "text-lab-black" : "text-white"
      )}>
        {children}
      </span>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 z-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
    </motion.button>
  );
}
