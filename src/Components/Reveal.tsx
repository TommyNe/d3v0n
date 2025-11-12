"use client";
import { motion } from "motion/react";

type RevealProps = {
  delay?: number;
  className?: string;
  children?: React.ReactNode;
};

export function Reveal({ delay = 0, className = "", children }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
      viewport={{ once: true, amount: 0.6, margin: "-10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
