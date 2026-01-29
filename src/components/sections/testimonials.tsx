"use client";

import { motion } from "framer-motion";
import { ReviewCard } from "@/components/ui/review-card";

const REVIEWS = [
  {
    name: "Amine Ben Ali",
    rating: 5,
    text: "El Benna la tou9awem! The brisket burger is out of this world. Best spot in Ariana hands down.",
    date: "12/01/2026",
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "Service rapide, ambiance top. J'adore le concept scientifique. Les tacos sont énormes!",
    date: "15/01/2026",
  },
  {
    name: "Karim Tounsi",
    rating: 5,
    text: "Finally a place that takes burgers seriously. The meat quality is premium. 10/10 experiment.",
    date: "18/01/2026",
  },
  {
    name: "Leila K.",
    rating: 5,
    text: "J'ai pris le Texas Ribs, c'est une tuerie. La sauce est incroyable. Je recommande vivement.",
    date: "20/01/2026",
  },
  {
    name: "Youssef B.",
    rating: 5,
    text: "Lab Station never disappoints. The vibe, the food, everything is perfect. Keep it up!",
    date: "22/01/2026",
  },
  {
    name: "Meriem S.",
    rating: 5,
    text: "C'est validé par la street! Benna scientifiquement prouvée bel7a9.",
    date: "25/01/2026",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-lab-black overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-lab-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-lab-black to-transparent z-10" />
      </div>

      <div className="container mb-12 text-center relative z-20">
        <h2 className="text-lab-toxic font-mono text-sm tracking-[0.3em] mb-4">
          {"// PEER_REVIEWS"}
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white font-heading uppercase">
          Subject <span className="text-lab-yellow">Observations</span>
        </h3>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Data collected from verified test subjects. 100% positive survival rate.
        </p>
      </div>

      {/* Marquee Row 1 (Left) */}
      <div className="relative flex overflow-hidden mb-8 group">
        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <ReviewCard key={`row1-${i}`} {...review} />
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 (Right) */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...REVIEWS, ...REVIEWS].reverse().map((review, i) => (
            <ReviewCard key={`row2-${i}`} {...review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
