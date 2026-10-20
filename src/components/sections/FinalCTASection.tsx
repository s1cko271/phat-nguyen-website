"use client";

import Image from "next/image";
import { finalCTA, contactInfo } from "@/content/story";
import CyberReveal from "@/components/CyberReveal";

export default function FinalCTASection() {
  return (
    <section
      id="contact"
      suppressHydrationWarning
      className="relative min-h-[100dvh] w-full py-24 sm:py-32 px-4 sm:px-12 flex flex-col justify-between border-t border-white/5 bg-center-void overflow-hidden"
      aria-label="Kết nối — Hành động vì doanh nghiệp của bạn"
    >
      {/* Vệt năng lượng giao thoa cuối trang */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-blue-electric/10 via-orange-molten/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center">
        
        {/* Section Header */}
        <CyberReveal theme="nexus" className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-blue-chrome/60 tracking-widest uppercase">
              <span className="w-2 h-2 bg-blue-electric" />
              <span>{finalCTA.sectionId} // {finalCTA.sectionLabel}</span>
              <span className="w-2 h-2 bg-orange-molten" />
            </div>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight vn-safe-heading leading-[1.28] sm:leading-[1.32] mb-4">
            {finalCTA.hook}
          </h2>

          <div className="pt-1">
            <p className="inline-block font-display font-black text-2xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-electric via-fissure-core to-orange-molten uppercase tracking-tight leading-snug vn-safe-heading">
              {finalCTA.hookContinued}
            </p>
          </div>
        </CyberReveal>

        {/* ─── INTERACTIVE CONTACT HUB ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto w-full mb-16">
          
          {/* Cột Trái: Các kênh liên lạc chính thức (span-7) */}
          <CyberReveal direction="right" theme="blue" className="lg:col-span-7 space-y-4">
            
            {/* Primary Action Button */}
            <a
              href={contactInfo.phoneHref}
              className="group w-full p-5 rounded-sm bg-gradient-to-r from-blue-electric to-orange-molten text-white font-display font-black text-base sm:text-lg uppercase tracking-wider flex items-center justify-between shadow-[0_0_30px_rgba(0,102,255,0.3)] hover:shadow-[0_0_40px_rgba(255,85,0,0.5)] transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>{finalCTA.primaryCTA}</span>
              <span className="font-mono text-sm group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Direct Channel Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Phone */}
              <a
                href={contactInfo.phoneHref}
                className="p-4 rounded-sm border border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05] transition-all flex items-center justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block">
                    DIRECT CALL / SMS
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-white">
                    {contactInfo.phone}
                  </span>
                </div>
                <span className="font-mono text-xs text-white/30">↗</span>
              </a>

              {/* Email */}
              <a
                href={contactInfo.emailHref}
                className="p-4 rounded-sm border border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05] transition-all flex items-center justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] text-blue-data uppercase tracking-widest block">
                    BUSINESS EMAIL
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white break-all block">
                    {contactInfo.email}
                  </span>
                </div>
                <span className="font-mono text-xs text-white/30">↗</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="p-4 rounded-sm border border-white/10 bg-center-void/90 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <span className="text-blue-chrome/60 uppercase tracking-wider">
                CHANNELS:
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={contactInfo.facebookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-electric transition-colors"
                >
                  Facebook
                </a>
                <span className="text-white/20">/</span>
                <a
                  href={contactInfo.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-molten transition-colors"
                >
                  Instagram
                </a>
                <span className="text-white/20">/</span>
                <a
                  href={contactInfo.tiktokHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-data transition-colors"
                >
                  TikTok
                </a>
              </div>
            </div>

          </CyberReveal>

          {/* Cột Phải: Character ORANGE Selfie chào đón (span-5) */}
          <CyberReveal direction="left" theme="orange" className="lg:col-span-5 flex flex-col justify-center items-center relative">
            <div className="absolute w-[240px] h-[300px] rounded-full bg-orange-molten/20 blur-3xl pointer-events-none" />

            <div className="relative flex flex-col items-center">
              <div className="relative w-[220px] h-[300px] sm:w-[260px] sm:h-[360px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                <Image
                  src="/assets/cutout/char-orange-selfie.webp"
                  alt="Phat Nguyen — Kết nối & Đồng hành"
                  fill
                  sizes="(max-width: 640px) 220px, 260px"
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Centered Pedestal Status Badge */}
              <div className="mt-3 px-3.5 py-1.5 bg-center-void/95 border border-orange-molten/40 rounded-sm font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-orange-spark shadow-[0_0_20px_rgba(255,85,0,0.25)] flex items-center gap-2 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>STATUS: READY_TO_COLLABORATE</span>
              </div>
            </div>
          </CyberReveal>

        </div>

      </div>

      {/* ─── FULL BOTTOM FOOTER COPYRIGHT & IDENTITY ─── */}
      <div className="relative z-20 pt-8 border-t border-white/10 text-center font-mono text-[10px] text-blue-chrome/50 uppercase tracking-widest space-y-2">
        <p>
          PHAT NGUYEN &bull; BUSINESS DEVELOPMENT REPRESENTATIVE
        </p>
        <p>
          HAI THẾ GIỚI. MỘT CON ĐƯỜNG RIÊNG. &bull; © 2026 ALL RIGHTS RESERVED.
        </p>
      </div>
    </section>
  );
}
