import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CyberHUD from "@/components/CyberHUD";

// All 19 Sections
import HeroSection from "@/components/sections/HeroSection";
import OriginSection from "@/components/sections/OriginSection";
import DualPersonaSection from "@/components/sections/DualPersonaSection";
import NexusSection from "@/components/sections/NexusSection";
import WhySalesSection from "@/components/sections/WhySalesSection";
import HumanEquationSection from "@/components/sections/HumanEquationSection";
import MethodSection from "@/components/sections/MethodSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import RefusalSection from "@/components/sections/RefusalSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import B2CB2BSection from "@/components/sections/B2CB2BSection";
import MotivationSection from "@/components/sections/MotivationSection";
import BusinessMindsetSection from "@/components/sections/BusinessMindsetSection";
import SixOutcomesSection from "@/components/sections/SixOutcomesSection";
import CurrentWorkSection from "@/components/sections/CurrentWorkSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import HumilitySection from "@/components/sections/HumilitySection";
import GoalSection from "@/components/sections/GoalSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <SmoothScroll>
      <div suppressHydrationWarning className="relative min-h-screen flex flex-col bg-blue-void text-blue-glass selection:bg-blue-electric/30 selection:text-fissure-core">
        {/* Telemetry Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Global Floating Header */}
        <Navbar />

        {/* Tactical Ambient Cyber HUD (Real-time Sector & Cursor Tracking) */}
        <CyberHUD />

        <main suppressHydrationWarning className="flex-1 w-full flex flex-col">
          {/* Section 01: Hero */}
          <HeroSection />

          {/* Section 02: Tôi Đến Từ Đâu? */}
          <OriginSection />

          {/* Section 03: Hai Mặt. Một Con Người. */}
          <DualPersonaSection />

          {/* Section 04: Điểm Giao Nhau */}
          <NexusSection />

          {/* Section 05: Tại Sao Tôi Chọn Sales? */}
          <WhySalesSection />

          {/* Section 06: Con Người Không Phải Một Phương Trình */}
          <HumanEquationSection />

          {/* Section 07: Thực Chiến, Nhưng Có Phương Pháp */}
          <MethodSection />

          {/* Section 08: Cách Tôi Tiếp Cận Sales */}
          <FrameworkSection />

          {/* Section 09: Ngắt Nhịp — KHÔNG. */}
          <RefusalSection />

          {/* Section 10: Triết Lý Sales */}
          <PhilosophySection />

          {/* Section 11: B2C × B2B */}
          <B2CB2BSection />

          {/* Section 12: Tại Sao Tôi Thích Nghề Này? */}
          <MotivationSection />

          {/* Section 13: Doanh Nghiệp Của Bạn, Tôi Xem Như Của Mình */}
          <BusinessMindsetSection />

          {/* Section 14: Tôi Giúp Doanh Nghiệp Xây Điều Gì? */}
          <SixOutcomesSection />

          {/* Section 15: Những Gì Tôi Đang Làm */}
          <CurrentWorkSection />

          {/* Section 16: Case Study (Tiêu đề sẵn sàng để bổ sung nội dung) */}
          <CaseStudySection />

          {/* Section 17: Tôi Vẫn Còn Rất Xa Đích Đến */}
          <HumilitySection />

          {/* Section 18: Mục Tiêu */}
          <GoalSection />

          {/* Section 19: Kết Nối & Final CTA */}
          <FinalCTASection />
        </main>
      </div>
    </SmoothScroll>
  );
}
