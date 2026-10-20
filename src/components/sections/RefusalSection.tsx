"use client";

import { refusal } from "@/content/story";
import CyberReveal from "@/components/CyberReveal";

export default function RefusalSection() {
  return (
    <section
      id="refusal"
      suppressHydrationWarning
      className="relative min-h-[70vh] sm:min-h-[85vh] w-full flex flex-col items-center justify-center border-t border-white/5 bg-center-void overflow-hidden text-center px-4"
      aria-label="Ngắt nhịp — KHÔNG."
    >
      {/* Vệt sáng chìm */}
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-white/[0.02] via-transparent to-transparent pointer-events-none" />

      <CyberReveal theme="nexus" className="relative z-10 max-w-2xl mx-auto space-y-4">
        {/* Section Identifier */}
        <span className="font-mono text-[10px] sm:text-xs text-white/30 uppercase tracking-[0.3em] block">
          {refusal.sectionId} // {refusal.sectionLabel}
        </span>

        {/* Chữ KHÔNG. khổng lồ tối giản */}
        <h2 className="font-display font-black text-7xl sm:text-9xl lg:text-[11rem] text-white tracking-tighter uppercase leading-none drop-shadow-[0_0_35px_rgba(255,255,255,0.15)] vn-safe-heading select-none cyber-glitch-text">
          {refusal.word}
        </h2>

        {/* Sub-label leading into philosophy */}
        <p className="font-mono text-xs sm:text-sm text-blue-chrome/60 uppercase tracking-widest pt-4">
          KHOẢNH KHẮC MỌI NGƯỜI DỪNG LẠI. KHOẢNH KHẮC DỮ LIỆU BẮT ĐẦU. ↓
        </p>
      </CyberReveal>
    </section>
  );
}
