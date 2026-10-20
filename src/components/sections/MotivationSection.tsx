"use client";

import { motivation } from "@/content/story";
import { CyberReveal, CyberStagger, CyberStaggerItem } from "@/components/CyberReveal";

export default function MotivationSection() {
  return (
    <section
      id="motivation"
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col justify-center border-t border-white/5 bg-center-void overflow-hidden"
      aria-label="Tại sao tôi thích nghề này?"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <CyberReveal direction="up">
          <div className="mb-14 sm:mb-20 text-center sm:text-left">
            <div className="flex mb-3">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-orange-spark tracking-widest uppercase">
                <span className="w-2 h-2 bg-orange-molten" />
                <span>{motivation.sectionId} // {motivation.sectionLabel}</span>
              </div>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-6xl text-white uppercase tracking-tight vn-safe-heading leading-[1.28] sm:leading-[1.32] mb-4">
              {motivation.title}
            </h2>

            <p className="font-body text-sm sm:text-base text-blue-chrome/80 max-w-2xl">
              Sales không phải là một công việc bán hàng cơ học — đó là môi trường rèn luyện khắt khe nhất để trở thành một phiên bản sắc bén hơn mỗi ngày.
            </p>
          </div>
        </CyberReveal>

        {/* ─── CÔNG THỨC MINH BẠCH & 7 TRỤ CỘT NÂNG CẤP BẢN THÂN ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Cột trái: 7 Trục nâng cấp bản thân */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-blue-data uppercase tracking-widest block mb-4 font-semibold">
              // 7 GIÁ TRỊ PHÁT TRIỂN NGHỀ NGHIỆP MANG LẠI:
            </span>

            <CyberStagger className="space-y-2.5">
              {motivation.growth.map((item, idx) => (
                <CyberStaggerItem key={idx}>
                  <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-sm bg-white/[0.02] border border-white/5 hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-orange-molten">
                        0{idx + 1}
                      </span>
                      <span className="font-display font-bold text-sm sm:text-base text-white">
                        {item}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-blue-chrome/40 uppercase">
                      PROGRESSION
                    </span>
                  </div>
                </CyberStaggerItem>
              ))}
            </CyberStagger>
          </div>

          {/* Cột phải: Mối liên hệ Nỗ lực + Năng lực + Kết quả */}
          <div className="lg:col-span-5">
            <CyberReveal direction="right" reticles={true} telemetryCode="GROWTH.CORRELATION_V1">
              <div className="p-6 sm:p-8 rounded-sm border border-orange-molten/30 bg-orange-asphalt/80 concrete-texture space-y-6">
                <div>
                  <span className="font-mono text-[10px] text-orange-spark uppercase tracking-widest block mb-2 font-bold">
                    // QUY LUẬT TƯƠNG QUAN TRỰC TIẾP:
                  </span>
                  <div className="p-4 rounded-sm bg-orange-concrete/80 border border-orange-iron text-center">
                    <p className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight leading-snug">
                      {motivation.formula}
                    </p>
                    <p className="font-mono text-xs text-orange-stencil/80 mt-1">
                      {motivation.formulaNote}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-orange-molten/20">
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-2">
                    // ÁP LỰC ĐỘNG CƠ:
                  </span>
                  <p className="font-display font-bold text-lg sm:text-xl text-white leading-snug">
                    &ldquo;{motivation.closing}&rdquo;
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
