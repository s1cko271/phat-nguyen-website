"use client";

import { useEffect, useState } from "react";

export default function CyberHUD() {
  const [mounted, setMounted] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [activeSector, setActiveSector] = useState<"ALPHA" | "BETA" | "NEXUS">("NEXUS");

  useEffect(() => {
    setMounted(true);
    function handleMouseMove(e: MouseEvent) {
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      const mid = window.innerWidth / 2;
      const margin = 100;
      if (e.clientX < mid - margin) {
        setActiveSector("ALPHA");
      } else if (e.clientX > mid + margin) {
        setActiveSector("BETA");
      } else {
        setActiveSector("NEXUS");
      }
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden hidden md:block"
      aria-hidden="true"
    >
      {/* ─── BỐN GÓC KHUNG TACTICAL CORNER RETICLES ─── */}
      <div className="absolute top-16 left-4 w-4 h-4 border-t-2 border-l-2 border-blue-electric/40" />
      <div className="absolute top-16 right-4 w-4 h-4 border-t-2 border-r-2 border-orange-molten/40" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-blue-electric/40" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-orange-molten/40" />

      {/* ─── LIVE TELEMETRY RADAR STATUS (Bottom Left) ─── */}
      <div className="absolute bottom-5 left-8 font-mono text-[9px] uppercase tracking-widest text-blue-chrome/60 flex items-center gap-3 bg-center-void/70 px-2.5 py-1 rounded-sm border border-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>HUD_ONLINE</span>
        </div>
        <span className="text-white/20">|</span>
        <div className="flex items-center gap-1 text-blue-data">
          <span>X:{String(coords.x).padStart(4, "0")}</span>
          <span>Y:{String(coords.y).padStart(4, "0")}</span>
        </div>
        <span className="text-white/20">|</span>
        <span
          className={`font-bold transition-colors ${
            activeSector === "ALPHA"
              ? "text-blue-electric"
              : activeSector === "BETA"
              ? "text-orange-molten"
              : "text-fissure-core"
          }`}
        >
          SECTOR_{activeSector}
        </span>
      </div>

      {/* ─── SYSTEM PULSE SIGNAL (Bottom Right) ─── */}
      <div className="absolute bottom-5 right-8 font-mono text-[9px] uppercase tracking-widest text-orange-stencil/60 flex items-center gap-2 bg-center-void/70 px-2.5 py-1 rounded-sm border border-white/5 backdrop-blur-sm">
        <span className="text-white/40">FREQ:</span>
        <span className="text-orange-spark font-bold">432.08 MHz</span>
        <div className="flex items-end gap-0.5 h-2.5 w-6">
          <span className="w-1 bg-orange-molten/40 h-1 animate-pulse" />
          <span className="w-1 bg-orange-molten/70 h-2 animate-pulse [animation-delay:150ms]" />
          <span className="w-1 bg-orange-molten h-2.5 animate-pulse [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}
