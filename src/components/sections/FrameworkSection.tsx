"use client";

import { framework } from "@/content/story";
import { CyberReveal, CyberStagger, CyberStaggerItem } from "@/components/CyberReveal";

export default function FrameworkSection() {
  return (
    <section
      id="framework"
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col justify-center border-t border-white/5 bg-blue-void/90 blueprint-grid overflow-hidden"
      aria-label="Cách tôi tiếp cận Sales — Framework 5 bước"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <CyberReveal direction="up">
          <div className="mb-14 sm:mb-20 text-center sm:text-left">
            <div className="flex mb-3">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-blue-chrome/60 tracking-widest uppercase">
                <span className="w-2 h-2 bg-blue-electric" />
                <span>{framework.sectionId} // {framework.sectionLabel}</span>
              </div>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-6xl text-white uppercase tracking-tight vn-safe-heading leading-[1.42] sm:leading-[1.38] mb-4">
              {framework.title}
            </h2>

            <p className="font-mono text-xs sm:text-sm text-blue-data uppercase tracking-wider leading-relaxed">
              FRAMEWORK 5 BƯỚC: LẮNG NGHE → THẤU HIỂU → PHÂN TÍCH → THÍCH NGHI → GIẢI QUYẾT
            </p>
          </div>
        </CyberReveal>

        {/* ─── VERTICAL TELEMETRY PROCESS TIMELINE ─── */}
        <CyberStagger className="relative pl-6 sm:pl-10 space-y-8 sm:space-y-10 border-l border-blue-electric/30">
          
          {framework.steps.map((step, idx) => (
            <CyberStaggerItem key={idx}>
              <div className="relative group">
                {/* Timeline Marker Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-blue-void border-2 border-blue-electric group-hover:border-blue-data group-hover:bg-blue-electric transition-colors flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-white" />
                </div>

                {/* Step Card */}
                <div className="p-5 sm:p-7 rounded-sm border border-blue-electric/25 bg-blue-void/80 hover:border-blue-electric/60 hover:bg-blue-grid/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-electric/15 pb-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-blue-data">
                        PHASE // 0{idx + 1}
                      </span>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight uppercase">
                        {step.label}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-blue-chrome/50 uppercase tracking-widest hidden sm:inline">
                      STEP_EXECUTION
                    </span>
                  </div>

                  <p className="font-body text-sm sm:text-base text-blue-glass/95 leading-relaxed">
                    &ldquo;{step.description}&rdquo;
                  </p>
                </div>
              </div>
            </CyberStaggerItem>
          ))}

        </CyberStagger>

      </div>
    </section>
  );
}
