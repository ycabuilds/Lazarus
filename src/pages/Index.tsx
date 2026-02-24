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

const Index = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <EmberParticles />
    <Header />
    <main>
      <HeroSection />
      <ProblemSection />
      <RealitySection />
      <DifferentiationSection />
      <PillarsSection />
      <ProcessSection />
      <PlatformSection />
      <TimelineSection />
      <PricingSection />
      <GuaranteesSection />
      <FitSection />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
