"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "hero", label: "01 // CON NGƯỜI" },
  { id: "origin", label: "02 // HAI THẾ GIỚI" },
  { id: "why-sales", label: "03 // TƯ DUY" },
  { id: "method", label: "04 // SALES" },
  { id: "motivation", label: "05 // BUSINESS" },
  { id: "current-work", label: "06 // HÀNH TRÌNH" },
  { id: "goal", label: "07 // THAM VỌNG" },
  { id: "contact", label: "08 // KẾT NỐI" },
];

export default function ChapterNav() {
  const [activeChapter, setActiveChapter] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Narrative Chapter Navigation"
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2.5 p-2 rounded-sm bg-center-void/60 border border-white/5 backdrop-blur-md"
    >
      {chapters.map((ch) => {
        const isActive = activeChapter === ch.id;
        return (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            aria-label={`Đi đến ${ch.label}`}
            className="group flex items-center justify-end gap-2.5 py-1 px-1.5 transition-all"
          >
            {/* Tooltip on hover */}
            <span
              className={`font-mono text-[9px] uppercase tracking-wider transition-all duration-300 pointer-events-none whitespace-nowrap ${
                isActive
                  ? "opacity-100 text-white font-bold"
                  : "opacity-0 group-hover:opacity-100 text-blue-chrome/70"
              }`}
            >
              {ch.label}
            </span>

            {/* Indicator Dot */}
            <span
              className={`w-1.5 h-1.5 rounded-none transition-all duration-300 ${
                isActive
                  ? "bg-fissure-core scale-125 shadow-[0_0_8px_#0066FF]"
                  : "bg-white/20 group-hover:bg-white/60"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
