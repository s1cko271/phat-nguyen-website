"use client";

import Image from "next/image";
import { currentWork } from "@/content/story";
import CyberReveal from "@/components/CyberReveal";

export default function CurrentWorkSection() {
  return (
    <section
      id="current-work"
      suppressHydrationWarning
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col justify-center border-t border-white/5 bg-orange-asphalt/80 concrete-texture overflow-hidden"
      aria-label="Những gì tôi đang làm — Phạm vi thực chiến"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <CyberReveal theme="orange" className="mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-orange-spark tracking-widest uppercase mb-3">
            <span className="w-2 h-2 bg-orange-molten" />
            <span>{currentWork.sectionId} // {currentWork.sectionLabel}</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-6xl text-white uppercase tracking-tight vn-safe-heading leading-[1.28] sm:leading-[1.32] mb-4">
            {currentWork.title}
          </h2>

          <p className="font-mono text-xs sm:text-sm text-orange-stencil/80 uppercase tracking-wider">
            // CÔNG CỤ CHỈ LÀ PHƯƠNG TIỆN — MỤC TIÊU LÀ HIỆU QUẢ THỰC TẾ
          </p>
        </CyberReveal>

        {/* ─── GRID: SERVICES + INDUSTRIES + CHARACTER ORANGE PHONE-EYE ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Cột 1 & 2: Dịch vụ & Ngành (span-8) */}
          <CyberReveal direction="right" theme="orange" className="lg:col-span-8 space-y-8">
            
            {/* 14 Công cụ & Mảng triển khai */}
            <div className="p-6 sm:p-8 rounded-sm bg-orange-asphalt/90 border border-orange-molten/30 shadow-[0_10px_30px_rgba(0,0,0,0.6)] cyber-card-glow-orange">
              <span className="font-mono text-xs text-orange-spark uppercase tracking-widest block mb-4 font-bold">
                // 14 MẢNG & CÔNG CỤ TRIỂN KHAI:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentWork.services.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-sm bg-orange-concrete/80 border border-orange-iron font-mono text-xs text-white hover:border-orange-molten hover:text-orange-spark transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Các ngành thực địa phục vụ */}
            <div className="p-6 sm:p-8 rounded-sm bg-orange-asphalt/90 border border-white/10">
              <span className="font-mono text-xs text-blue-data uppercase tracking-widest block mb-4 font-bold">
                // CÁC NGÀNH NGHỀ ĐANG PHỤC VỤ (US & CANADA):
              </span>
              <div className="flex flex-wrap gap-2">
                {currentWork.industries.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-sm bg-center-void/80 border border-white/10 font-mono text-xs text-blue-glass/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Câu hỏi lớn chốt hạ */}
            <div className="p-5 rounded-sm bg-gradient-to-r from-orange-concrete via-center-void to-orange-asphalt border border-orange-molten/40">
              <span className="font-mono text-[10px] text-orange-spark uppercase tracking-widest block mb-1">
                // CÂU HỎI LỚN XUYÊN SUỐT:
              </span>
              <p className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-tight leading-snug">
                &ldquo;{currentWork.bigQuestion}&rdquo;
              </p>
            </div>

          </CyberReveal>

          {/* Cột 3: Character ORANGE phone-eye (span-4) */}
          <CyberReveal direction="left" theme="orange" className="lg:col-span-4 flex flex-col justify-center items-center relative">
            <div className="absolute w-[260px] h-[340px] rounded-full bg-orange-molten/20 blur-3xl pointer-events-none" />

            <div className="relative flex flex-col items-center">
              <div className="relative w-[240px] h-[360px] sm:w-[280px] sm:h-[420px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                <Image
                  src="/assets/cutout/char-orange-phone-eye.webp"
                  alt="Phat Nguyen — Thực địa Orange World"
                  fill
                  sizes="(max-width: 640px) 240px, 280px"
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="mt-3 px-3.5 py-1.5 bg-center-void/90 border border-orange-molten/40 rounded-sm font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-orange-spark shadow-[0_0_15px_rgba(255,85,0,0.2)] flex items-center gap-2 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-molten animate-ping" />
                <span>UNIT_02 // FIELD_OPERATIONS</span>
              </div>
            </div>
          </CyberReveal>

        </div>

      </div>
    </section>
  );
}
