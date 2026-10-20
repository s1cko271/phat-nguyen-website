"use client";

import { method } from "@/content/story";
import CyberReveal, { CyberStagger, CyberStaggerItem } from "@/components/CyberReveal";

export default function MethodSection() {
  const readingList = [
    "Psychology",
    "Human Behavior",
    "Communication",
    "Negotiation",
    "Sales Strategy",
    "Business Dynamics",
    "Marketing Science",
    "Decision-Making",
    "Persuasion",
    "Customer Psychology",
  ];

  return (
    <section
      id="method"
      suppressHydrationWarning
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col justify-center border-t border-white/5 bg-orange-asphalt/70 concrete-texture overflow-hidden"
      aria-label="Thực chiến, nhưng có phương pháp"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <CyberReveal theme="orange" className="mb-14 sm:mb-20">
          <div className="flex mb-3">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-orange-spark tracking-widest uppercase">
              <span className="w-2 h-2 bg-orange-molten" />
              <span>{method.sectionId} // {method.sectionLabel}</span>
            </div>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl text-white uppercase tracking-tight vn-safe-heading leading-[1.38] mb-6 lg:whitespace-nowrap">
            {method.title}
          </h2>

          <p className="font-display font-bold text-lg sm:text-2xl text-orange-stencil/90 max-w-3xl leading-normal">
            &ldquo;{method.intro}&rdquo;
          </p>
        </CyberReveal>

        {/* ─── 5-STEP CONTINUOUS ITERATION CYCLE ─── */}
        <div className="mb-14">
          <span className="font-mono text-xs text-orange-spark uppercase tracking-widest block mb-4 font-semibold">
            // CHU KỲ NÂNG CẤP NĂNG LỰC LIÊN TỤC:
          </span>

          <CyberStagger className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {method.process.map((step, idx) => (
              <CyberStaggerItem key={idx}>
                <div
                  className="p-5 rounded-sm bg-orange-concrete/80 border border-orange-iron/80 relative overflow-hidden group hover:border-orange-molten transition-colors cyber-card-glow-orange h-full"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-orange-molten font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs text-white/20">→</span>
                  </div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                    {step}
                  </h3>
                </div>
              </CyberStaggerItem>
            ))}
          </CyberStagger>
        </div>

        {/* ─── 6 THÀNH TỐ TỔNG HÒA & RESEARCH GROUND ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cột trái: 6 thành tố kết hợp */}
          <div className="lg:col-span-6">
            <CyberReveal direction="left" reticles={true} telemetryCode="SYS.HEX_COMBINATORIAL">
              <div className="p-6 sm:p-8 rounded-sm bg-center-void/90 border border-white/10 space-y-4">
                <span className="font-mono text-xs text-blue-data uppercase tracking-widest block font-bold">
                  // 6 THÀNH TỐ KẾT HỢP:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {method.combination.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-sm bg-white/[0.02] border border-white/5 font-mono text-xs sm:text-sm text-white"
                    >
                      <span className="text-orange-molten font-bold">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CyberReveal>
          </div>

          {/* Cột phải: Lĩnh vực nghiên cứu & kiểm chứng thực địa */}
          <div className="lg:col-span-6">
            <CyberReveal direction="right" reticles={true} telemetryCode="FIELD.EMPIRICAL_TESTBED">
              <div className="p-6 sm:p-8 rounded-sm bg-center-void/90 border border-white/10 space-y-4">
                <span className="font-mono text-xs text-orange-spark uppercase tracking-widest block font-bold">
                  // LĨNH VỰC NGHIÊN CỨU & KIỂM CHỨNG:
                </span>
                <div className="flex flex-wrap gap-2">
                  {readingList.map((domain, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-sm bg-orange-concrete/50 border border-orange-iron text-xs font-mono text-orange-stencil"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-body text-xs sm:text-sm text-blue-chrome/90 italic">
                    &ldquo;Đem lý thuyết vào thực tế để kiểm chứng — thứ nào thật sự hoạt động thì giữ lại, thứ nào sáo rỗng thì loại bỏ.&rdquo;
                  </p>
                </div>
              </div>
            </CyberReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
