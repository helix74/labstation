"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * WelcomeOverlay - Shows Arabic welcome message after page load
 * "مرحبا بيك في المختبر" = "Welcome to the Lab" in Tunisian Derja
 * Auto-dismisses after 2.5 seconds
 */
export function WelcomeOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-dismiss after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-lab-black/90 backdrop-blur-sm cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          {/* Radioactive glow background */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 50%, transparent 70%)'
            }}
          />

          {/* Welcome text container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative z-10 text-center px-8"
          >
            {/* Arabic greeting */}
            <h2 
              className="text-4xl md:text-6xl font-bold text-lab-yellow font-arabic mb-4 text-glow-strong"
              dir="rtl"
            >
              مرحبا بيك في المختبر
            </h2>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="text-lg md:text-xl text-gray-400"
            >
              Welcome to the Lab
            </motion.p>
            
            {/* Tap to dismiss hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              className="text-sm text-gray-600 mt-8"
            >
              Tap anywhere to continue
            </motion.p>
          </motion.div>

          {/* Chemical formula decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-lab-toxic tracking-widest"
          >
            {"// INITIATING_WELCOME_PROTOCOL"}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
