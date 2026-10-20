/**
 * LOGO PN COMPONENT
 *
 * GHI CHÚ QUAN TRỌNG CHO USER / DEVELOPER:
 * Hiện tại dự án chưa có file asset chính thức `/public/assets/logo-pn.png`.
 * Component này đóng vai trò hiển thị tạm thời Monogram "PN" với quy chuẩn:
 * - Chữ 'P': Electric Blue (#0066FF) mang tính kim loại / futuristic / chrome
 * - Chữ 'N': Molten Orange (#FF5500) mang tính công nghiệp / nhiệt lượng
 *
 * Khi bạn cung cấp file `/public/assets/logo-pn.png`, chỉ cần đặt file vào thư mục
 * `/public/assets/logo-pn.png` và bật cờ `USE_OFFICIAL_ASSET = true` bên dưới để sử dụng nguyên bản.
 * TUYỆT ĐỐI KHÔNG DÙNG CHARACTER THAY CHO LOGO.
 */

import Link from "next/link";
import Image from "next/image";

const USE_OFFICIAL_ASSET = false; // Đổi thành true khi có file /public/assets/logo-pn.png

interface LogoPNProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function LogoPN({ className = "", size = "md" }: LogoPNProps) {
  if (USE_OFFICIAL_ASSET) {
    const dimensions = {
      sm: { width: 36, height: 36 },
      md: { width: 48, height: 48 },
      lg: { width: 64, height: 64 },
    }[size];

    return (
      <Link href="/" className={`inline-flex items-center transition-opacity hover:opacity-85 ${className}`} aria-label="PHAT NGUYEN Home">
        <Image
          src="/assets/logo-pn.png"
          alt="PHAT NGUYEN Logo"
          width={dimensions.width}
          height={dimensions.height}
          priority
        />
      </Link>
    );
  }

  // Fallback Monogram kỹ thuật tạm thời
  const sizeClasses = {
    sm: "text-lg tracking-tighter px-2 py-0.5",
    md: "text-2xl tracking-tighter px-2.5 py-1",
    lg: "text-4xl tracking-tighter px-3.5 py-1.5",
  }[size];

  return (
    <Link
      href="/"
      className={`group relative inline-flex items-center font-display font-black select-none transition-transform hover:scale-105 active:scale-95 ${className}`}
      aria-label="PHAT NGUYEN — Trang chủ"
    >
      <div
        className={`relative flex items-center border border-white/10 bg-center-void/80 backdrop-blur-md rounded-sm ${sizeClasses} shadow-[0_0_15px_rgba(0,102,255,0.15)] group-hover:border-white/25 transition-colors`}
      >
        {/* Góc kỹ thuật */}
        <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-blue-electric" />
        <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-orange-molten" />

        {/* Chữ P: Electric Blue Chrome */}
        <span className="text-blue-electric drop-shadow-[0_0_8px_rgba(0,102,255,0.6)] font-black">
          P
        </span>

        {/* Chữ N: Molten Orange */}
        <span className="text-orange-molten drop-shadow-[0_0_8px_rgba(255,85,0,0.6)] font-black -ml-0.5">
          N
        </span>

        {/* Đường cắt năng lượng siêu nhỏ ở giữa */}
        <span className="inline-block w-[1px] h-3 bg-fissure-core/60 mx-1.5 opacity-40 group-hover:opacity-100 transition-opacity" />

        <span className="font-mono text-[9px] uppercase tracking-widest text-blue-chrome/70 font-normal hidden sm:inline-block">
          BDR
        </span>
      </div>
    </Link>
  );
}
