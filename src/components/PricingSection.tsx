import ScrollReveal from "./ScrollReveal";
import { Check } from "lucide-react";

const coreFeatures = [
  "Your narrative, defined and sharpened",
  "2–3 posts per week on X — threads, insights, strategic replies",
  "Weekly 30-minute strategy call",
  "High-value content that draws the right audience to you",
];

const premiumFeatures = [
  "Everything in Core",
  "LinkedIn content + profile built for the rooms you want to be in",
  "Narrative aligned for investors, partners, and acquirers",
  "Two platforms compounding simultaneously",
];

const PricingSection = () => (
  <section className="section-padding" id="pricing">
    <div className="max-w-5xl mx-auto">

      {/* Section label */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-4 h-px bg-gradient-ember" />
          <span className="section-label">08 — Investment</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 tracking-[-0.01em]">
          What You <span className="text-gradient-ember italic">Get</span>
        </h2>
      </ScrollReveal>

      {/* Pricing cards — side by side, different visual weight */}
      <ScrollReveal delay={0.1}>
        <div className="flex flex-col-reverse md:flex-row gap-4 mb-12 items-stretch">

          {/* Core tier — constrained, lower weight */}
          <div
            className="flex flex-col rounded-2xl p-8 md:p-10 md:max-w-sm w-full"
            style={{ background: "hsl(var(--surface-1))" }}
          >
            <span className="section-label mb-5">Core</span>
            <h3 className="font-display text-2xl font-bold mb-3 tracking-[-0.01em]">The Signal</h3>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              We take what's in your head and make it visible. Consistently, strategically,
              on the platform where founders build reputations in real time.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {coreFeatures.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "hsl(22 100% 58% / 0.6)" }} />
                  <span className="text-secondary-foreground text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/yeray-lazarushq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border font-semibold
                         px-6 py-3.5 rounded-xl hover:bg-primary/10 hover:border-primary
                         transition-all duration-200 text-sm"
              style={{ borderColor: "hsl(22 100% 58% / 0.5)", color: "hsl(22 100% 58%)" }}
            >
              Apply Now
            </a>
            <p className="text-xs text-muted-foreground text-center mt-3">
              2 spots available in next cohort
            </p>
          </div>

          {/* Premium tier — dominant, takes more space */}
          <div className="gradient-border flex-1 relative rounded-2xl overflow-hidden">
            {/* Ribbon badge */}
            <div
              className="w-full py-2 text-center font-mono text-[10px] font-bold uppercase tracking-widest"
              style={{
                background: "linear-gradient(135deg, hsl(18 100% 52%) 0%, hsl(22 100% 58%) 50%, hsl(42 100% 50%) 100%)",
                color: "hsl(20 8% 5%)",
              }}
            >
              Most Founders Choose This
            </div>

            <div
              className="flex flex-col h-full p-8 md:p-10 relative overflow-hidden"
              style={{ background: "hsl(var(--surface-2))" }}
            >
              {/* Inner radial glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 0%, hsl(22 100% 58% / 0.06) 0%, transparent 65%)",
                }}
              />

              <div className="relative flex flex-col h-full">
                <span className="section-label mb-5" style={{ color: "hsl(22 100% 58%)" }}>
                  Upgrade
                </span>
                <h3 className="font-display text-2xl font-bold mb-3 tracking-[-0.01em]">
                  The Signal — Everywhere
                </h3>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  X builds the momentum. LinkedIn is where the people who write checks actually
                  look. This covers both.
                </p>
                <ul className="space-y-4 mb-8 flex-1">
                  {premiumFeatures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "hsl(22 100% 58%)" }} />
                      <span className="text-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/yeray-lazarushq/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-bold px-6 py-3.5 rounded-xl
                             animate-pulse-glow hover:opacity-90 transition-opacity text-sm"
                  style={{
                    background: "linear-gradient(135deg, hsl(18 100% 52%) 0%, hsl(22 100% 58%) 50%, hsl(42 100% 50%) 100%)",
                    color: "hsl(20 8% 5%)",
                  }}
                >
                  Apply Now
                </a>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  2 spots available in next cohort
                </p>
              </div>
            </div>
          </div>

        </div>
      </ScrollReveal>

    </div>
  </section>
);

export default PricingSection;
