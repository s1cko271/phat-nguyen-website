"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

interface CyberRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  theme?: "blue" | "orange" | "nexus" | "neutral";
  scanEffect?: boolean;
  reticles?: boolean;
  telemetryCode?: string;
}

export function CyberReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  theme = "neutral",
  scanEffect = false,
  reticles = false,
  telemetryCode,
}: CyberRevealProps) {
  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { y: 32, x: 0 };
      case "down":
        return { y: -32, x: 0 };
      case "left":
        return { x: 36, y: 0 };
      case "right":
        return { x: -36, y: 0 };
      case "none":
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getInitialOffset();

  const themeGlow = {
    blue: "via-blue-electric shadow-[0_0_12px_#0066FF]",
    orange: "via-orange-molten shadow-[0_0_12px_#FF5500]",
    nexus: "via-fissure-core shadow-[0_0_12px_#FFF6EE]",
    neutral: "via-white/60 shadow-[0_0_10px_rgba(255,255,255,0.4)]",
  }[theme];

  const reticleColor = {
    blue: "border-blue-electric/60",
    orange: "border-orange-molten/60",
    nexus: "border-fissure-core/60",
    neutral: "border-white/30",
  }[theme];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: 0.985,
        filter: "blur(4px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative ${className}`}
    >

      {/* ─── OPTIONAL TACTICAL HUD RETICLES [ ] ─── */}
      {reticles && (
        <div className="absolute inset-0 pointer-events-none z-10" aria-hidden="true">
          <span className={`absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 ${reticleColor}`} />
          <span className={`absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 ${reticleColor}`} />
          <span className={`absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 ${reticleColor}`} />
          <span className={`absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 ${reticleColor}`} />
        </div>
      )}

      {/* ─── OPTIONAL TELEMETRY TIMESTAMP / CODE ─── */}
      {telemetryCode && (
        <div
          className="absolute -top-5 right-0 font-mono text-[9px] text-white/30 uppercase tracking-widest pointer-events-none hidden sm:block"
          aria-hidden="true"
        >
          // {telemetryCode}
        </div>
      )}

      {children}
    </motion.div>
  );
}

/* ─── STAGGERED CYBER LIST CONTAINER ─── */
interface CyberStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: (custom: { staggerDelay: number; delayChildren: number }) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.delayChildren,
    },
  }),
};

export function CyberStagger({
  children,
  className = "",
  staggerDelay = 0.08,
  delayChildren = 0.05,
}: CyberStaggerProps) {
  return (
    <motion.div
      variants={staggerContainerVariants}
      custom={{ staggerDelay, delayChildren }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── STAGGERED CYBER CHILD ITEM ─── */
interface CyberStaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function CyberStaggerItem({
  children,
  className = "",
  direction = "up",
}: CyberStaggerItemProps) {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: 24, x: 0 };
      case "down":
        return { y: -24, x: 0 };
      case "left":
        return { x: 24, y: 0 };
      case "right":
        return { x: -24, y: 0 };
      default:
        return { y: 24, x: 0 };
    }
  };

  const offset = getOffset();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale: 0.98,
      filter: "blur(3px)",
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

export default CyberReveal;
