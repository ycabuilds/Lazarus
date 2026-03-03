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
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 tracking-[-0.02em]">
          What You <span className="text-gradient-ember">Get</span>
        </h2>
      </ScrollReveal>

      {/* Pricing cards — gap-px hairline divider technique */}
      <ScrollReveal delay={0.1}>
        <div
          className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden
                     border border-border/30 mb-12 shadow-[0_8px_48px_hsl(0_0%_0%/0.4)]"
          style={{ background: "hsl(var(--border) / 0.4)" }}
        >
          {/* Core tier */}
          <div
            className="flex flex-col p-8 md:p-10"
            style={{ background: "hsl(var(--surface-1))" }}
          >
            <span className="section-label mb-5">Core</span>
            <h3 className="font-display text-2xl font-bold mb-3 tracking-[-0.01em]">The Signal</h3>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              We take what's in your head and make it visible. Consistently, strategically,
              on the platform where founders build reputations in real time.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {coreFeatures.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-secondary-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/yeray-lazarushq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-primary/50 text-primary font-semibold
                         px-6 py-3 rounded-xl hover:bg-primary/10 hover:border-primary
                         transition-all duration-200 text-sm"
            >
              Apply Now
            </a>
          </div>

          {/* Premium tier */}
          <div
            className="flex flex-col p-8 md:p-10 relative overflow-hidden"
            style={{ background: "hsl(var(--surface-2))" }}
          >
            {/* Top ember line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-ember" />
            {/* Inner radial glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-25"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, hsl(22 100% 58% / 0.25) 0%, transparent 70%)",
              }}
            />

            <div className="relative flex flex-col h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="section-label text-[hsl(22_100%_58%)]" style={{ color: "hsl(22 100% 58%)" }}>
                  Upgrade
                </span>
                <span className="text-[10px] bg-primary/10 border border-primary/30 text-primary
                                 px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                  Most Founders Choose This
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 tracking-[-0.01em]">
                The Signal — Everywhere
              </h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                X builds the momentum. LinkedIn is where the people who write checks actually
                look. This covers both.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {premiumFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mb-4 text-center">
                Most founders start here →
              </p>
              <a
                href="https://calendly.com/yeray-lazarushq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gradient-ember text-background font-semibold
                           px-6 py-3 rounded-xl animate-pulse-glow hover:opacity-90
                           transition-opacity text-sm"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom footnote */}
      <ScrollReveal delay={0.2}>
        <div className="card-dark rounded-2xl p-6 md:p-8 max-w-2xl mx-auto text-center space-y-3">
          <p className="text-muted-foreground text-sm leading-relaxed">
            <span className="text-foreground font-semibold">5 founders at a time.</span>{" "}
            That's the max. This only works because we treat your narrative like it's ours —
            and that takes real attention. When we're full, the wait is usually 4–6 weeks.
          </p>
          <p className="text-muted-foreground text-xs">
            Pricing discussed on the call. This is high-touch, founder-level work — we'll
            figure out if it's the right fit for both sides.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PricingSection;
