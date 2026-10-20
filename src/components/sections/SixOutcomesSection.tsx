"use client";

import { sixOutcomes } from "@/content/story";
import CyberReveal, { CyberStagger, CyberStaggerItem } from "@/components/CyberReveal";

export default function SixOutcomesSection() {
  return (
    <section
      id="six-outcomes"
      suppressHydrationWarning
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col justify-center border-t border-white/5 bg-center-void overflow-hidden"
      aria-label="Tôi giúp doanh nghiệp xây điều gì? — 6 kết quả thực chất"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <CyberReveal theme="blue" className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-blue-chrome/60 tracking-widest uppercase">
              <span className="w-2 h-2 bg-blue-electric" />
              <span>{sixOutcomes.sectionId} // {sixOutcomes.sectionLabel}</span>
            </div>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-white uppercase tracking-tight vn-safe-heading leading-[1.38] mb-4 lg:whitespace-nowrap">
            <span className="inline-block">TÔI GIÚP DOANH NGHIỆP</span>{" "}
            <span className="inline-block text-blue-chrome">XÂY ĐIỀU GÌ?</span>
          </h2>

          <p className="font-body text-sm sm:text-base text-blue-chrome/80 max-w-2xl mx-auto leading-relaxed">
            Không bán những gói dịch vụ vô hồn. Tập trung vào 6 kết quả thực chất quyết định sự tồn tại và tăng trưởng của doanh nghiệp.
          </p>
        </CyberReveal>

        {/* ─── 6 COMMAND BENTO CARDS ─── */}
        <CyberStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sixOutcomes.outcomes.map((item, idx) => (
            <CyberStaggerItem key={idx}>
              <div className="p-6 sm:p-7 rounded-sm border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-blue-electric/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group cyber-card-glow h-full">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="font-mono text-xs font-bold text-blue-data">
                      OUTCOME_0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-blue-electric/40 group-hover:bg-blue-electric group-hover:scale-125 transition-all" />
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-snug mb-3">
                    {item.label}
                  </h3>
                </div>

                <div className="p-3.5 rounded-sm bg-center-void/80 border border-white/5">
                  <p className="font-body text-xs sm:text-sm text-blue-glass/90 leading-relaxed italic">
                    &ldquo;{item.question}&rdquo;
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
