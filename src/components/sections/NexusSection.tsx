"use client";

import { nexus } from "@/content/story";
import CyberReveal, { CyberStagger, CyberStaggerItem } from "@/components/CyberReveal";

export default function NexusSection() {
  return (
    <section
      id="nexus"
      suppressHydrationWarning
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-6 sm:px-12 flex flex-col justify-center border-t border-white/5 overflow-hidden bg-center-void/60"
      aria-label="Điểm Giao Nhau"
    >
      {/* Vệt năng lượng giao thoa trung tâm */}
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-blue-electric/[0.08] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-orange-molten/[0.08] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
        
        {/* Header Section */}
        <CyberReveal theme="nexus">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-blue-chrome/60 tracking-widest uppercase">
              <span className="w-2 h-2 bg-fissure-core animate-ping" />
              <span>{nexus.sectionId} // {nexus.sectionLabel}</span>
            </div>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight vn-safe-heading mb-12">
            {nexus.title}
          </h2>
        </CyberReveal>

        {/* ─── DUAL POLAR QUOTES ─── */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 mb-16 text-left sm:text-center">
          <CyberReveal direction="right" theme="blue">
            <div className="p-6 sm:p-8 rounded-sm border border-blue-electric/30 bg-blue-void/80 shadow-[0_0_25px_rgba(0,102,255,0.1)]">
              <p className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-blue-glass uppercase tracking-tight leading-[1.4] sm:leading-[1.38]">
                &ldquo;{nexus.quoteTop}&rdquo;
              </p>
            </div>
          </CyberReveal>

          <CyberReveal direction="left" theme="orange">
            <div className="p-6 sm:p-8 rounded-sm border border-orange-molten/30 bg-orange-asphalt/80 shadow-[0_0_25px_rgba(255,85,0,0.1)]">
              <p className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-orange-stencil uppercase tracking-tight leading-[1.4] sm:leading-[1.38]">
                &ldquo;{nexus.quoteBottom}&rdquo;
              </p>
            </div>
          </CyberReveal>
        </div>

        {/* ─── FORMULA: CHIẾN LƯỢC × SÁNG TẠO × TÂM LÝ × THỰC THI ─── */}
        <CyberReveal theme="nexus" reticles telemetryCode="FORMULA // DUAL_CORE" className="p-6 sm:p-8 lg:p-10 rounded-sm border border-white/10 bg-white/[0.02] backdrop-blur-xl relative overflow-hidden mb-12">
          {/* Tag công thức */}
          <span className="font-mono text-xs text-fissure-core/80 uppercase tracking-widest block mb-4">
            // CÔNG THỨC VẬN HÀNH:
          </span>

          <div className="font-display font-black text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-tight vn-safe-heading leading-[1.38] sm:leading-[1.4] mb-8">
            <div className="mb-2.5 sm:mb-4">
              <span className="text-blue-electric">CHIẾN LƯỢC</span>{" "}
              <span className="text-white/30 mx-1 sm:mx-2">×</span>{" "}
              <span className="text-orange-molten">SÁNG TẠO</span>{" "}
              <span className="text-white/30 mx-1 sm:mx-2">×</span>
            </div>
            <div>
              <span className="text-blue-data">TÂM LÝ</span>{" "}
              <span className="text-white/30 mx-1 sm:mx-2">×</span>{" "}
              <span className="text-fissure-core">THỰC THI</span>
            </div>
          </div>

          {/* Chi tiết 4 thành phần */}
          <CyberStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {nexus.formula.items.map((item, idx) => (
              <CyberStaggerItem key={idx}>
                <div className="p-4 rounded-sm bg-center-void/90 border border-white/5 space-y-1.5 hover:border-white/20 transition-colors h-full">
                  <span className="font-mono text-xs uppercase font-bold text-blue-electric">
                    [{idx + 1}] {item.term}
                  </span>
                  <p className="font-body text-xs sm:text-sm text-blue-chrome/90">
                    {item.meaning}
                  </p>
                </div>
              </CyberStaggerItem>
            ))}
          </CyberStagger>
        </CyberReveal>

        {/* ─── STANCE: TÔI DÙNG CẢ HAI ─── */}
        <CyberReveal direction="up" theme="nexus" className="inline-block border-b-2 border-fissure-core/60 pb-2">
          <p className="font-display font-black text-2xl sm:text-3xl text-fissure-core uppercase tracking-tight">
            &ldquo;{nexus.stance}&rdquo;
          </p>
        </CyberReveal>

      </div>
    </section>
  );
}
