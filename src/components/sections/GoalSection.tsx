"use client";

import Image from "next/image";
import { goal } from "@/content/story";
import CyberReveal from "@/components/CyberReveal";

export default function GoalSection() {
  return (
    <section
      id="goal"
      suppressHydrationWarning
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col justify-center border-t border-white/5 bg-center-void overflow-hidden"
      aria-label="Mục tiêu — Đi xa hơn nữa"
    >
      {/* Vệt sáng hội tụ phía sau poster */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-electric/15 via-white/5 to-orange-molten/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <CyberReveal theme="nexus" className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-blue-chrome/60 tracking-widest uppercase">
              <span className="w-2 h-2 bg-blue-electric" />
              <span>{goal.sectionId} // {goal.sectionLabel}</span>
              <span className="w-2 h-2 bg-orange-molten" />
            </div>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight vn-safe-heading leading-[1.28] sm:leading-[1.32] mb-4">
            {goal.title}
          </h2>

          <div className="max-w-4xl mx-auto space-y-2 pt-1">
            <p className="inline-block font-display font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-electric via-white to-orange-molten uppercase tracking-tight leading-snug vn-safe-heading">
              &ldquo;{goal.statement}&rdquo;
            </p>
            <p className="font-mono text-xs sm:text-sm text-fissure-core/80 uppercase tracking-widest">
              {goal.beyond}
            </p>
          </div>
        </CyberReveal>

        {/* ─── POSTER TWO WORLDS REVEAL (GIỮ NGUYÊN BẢN LOGO MEGADS) ─── */}
        <CyberReveal
          reticles
          theme="nexus"
          telemetryCode="MANIFESTO_POSTER // FULL_REVEAL"
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md sm:max-w-lg aspect-[1122/1402] rounded-sm overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group">
            <Image
              src="/assets/cutout/poster-two-worlds.webp"
              alt="Poster Hai Thế Giới — Phat Nguyen (Megads)"
              fill
              sizes="(max-width: 640px) 100vw, 512px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay nhãn tem thông số dưới góc */}
            <div className="absolute bottom-3 left-3 right-3 p-2 bg-center-void/80 backdrop-blur-md border border-white/10 rounded-sm flex items-center justify-between font-mono text-[10px] text-blue-chrome uppercase">
              <span>MANIFESTO_POSTER // TWO_WORLDS</span>
              <span className="text-white/40">OFFICIAL_VISUAL</span>
            </div>
          </div>
        </CyberReveal>

      </div>
    </section>
  );
}
