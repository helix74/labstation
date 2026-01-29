"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Flame, Star } from "lucide-react";
import Image from "next/image";
import { MenuItem, formatPrice } from "@/lib/menu-data";

interface ProductDrawerProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDrawer({ item, isOpen, onClose }: ProductDrawerProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden"
            onClick={onClose}
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-lab-dark rounded-t-3xl border-t border-lab-yellow/20 max-h-[85vh] overflow-y-auto lg:hidden"
          >
            {/* Handle */}
            <div className="flex justify-center py-3">
              <div className="w-12 h-1 bg-lab-grey rounded-full" />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full bg-lab-grey/50 text-white hover:bg-lab-grey transition-colors"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="px-6 pb-8 space-y-6">
              {/* Product Image */}
              {item.image && (
                <div className="relative w-full aspect-square max-w-[200px] mx-auto">
                  <div className="absolute inset-0 bg-lab-yellow/10 blur-[40px] rounded-full" />
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain drop-shadow-xl"
                  />
                </div>
              )}

              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  {/* Symbol Badge */}
                  <div className="w-14 h-14 bg-lab-yellow/20 border border-lab-yellow/40 rounded-lg flex items-center justify-center">
                    <span className="text-lab-yellow font-bold text-xl font-mono">
                      {item.symbol}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white font-heading">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {item.isSignature && (
                        <span className="flex items-center gap-1 text-xs text-lab-yellow">
                          <Star size={12} fill="currentColor" /> SIGNATURE
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="flex items-center gap-1 text-xs text-lab-danger">
                          <Flame size={12} fill="currentColor" /> 
                          {item.spicyLevel === 3 ? "SUPER SPICY" : "SPICY"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="inline-block px-4 py-2 bg-lab-yellow/10 border border-lab-yellow/30 rounded-lg">
                <span className="text-lab-yellow font-bold text-xl">
                  {formatPrice(item.price)}
                </span>
                {item.price2XL && (
                  <span className="text-gray-400 text-sm ml-2">
                    / {formatPrice(item.price2XL)} (2XL)
                  </span>
                )}
              </div>

              {/* Derja Description */}
              <div className="space-y-2">
                <p className="text-white/80 text-lg font-arabic leading-relaxed" dir="rtl">
                  {item.description_derja}
                </p>
              </div>

              {/* Ingredients */}
              <div className="space-y-3">
                <h4 className="text-lab-toxic font-mono text-xs tracking-wider">
                  {"// COMPOSITION"}
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {item.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-lab-yellow rounded-full" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {/* French Description */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  {item.description_fr}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
