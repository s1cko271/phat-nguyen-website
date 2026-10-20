"use client";

import { caseStudy } from "@/content/story";
import { CyberReveal } from "@/components/CyberReveal";

export default function CaseStudySection() {
  return (
    <section
      id="case-study"
      suppressHydrationWarning
      className="relative min-h-[45vh] sm:min-h-[55vh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col items-center justify-center border-t border-white/5 bg-center-void overflow-hidden text-center"
      aria-label="Case Study — Hồ sơ thực chiến"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <CyberReveal theme="nexus" className="text-center">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-blue-chrome/60 tracking-widest uppercase">
              <span className="w-2 h-2 bg-blue-electric" />
              <span>{caseStudy.sectionId} // {caseStudy.sectionLabel}</span>
              <span className="w-2 h-2 bg-orange-molten" />
            </div>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight vn-safe-heading leading-[1.42] sm:leading-[1.38] mb-4">
            {caseStudy.title}
          </h2>
        </CyberReveal>

        {/* Khung trống sẵn sàng để bổ sung nội dung case study sau */}
        <div id="case-study-content" className="w-full mt-6" />

      </div>
    </section>
  );
}
