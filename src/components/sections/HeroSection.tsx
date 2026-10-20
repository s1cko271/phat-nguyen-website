"use client";

import { hero } from "@/content/story";
import TextScramble from "@/components/TextScramble";

export default function HeroSection() {
  return (
    <section
      id="hero"
      suppressHydrationWarning
      className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden pt-20 pb-8 sm:pb-12 bg-blue-void"
      aria-label="Hero — Phat Nguyen"
    >
      {/* ─── DUAL ATMOSPHERE ORGANIC BLEND (NO HARSH VERTICAL LINE) ─── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Left Glow: Electric Blue Atmosphere & Blueprint Field */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 bg-[radial-gradient(ellipse_at_10%_50%,rgba(0,102,255,0.16)_0%,transparent_70%)]" />
        <div className="absolute inset-y-0 left-0 w-1/2 blueprint-grid [mask-image:linear-gradient(to_right,rgba(0,0,0,0.6),transparent)] opacity-50 hidden sm:block" />

        {/* Right Glow: Molten Amber Atmosphere & Industrial Field */}
        <div className="absolute inset-y-0 right-0 w-full sm:w-2/3 bg-[radial-gradient(ellipse_at_90%_50%,rgba(255,85,0,0.16)_0%,transparent_70%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 concrete-texture [mask-image:linear-gradient(to_left,rgba(0,0,0,0.6),transparent)] opacity-50 hidden sm:block" />

        {/* Cyber Crosshair Reticles in Outer Field */}
        <div className="absolute top-1/4 left-12 text-blue-electric/40 font-mono text-xs hidden lg:block select-none animate-pulse">
          + LAT: 33.7431° N
        </div>
        <div className="absolute top-1/4 right-12 text-orange-molten/40 font-mono text-xs hidden lg:block select-none animate-pulse text-right">
          + LON: 117.8677° W
        </div>

        {/* Ambient Telemetry Watermarks at Outer Edges */}
        <div className="absolute top-28 left-6 sm:left-12 font-mono text-[9px] text-blue-electric/30 uppercase tracking-[0.25em] leading-loose hidden xl:block">
          <p>// SECTOR_ALPHA: BLUE_WORLD</p>
          <p>// STRATEGY × LOGIC × SYSTEM</p>
          <p>// PSYCHOLOGY_DATA_FEED: 01.00</p>
        </div>

        <div className="absolute top-28 right-6 sm:right-12 text-right font-mono text-[9px] text-orange-molten/30 uppercase tracking-[0.25em] leading-loose hidden xl:block">
          <p>// SECTOR_BETA: ORANGE_WORLD</p>
          <p>// UNDERGROUND × INSTINCT × ACTION</p>
          <p>// BREAKTHROUGH_MODE: ACTIVE</p>
        </div>
      </div>

      {/* ─── METADATA HEADER TICKER (MATHEMATICALLY CENTERED) ─── */}
      <div className="relative z-20 px-6 sm:px-12 flex items-center justify-between font-mono text-[9px] sm:text-xs text-blue-chrome/60 uppercase tracking-widest border-b border-white/5 pb-3">
        {/* Left Tag with Decrypt Hover */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-1.5 h-1.5 bg-blue-electric rounded-none animate-pulse" />
          <TextScramble text={`${hero.sectionId} // ${hero.sectionLabel}`} />
        </div>

        {/* Absolute Mathematical Center */}
        <div className="hidden md:flex items-center gap-2 text-white/30 text-[10px] absolute left-1/2 -translate-x-1/2 pointer-events-none">
          <span className="w-1 h-1 rounded-full bg-blue-electric" />
          <span>HAI THẾ GIỚI. MỘT CON ĐƯỜNG RIÊNG.</span>
          <span className="w-1 h-1 rounded-full bg-orange-molten" />
        </div>

        {/* Right Tag with Decrypt Hover */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="hidden sm:inline text-white/40">SYS_LOC:</span>
          <TextScramble text="DUAL_NEXUS" />
          <span className="w-1.5 h-1.5 bg-orange-molten rounded-none animate-pulse" />
        </div>
      </div>

      {/* ─── MAIN HERO CENTERED EDITORIAL CANVAS ─── */}
      <div className="relative z-20 flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-8 max-w-6xl mx-auto w-full my-6 sm:my-10">
        
        {/* Eyebrow Badge: Chức danh chuyên nghiệp với Decrypt effect */}
        <div className="group relative inline-flex items-center gap-2.5 px-4 py-1.5 rounded-sm border border-blue-electric/40 bg-center-void/90 mb-5 sm:mb-6 shadow-[0_0_25px_rgba(0,102,255,0.2)] backdrop-blur-md hover:border-blue-electric transition-all">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-data animate-ping" />
          <span className="font-mono text-[10px] sm:text-xs text-blue-data uppercase tracking-widest font-semibold">
            <TextScramble text={hero.role} autostart={true} />
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-molten animate-pulse" />

          {/* Micro HUD corner marks */}
          <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-blue-electric" />
          <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-orange-molten" />
        </div>

        {/* Monolithic Name: PHAT NGUYEN (Chromatic Glitch on Hover) */}
        <h1 className="font-display font-black text-[clamp(2.75rem,8vw,7.5rem)] tracking-tight text-white uppercase leading-none vn-safe-heading mb-4 sm:mb-6 select-none whitespace-nowrap cursor-default cyber-glitch-text">
          <span className="drop-shadow-[0_4px_35px_rgba(255,255,255,0.25)]">
            PHAT NGUYEN
          </span>
        </h1>

        {/* Dual-Color Signature Tagline (Clean Phrase Wrapping) */}
        <div className="font-display font-black text-[clamp(1.35rem,3.5vw,3.25rem)] uppercase tracking-tight leading-[1.38] sm:leading-[1.32] mb-6 sm:mb-8 max-w-4xl">
          <span className="inline-block text-blue-electric drop-shadow-[0_0_20px_rgba(0,102,255,0.6)] mr-2 sm:mr-3 hover:scale-105 transition-transform duration-300">
            {hero.tagline}
          </span>
          <span className="inline-block text-orange-molten drop-shadow-[0_0_20px_rgba(255,85,0,0.6)] hover:scale-105 transition-transform duration-300">
            {hero.taglineContinued}
          </span>
        </div>

        {/* Centered Supporting Philosophy */}
        <p className="font-body text-sm sm:text-lg md:text-xl text-blue-glass/90 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
          &ldquo;{hero.supportingLine}&rdquo;
        </p>

        {/* Centered Action Button Group với Cyber Reticles */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#origin"
            className="group relative inline-flex items-center gap-2 px-7 sm:px-9 py-3 sm:py-3.5 rounded-sm bg-white text-blue-void font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all hover:bg-fissure-core hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] active:scale-95 overflow-hidden"
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform" />
            <span className="relative z-10">BƯỚC VÀO HÀNH TRÌNH</span>
            <span className="font-mono relative z-10 transition-transform group-hover:translate-y-0.5">↓</span>
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-7 sm:px-9 py-3 sm:py-3.5 rounded-sm border border-white/20 bg-white/[0.04] text-white/95 font-display font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all hover:border-orange-molten hover:text-orange-molten hover:bg-orange-molten/10 active:scale-95 shadow-[0_0_20px_rgba(0,0,0,0.6)]"
          >
            {/* Corner cyber ticks */}
            <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-white/40 group-hover:border-orange-molten transition-colors" />
            <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-white/40 group-hover:border-orange-molten transition-colors" />
            <span>HỢP TÁC DOANH NGHIỆP</span>
            <span className="font-mono text-orange-spark group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>

      {/* ─── BOTTOM TICKER (MATHEMATICALLY CENTERED SCROLL INDICATOR) ─── */}
      <div className="relative z-20 px-6 sm:px-12 flex items-center justify-center font-mono text-[10px] text-blue-chrome/60 uppercase tracking-widest pt-4 pb-2 border-t border-white/5">
        <a
          href="#origin"
          className="inline-flex items-center gap-2.5 text-white/80 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-electric animate-ping" />
          <span className="tracking-[0.2em] text-[10px] sm:text-[11px] font-medium">CUỘN ĐỂ KHÁM PHÁ</span>
          <span className="inline-block animate-bounce text-orange-molten">↓</span>
        </a>
      </div>
    </section>
  );
}
