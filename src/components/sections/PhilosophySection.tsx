"use client";

import { philosophy } from "@/content/story";
import CyberReveal, { CyberStagger, CyberStaggerItem } from "@/components/CyberReveal";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      suppressHydrationWarning
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col justify-center border-t border-white/5 bg-center-void overflow-hidden"
      aria-label="Triết lý Sales"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <CyberReveal theme="blue" className="mb-14 sm:mb-20">
          <div className="flex mb-3">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-blue-chrome/60 tracking-widest uppercase">
              <span className="w-2 h-2 bg-blue-electric" />
              <span>{philosophy.sectionId} // {philosophy.sectionLabel}</span>
            </div>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-6xl text-white uppercase tracking-tight vn-safe-heading leading-[1.42] sm:leading-[1.38] mb-8">
            {philosophy.title}
          </h2>

          {/* Hai Tuyên ngôn Triết lý Signature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <CyberReveal direction="right" theme="blue" reticles>
              <div className="p-6 sm:p-8 rounded-sm border border-blue-electric/30 bg-blue-void/80 shadow-[0_10px_30px_rgba(0,102,255,0.1)] cyber-card-glow h-full">
                <span className="font-mono text-[10px] text-blue-data uppercase tracking-widest block mb-2 font-semibold">
                  // TRIẾT LÝ #01 // MỤC ĐÍCH TÂM LÝ
                </span>
                <p className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-[1.42] sm:leading-[1.38]">
                  &ldquo;{philosophy.quotes[0]}&rdquo;
                </p>
              </div>
            </CyberReveal>

            <CyberReveal direction="left" theme="orange" reticles>
              <div className="p-6 sm:p-8 rounded-sm border border-orange-molten/30 bg-orange-asphalt/80 shadow-[0_10px_30px_rgba(255,85,0,0.1)] cyber-card-glow-orange h-full">
                <span className="font-mono text-[10px] text-orange-spark uppercase tracking-widest block mb-2 font-semibold">
                  // TRIẾT LÝ #02 // THÁI ĐỘ VỚI TỪ CHỐI
                </span>
                <p className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-[1.42] sm:leading-[1.38]">
                  &ldquo;{philosophy.quotes[1]}&rdquo;
                </p>
              </div>
            </CyberReveal>
          </div>
        </CyberReveal>

        {/* ─── NỘI SUY DỮ LIỆU: 6 CÂU TỰ VẤN NỘI TÂM ─── */}
        <CyberReveal
          theme="nexus"
          telemetryCode="FEEDBACK_LOOP // 06_QUERIES"
          className="p-6 sm:p-10 rounded-sm border border-white/10 bg-white/[0.02] backdrop-blur-md mb-12"
        >
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs text-blue-data uppercase tracking-widest block font-bold">
                // PHẢN XẠ ĐẦU TIÊN KHI KHÁCH NÓI &ldquo;KHÔNG&rdquo;:
              </span>
              <p className="font-body text-xs sm:text-sm text-blue-chrome/80 mt-1">
                Không phải &ldquo;Khách này khó&rdquo;. Mà là quay lại tự nhìn nhận chính mình:
              </p>
            </div>
            <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest hidden sm:inline">
              SELF_REFLECTION_CYCLE
            </span>
          </div>

          <CyberStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {philosophy.reflections.map((r, idx) => (
              <CyberStaggerItem key={idx}>
                <div className="p-3.5 rounded-sm bg-center-void/90 border border-white/5 font-mono text-xs text-white/90 flex items-start gap-2.5 hover:border-blue-electric/40 transition-colors h-full">
                  <span className="text-blue-electric font-bold">0{idx + 1}.</span>
                  <span>{r}</span>
                </div>
              </CyberStaggerItem>
            ))}
          </CyberStagger>
        </CyberReveal>

        {/* ─── SALES TỐT LÀ GÌ? ─── */}
        <CyberStagger className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {philosophy.principles.map((p, idx) => (
            <CyberStaggerItem key={idx}>
              <div className="p-5 rounded-sm border border-white/10 bg-center-void/80 flex items-center gap-3 hover:border-emerald-400/40 transition-colors">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                <p className="font-display font-bold text-base sm:text-lg text-white">
                  {p}
                </p>
              </div>
            </CyberStaggerItem>
          ))}
        </CyberStagger>

        {/* Chốt Caveat */}
        <CyberReveal direction="up" className="text-center pt-4">
          <p className="font-body text-xs sm:text-sm text-blue-chrome/70 italic max-w-2xl mx-auto">
            &ldquo;{philosophy.caveat}&rdquo;
          </p>
        </CyberReveal>

      </div>
    </section>
  );
}
