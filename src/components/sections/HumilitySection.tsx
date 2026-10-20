"use client";

import { humility } from "@/content/story";
import { CyberReveal, CyberStagger, CyberStaggerItem } from "@/components/CyberReveal";

export default function HumilitySection() {
  return (
    <section
      id="humility"
      className="relative min-h-[90vh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col justify-center border-t border-white/5 bg-center-void overflow-hidden text-center"
      aria-label="Tôi vẫn còn rất xa đích đến — Khiêm tốn và Chân thực"
    >
      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <CyberReveal direction="up">
          <div className="mb-12 sm:mb-16">
            <div className="flex justify-center mb-3">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-blue-chrome/60 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>{humility.sectionId} // {humility.sectionLabel}</span>
              </div>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-white uppercase tracking-tight vn-safe-heading leading-[1.38] mb-4 lg:whitespace-nowrap">
              <span className="inline-block">TÔI VẪN CÒN</span>{" "}
              <span className="inline-block text-blue-chrome">RẤT XA ĐÍCH ĐẾN.</span>
            </h2>

            <p className="font-mono text-xs sm:text-sm text-blue-chrome/70 uppercase tracking-widest leading-relaxed">
              // TỰ NHÌN NHẬN BẢN THÂN DƯỚI GÓC NHÌN THỰC TẾ
            </p>
          </div>
        </CyberReveal>

        {/* ─── 6 KHOẢNG TRỐNG CHƯA HOÀN HẢO ─── */}
        <CyberStagger className="space-y-3 mb-14 text-left max-w-2xl mx-auto">
          {humility.items.map((item, idx) => (
            <CyberStaggerItem key={idx}>
              <div className="p-4 rounded-sm border border-white/5 bg-white/[0.01] hover:border-white/15 transition-colors flex items-start gap-3">
                <span className="font-mono text-xs text-white/30 shrink-0 pt-0.5">
                  —
                </span>
                <p className="font-body text-xs sm:text-sm text-blue-glass/85 leading-relaxed">
                  {item}
                </p>
              </div>
            </CyberStaggerItem>
          ))}
        </CyberStagger>

        {/* ─── TÂM THẾ TRƯỞNG THÀNH ─── */}
        <CyberReveal direction="up" delay={0.15} reticles={true} telemetryCode="ETHOS.HUMILITY_VECTOR">
          <div className="p-6 sm:p-8 rounded-sm border border-white/10 bg-white/[0.02] max-w-2xl mx-auto">
            <p className="font-display font-bold text-base sm:text-xl text-white leading-relaxed sm:leading-loose">
              &ldquo;{humility.closing}&rdquo;
            </p>
          </div>
        </CyberReveal>

      </div>
    </section>
  );
}
