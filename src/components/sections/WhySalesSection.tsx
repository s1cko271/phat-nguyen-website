"use client";

import { whySales } from "@/content/story";
import CyberReveal, { CyberStagger, CyberStaggerItem } from "@/components/CyberReveal";

export default function WhySalesSection() {
  return (
    <section
      id="why-sales"
      suppressHydrationWarning
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col justify-center border-t border-white/5 bg-blue-void/80 blueprint-grid overflow-hidden"
      aria-label="Tại sao tôi chọn Sales?"
    >
      {/* Blue glow halo */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-blue-electric/[0.07] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <CyberReveal theme="blue" className="mb-14 sm:mb-20">
          <div className="flex mb-3">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-blue-chrome/60 tracking-widest uppercase">
              <span className="w-2 h-2 bg-blue-electric" />
              <span>{whySales.sectionId} // {whySales.sectionLabel}</span>
            </div>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-6xl text-white uppercase tracking-tight vn-safe-heading leading-[1.38] sm:leading-[1.35] mb-6">
            {whySales.title}
          </h2>

          {/* Hook statement - Duality of Speaking vs Listening */}
          <div className="space-y-3 sm:space-y-4 max-w-5xl">
            <p className="font-display font-bold text-xl sm:text-2xl lg:text-[2rem] text-blue-chrome/60 uppercase tracking-tight vn-safe-heading leading-[1.38] lg:whitespace-nowrap">
              &ldquo;{whySales.hook}&rdquo;
            </p>
            <p className="font-display font-black text-2xl sm:text-3xl lg:text-[2.65rem] xl:text-[3rem] text-blue-electric uppercase tracking-tight vn-safe-heading leading-[1.38] drop-shadow-[0_0_20px_rgba(0,102,255,0.4)] lg:whitespace-nowrap">
              &ldquo;{whySales.hookContinued}&rdquo;
            </p>
          </div>
        </CyberReveal>

        {/* ─── RADAR / TELEMETRY QUESTION MATRIX ─── */}
        <CyberReveal
          reticles
          theme="blue"
          telemetryCode="RADAR // 7_QUESTIONS"
          className="rounded-sm border border-blue-electric/30 bg-blue-void/90 p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.7)] cyber-card-glow"
        >
          {/* Top telemetry bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-blue-electric/20 pb-4 mb-6 font-mono text-[10px] sm:text-xs text-blue-data">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-data animate-pulse" />
              HUMAN_INQUIRY_FEED // 7_CORE_QUESTIONS
            </span>
            <span className="text-blue-chrome/50 hidden sm:inline">
              METHODOLOGY: OBSERVATIONAL_LISTENING
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Cột trái: Tuyên ngôn lý do */}
            <div className="md:col-span-4 flex flex-col justify-between border-b md:border-b-0 md:border-r border-blue-electric/20 pb-6 md:pb-0 md:pr-6">
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-blue-data/80 block">
                  // BẢN CHẤT LẮNG NGHE:
                </span>
                <p className="font-body text-xs sm:text-sm text-blue-chrome/90 leading-relaxed">
                  Lắng nghe không phải là khoảng chờ thụ động để đến lượt mình nói. Lắng nghe là quá trình giải mã thế giới nội tâm của người đối diện.
                </p>
              </div>

              <div className="p-3 bg-blue-grid/50 border border-blue-frame rounded-sm mt-6">
                <span className="font-mono text-[10px] text-blue-electric uppercase tracking-wider block font-bold mb-1">
                  MỤC TIÊU CUỐI CÙNG:
                </span>
                <p className="font-body text-xs text-white/90">
                  Hiểu đúng nguyên nhân trước khi đưa ra bất kỳ kết luận nào.
                </p>
              </div>
            </div>

            {/* Cột phải: 7 câu hỏi tự vấn Phat luôn đặt ra */}
            <CyberStagger className="md:col-span-8 space-y-2.5">
              {whySales.questions.map((q, idx) => (
                <CyberStaggerItem key={idx}>
                  <div className="group flex items-start gap-3 p-3 sm:p-3.5 rounded-sm bg-blue-void/80 border border-white/5 hover:border-blue-electric/40 hover:bg-blue-grid/30 transition-all duration-300">
                    <span className="font-mono text-xs font-bold text-blue-electric group-hover:text-blue-data transition-colors shrink-0 pt-0.5">
                      [{String(idx + 1).padStart(2, "0")}]
                    </span>
                    <p className="font-mono text-xs sm:text-sm text-white/90 group-hover:text-white transition-colors leading-relaxed">
                      {q}
                    </p>
                  </div>
                </CyberStaggerItem>
              ))}
            </CyberStagger>

          </div>
        </CyberReveal>

      </div>
    </section>
  );
}
