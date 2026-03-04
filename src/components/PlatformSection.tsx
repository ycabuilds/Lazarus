import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

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
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 tracking-[-0.01em]">
          Where This <span className="text-gradient-ember italic">Happens</span>
        </h2>
      </ScrollReveal>

      {/* Cards + connector */}
      <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-3 items-stretch">

        {/* X card */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl p-8 h-full relative overflow-hidden"
            style={{ background: "hsl(var(--surface-2))" }}>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, hsl(22 100% 58% / 0.06) 0%, transparent 60%)",
              }}
            />
            {/* Big platform symbol */}
            <div className="relative mb-5">
              <span
                className="font-bold leading-none"
                style={{
                  fontSize: "3.5rem",
                  color: "hsl(22 100% 58%)",
                  filter: "drop-shadow(0 0 16px hsl(22 100% 58% / 0.5))",
                  fontFamily: "inherit",
                }}
              >
                𝕏
              </span>
            </div>
            <h3 className="relative font-display text-xl font-bold mb-2 tracking-[-0.01em]">
              The Engine
            </h3>
            <p className="relative text-sm text-muted-foreground leading-relaxed">
              Where builders think in public, ideas spread, credibility is built daily,
              investors hang out. Momentum starts here.
            </p>
          </div>
        </ScrollReveal>

        {/* Connector — visual centerpiece */}
        <ScrollReveal delay={0.15}>
          {/* Desktop: horizontal connector (X → LinkedIn, left to right) */}
          <div className="hidden md:flex flex-col items-center justify-center gap-2 self-stretch px-1">
            <span className="font-mono text-[0.55rem] uppercase tracking-widest text-muted-foreground/50 mb-1">
              flows to
            </span>

            {/* Animated gradient line with traveling dot */}
            <div className="relative flex items-center w-16 h-px">
              {/* Static gradient line */}
              <div
                className="w-full h-px"
                style={{
                  background: "linear-gradient(to right, hsl(22 100% 58% / 0.4), hsl(42 100% 50% / 0.7), hsl(22 100% 58% / 0.4))",
                }}
              />
              {/* Traveling dot — moves left to right */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                style={{
                  background: "linear-gradient(135deg, hsl(22 100% 58%), hsl(42 100% 50%))",
                  boxShadow: "0 0 8px hsl(22 100% 58% / 0.7)",
                }}
                initial={{ left: 0 }}
                animate={{ left: "calc(100% - 10px)" }}
                transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
              />
            </div>

            {/* Arrow pointing right */}
            <span
              className="font-mono text-base font-bold mt-1"
              style={{ color: "hsl(42 100% 50% / 0.7)" }}
            >
              →
            </span>
          </div>

          {/* Mobile: horizontal connector (stacked vertically, arrow points down) */}
          <div className="md:hidden flex items-center justify-center gap-3 py-2">
            <div
              className="flex-1 h-px"
              style={{ background: "linear-gradient(to right, transparent, hsl(22 100% 58% / 0.4))" }}
            />
            <span className="font-mono text-[0.55rem] uppercase tracking-widest text-muted-foreground/50">
              flows to
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "linear-gradient(to left, transparent, hsl(22 100% 58% / 0.4))" }}
            />
          </div>
        </ScrollReveal>

        {/* LinkedIn card */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl p-8 h-full relative overflow-hidden"
            style={{ background: "hsl(var(--surface-2))" }}>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, hsl(210 80% 56% / 0.05) 0%, transparent 60%)",
              }}
            />
            {/* Big platform symbol */}
            <div className="relative mb-5">
              <span
                className="font-bold leading-none"
                style={{
                  fontSize: "3.5rem",
                  color: "hsl(var(--foreground) / 0.85)",
                  fontFamily: "inherit",
                }}
              >
                in
              </span>
            </div>
            <h3 className="relative font-display text-xl font-bold mb-2 tracking-[-0.01em]">
              The Multiplier
            </h3>
            <p className="relative text-sm text-muted-foreground leading-relaxed">
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
