import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

const PlatformSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">

      {/* Section label */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-4 h-px bg-gradient-ember" />
          <span className="section-label">06 — Platforms</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 tracking-[-0.02em]">
          Where This <span className="text-gradient-ember">Happens</span>
        </h2>
      </ScrollReveal>

      {/* Cards with connecting arrow — grid-cols-[1fr_auto_1fr] on md+ */}
      <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-stretch">

        {/* X card */}
        <ScrollReveal delay={0.1}>
          <div className="gradient-border card-elevated p-8 h-full relative overflow-hidden">
            {/* Subtle ember radial */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: "radial-gradient(ellipse at 50% 100%, hsl(22 100% 58% / 0.15) 0%, transparent 60%)",
              }}
            />
            {/* Platform symbol */}
            <div className="relative gradient-border rounded-2xl w-14 h-14 flex items-center justify-center mb-6"
              style={{ background: "hsl(var(--surface-2))" }}>
              <span className="text-2xl font-display font-bold text-foreground">𝕏</span>
            </div>
            <div className="relative flex items-center gap-2 mb-4">
              <span className="section-label" style={{ color: "hsl(22 100% 58%)" }}>
                The Engine
              </span>
            </div>
            <p className="relative text-muted-foreground leading-relaxed text-sm">
              Where builders think in public, ideas spread, credibility is built daily,
              investors hang out. Momentum starts here.
            </p>
          </div>
        </ScrollReveal>

        {/* Connector */}
        <ScrollReveal delay={0.15}>
          <div className="hidden md:flex flex-col items-center justify-center gap-2 px-2
                          text-muted-foreground/40">
            <span className="section-label mb-1">flows to</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </ScrollReveal>

        {/* LinkedIn card */}
        <ScrollReveal delay={0.2}>
          <div className="gradient-border card-elevated p-8 h-full relative overflow-hidden">
            {/* Subtle blue tint */}
            <div className="absolute inset-0 bg-blue-500/[0.03] pointer-events-none" />
            {/* Platform symbol */}
            <div className="relative gradient-border rounded-2xl w-14 h-14 flex items-center justify-center mb-6"
              style={{ background: "hsl(var(--surface-2))" }}>
              <span className="text-2xl font-display font-bold text-foreground">in</span>
            </div>
            <div className="relative flex items-center gap-2 mb-4">
              <span className="section-label text-accent" style={{ color: "hsl(42 100% 50%)" }}>
                The Multiplier
              </span>
            </div>
            <p className="relative text-muted-foreground leading-relaxed text-sm">
              Where serious people check. Investors, execs, acquirers validate trust.
              X builds it, LinkedIn locks it in.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default PlatformSection;
