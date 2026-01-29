"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [bootStep, setBootStep] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  const handleStepComplete = () => {
    setBootStep((prev) => prev + 1);
  };

  useEffect(() => {
    if (bootStep === 3) {
      setTimeout(() => setIsLoading(false), 800);
    }
  }, [bootStep]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-lab-black flex flex-col items-center justify-center overflow-hidden font-mono text-xs md:text-sm"
        >
          {/* Matrix/Grid Background */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative z-10 max-w-md w-full px-8 space-y-2 text-lab-toxic">
            <div className="flex items-center gap-2 mb-4 opacity-50">
              <div className="w-3 h-3 rounded-full bg-lab-danger animate-pulse" />
              <span>SECURE CONNECTION ESTABLISHED</span>
            </div>

            {/* Boot Sequence */}
            <div className="space-y-1">
              <div className="flex gap-2">
                <span className="text-lab-grey">{">"}</span>
                <TypewriterEffect 
                  text="INITIALIZING LAB PROTOCOL v2.0..." 
                  speed={30} 
                  onComplete={handleStepComplete} 
                />
              </div>

              {bootStep >= 1 && (
                <div className="flex gap-2">
                  <span className="text-lab-grey">{">"}</span>
                  <TypewriterEffect 
                    text="LOADING BENNA MODULES..." 
                    speed={30} 
                    onComplete={handleStepComplete} 
                  />
                </div>
              )}

              {bootStep >= 2 && (
                <div className="flex gap-2">
                  <span className="text-lab-grey">{">"}</span>
                  <TypewriterEffect 
                    text="CALIBRATING TASTE SENSORS..." 
                    speed={30} 
                    onComplete={handleStepComplete} 
                  />
                </div>
              )}

              {bootStep >= 3 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 text-lab-yellow font-bold mt-4"
                >
                  <span className="text-lab-grey">{">"}</span>
                  <span>ACCESS GRANTED. WELCOME TO THE LAB.</span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Bottom Loading Bar */}
          <div className="absolute bottom-10 left-0 w-full px-10">
            <div className="h-0.5 bg-lab-dark w-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: bootStep >= 3 ? "100%" : `${(bootStep / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-lab-toxic shadow-[0_0_10px_#00ff41]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
