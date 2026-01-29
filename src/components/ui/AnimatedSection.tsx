"use client";

import { motion, Easing } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

const easeOut: Easing = [0.16, 1, 0.3, 1];

/**
 * Wrapper component that animates children on scroll into view.
 * Uses Framer Motion whileInView for performance.
 */
export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  staggerChildren = false,
  staggerDelay = 0.1,
}: AnimatedSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
        delay,
        ...(staggerChildren && {
          staggerChildren: staggerDelay,
        }),
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {staggerChildren
        ? // If staggering, wrap each direct child in motion.div
          Array.isArray(children)
          ? children.map((child, index) => (
              <motion.div key={index} variants={childVariants}>
                {child}
              </motion.div>
            ))
          : children
        : children}
    </motion.div>
  );
}

/**
 * Simple fade-in-up animation for individual elements
 */
export function FadeInUp({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
