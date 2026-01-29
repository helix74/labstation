"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  date: string;
  className?: string;
}

export function ReviewCard({ name, rating, text, date, className }: ReviewCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-4 p-6 w-[350px] h-[200px] rounded-xl bg-lab-dark/40 border border-lab-grey/30 backdrop-blur-sm transition-all duration-300 hover:bg-lab-dark/60 hover:border-lab-yellow/30 hover:shadow-[0_0_20px_rgba(255,215,0,0.05)]",
        className
      )}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-lab-yellow to-lab-warning flex items-center justify-center text-lab-black font-bold text-xs">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">{name}</h4>
            <div className="flex items-center gap-1 text-[10px] text-lab-toxic">
              <CheckCircle2 className="w-3 h-3" />
              <span>Verified Subject</span>
            </div>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-3 h-3",
                i < rating ? "fill-lab-yellow text-lab-yellow" : "text-gray-600"
              )}
            />
          ))}
        </div>
      </div>

      {/* Body */}
      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 font-medium">
        "{text}"
      </p>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
        <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
          EXP_DATE: {date}
        </span>
        <div className="h-1 w-12 bg-lab-dark rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-lab-toxic/50" />
        </div>
      </div>
    </div>
  );
}
