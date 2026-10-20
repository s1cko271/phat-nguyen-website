"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const GLYPHS = "01アイウエオカキクケコサシスセソタチツテトABCDEF0123456789_//><[]#";

interface TextScrambleProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
  autostart?: boolean;
}

export default function TextScramble({
  text,
  className = "",
  scrambleOnHover = true,
  autostart = false,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number | null>(null);
  const isScrambling = useRef(false);

  const startScramble = useCallback(() => {
    if (isScrambling.current) return;
    isScrambling.current = true;

    let iteration = 0;
    const maxIterations = text.length * 2;

    const update = () => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration / 2) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      if (iteration < maxIterations) {
        iteration += 1;
        frameRef.current = requestAnimationFrame(update);
      } else {
        setDisplayText(text);
        isScrambling.current = false;
      }
    };

    frameRef.current = requestAnimationFrame(update);
  }, [text]);

  useEffect(() => {
    if (autostart) {
      startScramble();
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [autostart, startScramble]);

  return (
    <span
      onMouseEnter={scrambleOnHover ? startScramble : undefined}
      className={`inline-block select-none cursor-default font-mono ${className}`}
    >
      {displayText}
    </span>
  );
}
