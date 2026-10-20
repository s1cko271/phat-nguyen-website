"use client";

import LogoPN from "./LogoPN";
import { contactInfo } from "@/content/story";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-2.5 sm:py-3 bg-center-void/70 backdrop-blur-xl border-b border-white/5 transition-all">
      {/* Brand & Logo - Left */}
      <div className="flex items-center gap-3 sm:gap-4 z-10">
        <LogoPN size="sm" />
        <div className="hidden md:flex flex-col">
          <span className="font-display font-bold text-xs tracking-wider text-white">
            PHAT NGUYEN
          </span>
          <span className="font-mono text-[10px] text-blue-chrome/70 tracking-widest uppercase">
            Business Development Representative
          </span>
        </div>
      </div>

      {/* Core Vibe Indicator - ABSOLUTE MATHEMATICAL CENTER */}
      <div className="hidden lg:flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md absolute left-1/2 -translate-x-1/2 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-electric animate-pulse" />
        <span className="font-mono text-[11px] text-blue-chrome tracking-wider uppercase font-medium">
          BLUE WORLD
        </span>
        <span className="text-white/20 text-xs">×</span>
        <span className="font-mono text-[11px] text-orange-molten tracking-wider uppercase font-medium">
          ORANGE WORLD
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-orange-molten animate-pulse" />
      </div>

      {/* Quick Action - Right */}
      <div className="flex items-center gap-2 sm:gap-3 z-10">
        <a
          href={contactInfo.phoneHref}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-sm border border-white/10 font-mono text-[11px] text-blue-glass/80 hover:text-white hover:border-white/30 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>(714) 312-6515</span>
        </a>

        <a
          href="#contact"
          className="relative inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-sm bg-gradient-to-r from-blue-electric to-orange-molten text-white font-display font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(0,102,255,0.25)] hover:shadow-[0_0_20px_rgba(255,85,0,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>KẾT NỐI</span>
          <span className="font-mono text-[10px]">→</span>
        </a>
      </div>
    </header>
  );
}
