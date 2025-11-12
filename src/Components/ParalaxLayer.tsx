"use client";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";

type Props = {
  /** -1..+1; negativ = langsamer als Scroll (klassische Parallax) */
  speed?: number;
  className?: string;
  children?: React.ReactNode;
  /** Offset-Definition wie in motion.dev, z.B. ["start end","end start"] */
  offset?: Parameters<typeof useScroll>[0];
};

export function ParallaxLayer({
  speed = -0.2,
  className = "",
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref });

  // Begrenze Versatz auf dezent ±80px für Desktop
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [40 * speed, -40 * speed],
  );

  return (
    <div ref={ref} className="relative">
      <motion.div style={{ y, willChange: "transform" }} className={className}>
        {children}
      </motion.div>
    </div>
  );
}
