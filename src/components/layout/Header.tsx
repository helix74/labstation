"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "The Lab", href: "#story" },
    { name: "Menu", href: "#menu" },
    { name: "Research", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between rounded-2xl border border-lab-yellow/20 bg-lab-black/80 px-4 md:px-6 py-3 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            
            {/* Hazard accent line */}
            <div className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-lab-yellow/50 to-transparent" />
            
            {/* Logo with glow */}
            <Link href="/" className="flex items-center gap-3 group">
                <motion.div 
                  className="h-9 w-9 rounded-lg bg-lab-yellow flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.3)] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                    <span className="text-lab-black font-bold text-lg">L</span>
                </motion.div>
                <span className="font-heading font-bold text-xl tracking-wider text-white group-hover:text-lab-yellow transition-colors duration-300">
                    LAB STATION
                </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <Link 
                        key={item.name} 
                        href={item.href}
                        className="relative text-sm font-medium text-white/70 hover:text-lab-yellow transition-colors uppercase tracking-widest py-2 group"
                    >
                        {item.name}
                        {/* Glow underline on hover */}
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-lab-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
                    </Link>
                ))}
            </nav>

            {/* CTA - Order Now */}
            <div className="hidden md:block">
                <Link 
                  href="#contact"
                  className="px-6 py-2.5 text-sm font-bold uppercase tracking-wider border border-lab-yellow/40 text-lab-yellow rounded-lg hover:bg-lab-yellow hover:text-lab-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                >
                    Order Now
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button 
                className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute top-24 left-4 right-4 rounded-2xl border border-lab-yellow/20 bg-lab-black/95 backdrop-blur-xl p-6 md:hidden shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          >
              {/* Grid pattern background */}
              <div 
                className="absolute inset-0 opacity-5 rounded-2xl pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#ffd700 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />
              
              <nav className="relative flex flex-col gap-4">
                  {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link 
                            href={item.href}
                            className="block text-lg font-bold text-white hover:text-lab-yellow py-2 border-b border-white/10 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                      </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link 
                      href="#contact"
                      className="mt-4 block text-center px-6 py-3 bg-lab-yellow text-lab-black font-bold rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Order Now
                    </Link>
                  </motion.div>
              </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

