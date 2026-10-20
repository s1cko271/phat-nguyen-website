"use client";

import { useState } from "react";
import Image from "next/image";
import { dualPersona } from "@/content/story";
import CyberReveal from "@/components/CyberReveal";

export default function DualPersonaSection() {
  const [activeSide, setActiveSide] = useState<"both" | "blue" | "orange">("both");

  return (
    <section
      id="dual-persona"
      suppressHydrationWarning
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-6 sm:px-12 flex flex-col justify-center border-t border-white/5 overflow-hidden"
      aria-label="Hai Mặt. Một Con Người."
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <CyberReveal theme="nexus" className="text-center mb-16 sm:mb-24 max-w-4xl mx-auto">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-blue-chrome/60 tracking-widest uppercase">
              <span className="w-2 h-2 bg-blue-electric" />
              <span>{dualPersona.sectionId} // {dualPersona.sectionLabel}</span>
              <span className="w-2 h-2 bg-orange-molten" />
            </div>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight vn-safe-heading leading-[1.42] sm:leading-[1.38]">
            <span className="inline-block text-blue-electric mr-2 sm:mr-4">{dualPersona.title}</span>
            <span className="inline-block text-orange-molten">{dualPersona.titleContinued}</span>
          </h2>
          
          <p className="font-mono text-xs sm:text-sm text-blue-chrome/70 tracking-widest uppercase mt-4">
            CHẠM HOẶC RÊ CHUỘT VÀO TỪNG BÊN ĐỂ KHÁM PHÁ CHIỀU SÂU TÍNH CÁCH
          </p>
        </CyberReveal>

        {/* ─── DUAL CARDS CONTAINER ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* ── THẺ BLUE: NGƯỜI CHIẾN LƯỢC ── */}
          <CyberReveal direction="right" theme="blue" reticles telemetryCode="PERSONA // 01_STRATEGY">
            <div
              onMouseEnter={() => setActiveSide("blue")}
              onMouseLeave={() => setActiveSide("both")}
              className={`relative p-8 sm:p-10 rounded-sm border transition-all duration-500 flex flex-col justify-between blueprint-grid overflow-hidden cyber-card-glow h-full ${
                activeSide === "orange"
                  ? "opacity-50 border-white/5 bg-blue-void/50 scale-[0.98]"
                  : "opacity-100 border-blue-electric/40 bg-blue-void/90 shadow-[0_0_40px_rgba(0,102,255,0.15)] scale-100"
              }`}
            >
            {/* Header Persona */}
            <div>
              <div className="flex items-center justify-between border-b border-blue-electric/25 pb-4 mb-6">
                <div>
                  <span className="font-mono text-xs text-blue-data uppercase tracking-widest block font-bold">
                    // {dualPersona.blue.label}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight mt-1">
                    {dualPersona.blue.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-sm border border-blue-electric/40 bg-blue-electric/10 flex items-center justify-center font-mono text-xs font-bold text-blue-electric">
                  01
                </div>
              </div>

              {/* Character Image & Motto */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                <div className="relative w-44 h-60 shrink-0">
                  <Image
                    src="/assets/cutout/char-blue.webp"
                    alt="Phat Nguyen — Người Chiến Lược (Blue)"
                    fill
                    sizes="176px"
                    className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                  />
                </div>

                <div className="space-y-3 text-left">
                  <div className="p-3 bg-blue-grid/60 border border-blue-frame rounded-sm">
                    <span className="font-mono text-[10px] text-blue-data/80 uppercase tracking-widest block mb-1">
                      KHẨU HIỆU:
                    </span>
                    <p className="font-display font-black text-base sm:text-lg text-white tracking-tight">
                      {dualPersona.blue.motto}
                    </p>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-blue-chrome/90 italic">
                    &ldquo;{dualPersona.blue.description}&rdquo;
                  </p>
                </div>
              </div>

              {/* Danh sách 5 câu hỏi cốt lõi của Blue */}
              <div className="space-y-2 mb-6">
                <span className="font-mono text-[10px] text-blue-data uppercase tracking-widest block mb-2 font-semibold">
                  // 5 CÂU HỎI TỰ VẤN TRƯỚC MỌI GIẢI PHÁP:
                </span>
                {dualPersona.blue.questions.map((q, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 font-mono text-xs text-blue-glass/90 bg-blue-void/80 p-2 rounded-sm border border-white/5"
                  >
                    <span className="text-blue-electric font-bold">?</span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags phẩm chất */}
            <div className="pt-4 border-t border-blue-electric/20 flex flex-wrap gap-1.5">
              {dualPersona.blue.traits.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-sm bg-blue-grid/40 text-[11px] font-mono text-blue-chrome border border-blue-frame/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </CyberReveal>

        {/* ── THẺ ORANGE: KẺ PHÁ KHUÔN ── */}
        <CyberReveal direction="left" theme="orange" reticles telemetryCode="PERSONA // 02_BREAKTHROUGH">
          <div
            onMouseEnter={() => setActiveSide("orange")}
            onMouseLeave={() => setActiveSide("both")}
            className={`relative p-8 sm:p-10 rounded-sm border transition-all duration-500 flex flex-col justify-between concrete-texture overflow-hidden cyber-card-glow-orange h-full ${
              activeSide === "blue"
                ? "opacity-50 border-white/5 bg-orange-asphalt/50 scale-[0.98]"
                : "opacity-100 border-orange-molten/40 bg-orange-asphalt/90 shadow-[0_0_40px_rgba(255,85,0,0.15)] scale-100"
            }`}
          >
            {/* Header Persona */}
            <div>
              <div className="flex items-center justify-between border-b border-orange-molten/25 pb-4 mb-6">
                <div>
                  <span className="font-mono text-xs text-orange-spark uppercase tracking-widest block font-bold">
                    // {dualPersona.orange.label}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight mt-1">
                    {dualPersona.orange.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-sm border border-orange-molten/40 bg-orange-molten/10 flex items-center justify-center font-mono text-xs font-bold text-orange-molten">
                  02
                </div>
              </div>

              {/* Character Image & Motto */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                <div className="relative w-44 h-60 shrink-0">
                  <Image
                    src="/assets/cutout/char-orange-open.webp"
                    alt="Phat Nguyen — Kẻ Phá Khuôn (Orange)"
                    fill
                    sizes="176px"
                    className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                  />
                </div>

                <div className="space-y-3 text-left">
                  <div className="p-3 bg-orange-concrete/60 border border-orange-iron rounded-sm">
                    <span className="font-mono text-[10px] text-orange-spark/80 uppercase tracking-widest block mb-1">
                      KHẨU HIỆU:
                    </span>
                    <p className="font-display font-black text-base sm:text-lg text-white tracking-tight">
                      {dualPersona.orange.motto}
                    </p>
                  </div>
                  <p className="font-body text-xs sm:text-sm text-orange-stencil/90 italic">
                    &ldquo;{dualPersona.orange.description}&rdquo;
                  </p>
                </div>
              </div>

              {/* Câu hỏi thách thức của Orange */}
              <div className="p-4 rounded-sm bg-orange-concrete/40 border border-orange-molten/30 mb-6">
                <span className="font-mono text-[10px] text-orange-spark uppercase tracking-widest block mb-2 font-semibold">
                  // THÁCH THỨC LỐI MÒN:
                </span>
                <p className="font-display font-bold text-sm sm:text-base text-white leading-relaxed">
                  {dualPersona.orange.challenge}
                </p>
              </div>
            </div>

            {/* Tags phẩm chất */}
            <div className="pt-4 border-t border-orange-molten/20 flex flex-wrap gap-1.5">
              {dualPersona.orange.traits.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-sm bg-orange-concrete/40 text-[11px] font-mono text-orange-stencil/80 border border-orange-iron/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </CyberReveal>

        </div>

      </div>
    </section>
  );
}
