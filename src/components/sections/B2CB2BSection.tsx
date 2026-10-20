"use client";

import { b2cb2b } from "@/content/story";
import { CyberReveal } from "@/components/CyberReveal";

export default function B2CB2BSection() {
  return (
    <section
      id="b2c-b2b"
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col justify-center border-t border-white/5 bg-blue-void/80 overflow-hidden"
      aria-label="B2C × B2B — Hai miền đất Sales"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <CyberReveal direction="up">
          <div className="text-center mb-14 sm:mb-20">
            <div className="flex justify-center mb-3">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-blue-chrome/60 tracking-widest uppercase">
                <span className="w-2 h-2 bg-blue-electric" />
                <span>{b2cb2b.sectionId} // {b2cb2b.sectionLabel}</span>
                <span className="w-2 h-2 bg-orange-molten" />
              </div>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight vn-safe-heading leading-[1.42] sm:leading-[1.38] mb-4">
              <span className="text-blue-electric">B2C</span>{" "}
              <span className="text-white/30">×</span>{" "}
              <span className="text-orange-molten">B2B</span>
            </h2>

            <p className="font-body text-sm sm:text-base text-blue-chrome/80 max-w-xl mx-auto">
              Không đóng khung vào một kênh duy nhất. Khả năng dịch chuyển linh hoạt giữa tâm lý cá nhân và bài toán tài chính doanh nghiệp.
            </p>
          </div>
        </CyberReveal>

        {/* ─── DUAL ARENA COMPARISON ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-12">
          
          {/* CỘT B2C: CẢM XÚC & TRẢI NGHIỆM */}
          <CyberReveal direction="left" reticles={true} telemetryCode="B2C.TACTICAL_SPEED">
            <div className="p-6 sm:p-8 rounded-sm bg-blue-void/90 border border-blue-electric/30 blueprint-grid relative h-full">
              <div className="flex items-center justify-between border-b border-blue-electric/20 pb-4 mb-6">
                <div>
                  <span className="font-mono text-xs text-blue-data uppercase tracking-widest block font-bold">
                    // CONSUMER DYNAMICS
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1 leading-snug">
                    B2C SALES
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-sm bg-blue-grid text-blue-electric font-mono text-xs font-bold border border-blue-frame">
                  SPEED
                </span>
              </div>

              <div className="space-y-3">
                {b2cb2b.b2c.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-sm bg-blue-void border border-white/5 font-mono text-xs sm:text-sm text-blue-glass/90"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-electric shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </CyberReveal>

          {/* CỘT B2B: MÔ HÌNH & ROI */}
          <CyberReveal direction="right" reticles={true} telemetryCode="B2B.ENTERPRISE_SCALE">
            <div className="p-6 sm:p-8 rounded-sm bg-orange-asphalt/90 border border-orange-molten/30 concrete-texture relative h-full">
              <div className="flex items-center justify-between border-b border-orange-molten/20 pb-4 mb-6">
                <div>
                  <span className="font-mono text-xs text-orange-spark uppercase tracking-widest block font-bold">
                    // ENTERPRISE DYNAMICS
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                    B2B SALES
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-sm bg-orange-concrete text-orange-molten font-mono text-xs font-bold border border-orange-iron">
                  SCALE
                </span>
              </div>

              <div className="space-y-3">
                {b2cb2b.b2b.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-sm bg-orange-asphalt border border-white/5 font-mono text-xs sm:text-sm text-orange-stencil/90"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-molten shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </CyberReveal>

        </div>

        {/* ─── KẾT LUẬN TOÀN DIỆN ─── */}
        <CyberReveal direction="up" delay={0.1} reticles={true}>
          <div className="p-6 sm:p-8 rounded-sm border border-fissure-core/30 bg-center-void/90 text-center max-w-2xl mx-auto shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <span className="font-mono text-[10px] text-fissure-core/60 uppercase tracking-widest block mb-2">
              // ĐÍCH ĐẾN NĂNG LỰC:
            </span>
            <p className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              &ldquo;{b2cb2b.conclusion}&rdquo;
            </p>
          </div>
        </CyberReveal>

      </div>
    </section>
  );
}
