"use client";

import { businessMindset } from "@/content/story";
import CyberReveal, { CyberStagger, CyberStaggerItem } from "@/components/CyberReveal";

export default function BusinessMindsetSection() {
  return (
    <section
      id="business-mindset"
      suppressHydrationWarning
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col justify-center border-t border-white/5 bg-blue-void/90 blueprint-grid overflow-hidden"
      aria-label="Tư duy doanh nghiệp"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <CyberReveal theme="blue" className="mb-14 sm:mb-20">
          <div className="flex mb-3">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-blue-chrome/60 tracking-widest uppercase">
              <span className="w-2 h-2 bg-blue-electric" />
              <span>{businessMindset.sectionId} // {businessMindset.sectionLabel}</span>
            </div>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[3rem] text-white uppercase tracking-tight vn-safe-heading leading-[1.38] mb-4">
            <span className="block pb-1 sm:pb-2 lg:whitespace-nowrap">{businessMindset.title}</span>
            <span className="block text-blue-electric drop-shadow-[0_0_20px_rgba(0,102,255,0.4)] lg:whitespace-nowrap">
              {businessMindset.titleContinued}
            </span>
          </h2>

          <div className="p-4 sm:p-5 rounded-sm bg-blue-void/95 border-l-4 border-blue-electric border-y border-r border-white/10 max-w-3xl">
            <p className="font-body text-xs sm:text-base text-blue-glass/90 leading-relaxed italic">
              &ldquo;{businessMindset.clarification}&rdquo;
            </p>
          </div>
        </CyberReveal>

        {/* ─── 9 CÂU HỎI KIỂM TOÁN TỒN TẠI DOANH NGHIỆP ─── */}
        <CyberReveal
          reticles
          theme="blue"
          telemetryCode="AUDIT // 09_VITAL_SIGNS"
          className="p-6 sm:p-10 rounded-sm border border-blue-electric/30 bg-blue-void/90 shadow-[0_15px_40px_rgba(0,0,0,0.7)] cyber-card-glow"
        >
          <div className="flex flex-wrap items-center justify-between border-b border-blue-electric/20 pb-4 mb-6">
            <div>
              <span className="font-mono text-xs text-blue-data uppercase tracking-widest block font-bold">
                // 9 CÂU HỎI THẨM ĐỊNH HIỆN TRẠNG DOANH NGHIỆP:
              </span>
              <p className="font-body text-xs text-blue-chrome/70 mt-0.5">
                Những điểm mù thường khiến doanh nghiệp mất khách mà không hề hay biết
              </p>
            </div>
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest hidden sm:inline">
              BUSINESS_AUDIT_PROTOCOL
            </span>
          </div>

          <CyberStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {businessMindset.businessQuestions.map((q, idx) => (
              <CyberStaggerItem key={idx}>
                <div className="group p-4 rounded-sm bg-blue-grid/30 border border-blue-frame/60 hover:border-blue-electric hover:bg-blue-grid/60 transition-all duration-300 flex flex-col justify-between h-full">
                  <span className="font-mono text-[10px] text-blue-data/80 uppercase tracking-widest font-bold mb-2">
                    AUDIT_INDEX // 0{idx + 1}
                  </span>
                  <p className="font-body text-xs sm:text-sm font-semibold text-white/95 group-hover:text-white leading-relaxed">
                    {q}
                  </p>
                </div>
              </CyberStaggerItem>
            ))}
          </CyberStagger>
        </CyberReveal>

      </div>
    </section>
  );
}
