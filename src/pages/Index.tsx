import EmberParticles from "@/components/EmberParticles";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import RealitySection from "@/components/RealitySection";
import DifferentiationSection from "@/components/DifferentiationSection";
import PillarsSection from "@/components/PillarsSection";
import ProcessSection from "@/components/ProcessSection";
import PlatformSection from "@/components/PlatformSection";
import TimelineSection from "@/components/TimelineSection";
import PricingSection from "@/components/PricingSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import FitSection from "@/components/FitSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const SectionDivider = () => (
  <div className="section-divider mx-6" />
);

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Ambient top radial ember glow */}
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(22 100% 58% / 0.06) 0%, transparent 70%)",
      }}
    />
    <EmberParticles />
    <Header />
    <main className="relative z-10">
      <HeroSection />
      <SectionDivider />
      <ProblemSection />
      <SectionDivider />
      <RealitySection />
      <SectionDivider />
      <DifferentiationSection />
      <SectionDivider />
      <PillarsSection />
      <SectionDivider />
      <ProcessSection />
      <SectionDivider />
      <PlatformSection />
      <SectionDivider />
      <TimelineSection />
      <SectionDivider />
      <PricingSection />
      <SectionDivider />
      <GuaranteesSection />
      <SectionDivider />
      <FitSection />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
