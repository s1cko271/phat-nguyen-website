"use client";

import { origin } from "@/content/story";
import CyberReveal, { CyberStagger, CyberStaggerItem } from "@/components/CyberReveal";

export default function OriginSection() {
  return (
    <section
      id="origin"
      suppressHydrationWarning
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-6 sm:px-12 flex flex-col justify-center border-t border-white/5 overflow-hidden"
      aria-label="Tôi Đến Từ Đâu?"
    >
      {/* Background glow nhẹ */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-electric/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-molten/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <CyberReveal theme="blue" className="mb-14 sm:mb-20">
          <div className="flex items-center gap-2 font-mono text-[11px] text-blue-chrome/60 tracking-widest uppercase mb-3">
            <span className="w-2 h-2 bg-blue-electric" />
            <span>{origin.sectionId} // {origin.sectionLabel}</span>
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight vn-safe-heading leading-[1.42] sm:leading-[1.38] mb-4">
            {origin.title}
          </h2>
          
          <p className="font-body text-base sm:text-xl text-blue-chrome/80 max-w-2xl">
            {origin.intro}
          </p>
        </CyberReveal>

        {/* ─── DUAL ENVIRONMENT COLUMNS ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {/* CỘT 1: THẾ GIỚI THỨ NHẤT (BLUE) */}
          <CyberReveal
            direction="right"
            theme="blue"
            reticles
            telemetryCode="ENV_01 // BLUE_SYSTEM"
            className="p-6 sm:p-8 rounded-sm bg-blue-void/80 border border-blue-electric/25 shadow-[0_10px_30px_rgba(5,8,17,0.8)] blueprint-grid cyber-card-glow group hover:border-blue-electric/50 transition-colors"
          >
            {/* Header Thẻ */}
            <div className="flex items-center justify-between border-b border-blue-electric/20 pb-4 mb-6">
              <span className="font-mono text-xs text-blue-data uppercase tracking-widest font-semibold">
                [01] {origin.worldOne.label}
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-electric animate-pulse" />
            </div>

            {/* List đặc điểm */}
            <div className="flex flex-wrap gap-2 mb-8">
              {origin.worldOne.items.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-sm bg-blue-grid/60 border border-blue-frame text-xs text-blue-glass/90 font-mono tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Chuyển hóa sang giá trị cốt lõi */}
            <div className="space-y-3 pt-4 border-t border-blue-electric/15">
              <span className="block font-mono text-[10px] text-blue-chrome/60 uppercase tracking-widest mb-2">
                // SỰ CHUYỂN HÓA VẬN HÀNH:
              </span>
              <CyberStagger className="space-y-2">
                {origin.worldOne.lessons.map((lesson, idx) => (
                  <CyberStaggerItem key={idx}>
                    <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-sm bg-blue-void/90 border border-white/5 font-mono text-[11px] sm:text-sm hover:border-blue-electric/40 transition-colors">
                      <span className="text-blue-chrome/80 shrink-0">{lesson.from}</span>
                      <span className="text-blue-electric font-bold shrink-0">→</span>
                      <span className="text-white font-semibold tracking-wide text-right flex-1">{lesson.to}</span>
                    </div>
                  </CyberStaggerItem>
                ))}
              </CyberStagger>
            </div>
          </CyberReveal>

          {/* CỘT 2: THẾ GIỚI THỨ HAI (ORANGE) */}
          <CyberReveal
            direction="left"
            theme="orange"
            reticles
            telemetryCode="ENV_02 // ORANGE_STREET"
            className="p-6 sm:p-8 rounded-sm bg-orange-asphalt/80 border border-orange-molten/25 shadow-[0_10px_30px_rgba(13,12,11,0.8)] concrete-texture cyber-card-glow-orange group hover:border-orange-molten/50 transition-colors"
          >
            {/* Header Thẻ */}
            <div className="flex items-center justify-between border-b border-orange-molten/20 pb-4 mb-6">
              <span className="font-mono text-xs text-orange-spark uppercase tracking-widest font-semibold">
                [02] {origin.worldTwo.label}
              </span>
              <span className="w-2 h-2 rounded-full bg-orange-molten animate-pulse" />
            </div>

            {/* List đặc điểm */}
            <div className="flex flex-wrap gap-2 mb-8">
              {origin.worldTwo.items.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-sm bg-orange-concrete/60 border border-orange-iron text-xs text-orange-stencil/90 font-mono tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Chuyển hóa sang giá trị cốt lõi */}
            <div className="space-y-3 pt-4 border-t border-orange-molten/15">
              <span className="block font-mono text-[10px] text-orange-stencil/50 uppercase tracking-widest mb-2">
                // BẢN NĂNG THÍCH NGHI ĐƯỜNG PHỐ:
              </span>
              <CyberStagger className="space-y-2">
                {origin.worldTwo.lessons.map((lesson, idx) => (
                  <CyberStaggerItem key={idx}>
                    <div className="flex items-center gap-2 p-2.5 sm:p-3 rounded-sm bg-orange-asphalt/90 border border-white/5 font-mono text-[11px] sm:text-sm hover:border-orange-molten/40 transition-colors">
                      <span className="text-orange-stencil/70 shrink-0">{lesson.from}</span>
                      <span className="text-orange-molten font-bold shrink-0">→</span>
                      <span className="text-white font-semibold tracking-wide text-right flex-1">{lesson.to}</span>
                    </div>
                  </CyberStaggerItem>
                ))}
              </CyberStagger>
            </div>
          </CyberReveal>

        </div>

        {/* ─── KẾT LUẬN: KHÔNG AI HOÀN TOÀN ĐÚNG HAY SAI ─── */}
        <CyberReveal
          theme="nexus"
          className="mt-14 sm:mt-20 p-6 sm:p-8 rounded-sm border border-white/10 bg-gradient-to-r from-blue-void/60 via-center-void to-orange-asphalt/60 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <span className="font-mono text-[11px] text-blue-chrome/60 uppercase tracking-widest block mb-2">
              // TỔNG HÒA NHÂN THỨC
            </span>
            <p className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-[1.4] sm:leading-[1.38]">
              &ldquo;{origin.conclusion}&rdquo;
            </p>
          </div>
        </CyberReveal>

      </div>
    </section>
  );
}
