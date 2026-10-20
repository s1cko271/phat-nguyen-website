"use client";

import { useState } from "react";
import { humanEquation } from "@/content/story";
import { CyberReveal, CyberStagger, CyberStaggerItem } from "@/components/CyberReveal";

export default function HumanEquationSection() {
  const [selectedPerson, setSelectedPerson] = useState<"A" | "B">("A");

  const personAResponse = {
    persona: "NGƯỜI A // TƯ DUY THẬN TRỌNG & RỦI RO",
    context: "Đã từng mất niềm tin vào các agency trước đây.",
    reaction: "Cần thấy bằng chứng thực tế, hỏi sâu về quy trình và đo lường trước khi quyết định.",
    insight: "Nếu dùng script bán hàng vồ vập → Khách lập tức khép lòng và từ chối vì cảm thấy bị ép.",
  };

  const personBResponse = {
    persona: "NGƯỜI B // TƯ DUY TỐC ĐỘ & ĐỘT PHÁ",
    context: "Đang mở rộng cơ sở mới, đối thủ đang ép thị phần.",
    reaction: "Quan tâm đến sự khác biệt và tốc độ triển khai, muốn biết ngay giải pháp có giúp đi nhanh hơn không.",
    insight: "Nếu đọc slide lý thuyết dài dòng → Khách mất kiên nhẫn và bỏ đi vì thấy quá chậm chạp.",
  };

  const current = selectedPerson === "A" ? personAResponse : personBResponse;

  return (
    <section
      id="human-equation"
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col justify-center border-t border-white/5 bg-center-void overflow-hidden"
      aria-label="Con người không phải một phương trình"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <CyberReveal direction="up">
          <div className="text-center max-w-5xl mx-auto mb-14 sm:mb-20">
            <div className="flex justify-center mb-3">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-blue-chrome/60 tracking-widest uppercase">
                <span className="w-2 h-2 bg-fissure-core" />
                <span>{humanEquation.sectionId} // {humanEquation.sectionLabel}</span>
              </div>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] text-white uppercase tracking-tight vn-safe-heading leading-[1.38] mb-6 lg:whitespace-nowrap">
              <span className="inline-block">CON NGƯỜI KHÔNG PHẢI</span>{" "}
              <span className="inline-block">MỘT PHƯƠNG TRÌNH.</span>
            </h2>

            <p className="font-body text-sm sm:text-base text-blue-chrome/80 max-w-2xl mx-auto leading-relaxed">
              Không có kịch bản mẫu nào áp dụng thành công cho tất cả mọi người. Mỗi con người là một thế giới trải nghiệm và tâm lý độc bản.
            </p>
          </div>
        </CyberReveal>

        {/* ─── SCENARIO CONSTANTS (BA HẰNG SỐ GIẢ ĐỊNH) ─── */}
        <CyberStagger className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
          {humanEquation.scenario.setup.map((item, idx) => (
            <CyberStaggerItem key={idx}>
              <div className="p-4 sm:p-5 rounded-sm border border-white/10 bg-white/[0.02] backdrop-blur-md text-center h-full flex flex-col justify-center">
                <span className="font-mono text-[10px] text-blue-data/80 uppercase tracking-widest block mb-1">
                  // HẰNG SỐ #{idx + 1}
                </span>
                <p className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-tight leading-snug">
                  {item}
                </p>
              </div>
            </CyberStaggerItem>
          ))}
        </CyberStagger>

        {/* ─── INTERACTIVE SIMULATION: 2 PHẢN ỨNG HOÀN TOÀN KHÁC BIỆT ─── */}
        <CyberReveal direction="up" reticles={true} telemetryCode="NEURAL_COGNITION.AB_MATRIX">
          <div className="rounded-sm border border-white/10 bg-center-void/90 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <span className="font-mono text-[10px] text-orange-spark uppercase tracking-widest block mb-1">
                // MÔ PHỎNG HÀNH VI TÂM LÝ:
              </span>
              <p className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-tight leading-[1.4] sm:leading-[1.38]">
                {humanEquation.scenario.punchline}
              </p>
            </div>

            {/* Selector Toggle */}
            <div className="flex items-center gap-2 p-1 rounded-sm bg-white/5 border border-white/10 w-fit">
              <button
                type="button"
                onClick={() => setSelectedPerson("A")}
                className={`px-4 py-1.5 rounded-sm font-mono text-xs font-bold uppercase transition-all ${
                  selectedPerson === "A"
                    ? "bg-blue-electric text-white shadow-[0_0_15px_rgba(0,102,255,0.4)]"
                    : "text-blue-chrome/70 hover:text-white"
                }`}
              >
                Khách Hàng A
              </button>

              <button
                type="button"
                onClick={() => setSelectedPerson("B")}
                className={`px-4 py-1.5 rounded-sm font-mono text-xs font-bold uppercase transition-all ${
                  selectedPerson === "B"
                    ? "bg-orange-molten text-white shadow-[0_0_15px_rgba(255,85,0,0.4)]"
                    : "text-orange-stencil/70 hover:text-white"
                }`}
              >
                Khách Hàng B
              </button>
            </div>
          </div>

          {/* Dynamic Card Display */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 space-y-4">
              <div className="p-4 rounded-sm border border-white/10 bg-white/[0.02]">
                <span className="font-mono text-[10px] text-blue-chrome/60 uppercase tracking-widest block mb-1">
                  ĐẶC ĐIỂM TÂM LÝ:
                </span>
                <p className="font-display font-black text-base sm:text-lg text-white">
                  {current.persona}
                </p>
              </div>

              <div className="p-4 rounded-sm border border-white/10 bg-white/[0.02]">
                <span className="font-mono text-[10px] text-blue-chrome/60 uppercase tracking-widest block mb-1">
                  BỐI CẢNH NỘI TÂM:
                </span>
                <p className="font-body text-xs sm:text-sm text-blue-chrome/90">
                  {current.context}
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <div className="p-5 rounded-sm bg-blue-void/60 border border-blue-electric/30">
                <span className="font-mono text-[10px] text-blue-data uppercase tracking-widest block mb-2 font-bold">
                  // PHẢN ỨNG THỰC TẾ TRƯỚC LỜI GIỚI THIỆU:
                </span>
                <p className="font-body text-sm sm:text-base text-white/95 leading-relaxed">
                  {current.reaction}
                </p>
              </div>

              <div className="p-4 rounded-sm bg-orange-asphalt/60 border border-orange-molten/30">
                <span className="font-mono text-[10px] text-orange-spark uppercase tracking-widest block mb-1 font-bold">
                  // BÀI HỌC CHO NGƯỜI LÀM SALES:
                </span>
                <p className="font-body text-xs sm:text-sm text-orange-stencil/90">
                  {current.insight}
                </p>
              </div>
            </div>
          </div>

        </div>
        </CyberReveal>

        {/* Closing statement */}
        <CyberReveal direction="up" delay={0.1}>
          <div className="mt-12 text-center">
            <p className="font-display font-black text-xl sm:text-2xl text-fissure-core uppercase tracking-tight">
              &ldquo;{humanEquation.closing}&rdquo;
            </p>
          </div>
        </CyberReveal>

      </div>
    </section>
  );
}
