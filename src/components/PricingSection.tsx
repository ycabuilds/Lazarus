import ScrollReveal from "./ScrollReveal";
import { Check } from "lucide-react";

const PricingSection = () =>
  <section className="section-padding" id="pricing">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-16 text-center">
          What You <span className="text-gradient-ember">Get</span>
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <ScrollReveal delay={0.1}>
          <div className="card-dark p-8 h-full flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Core</span>
            <h3 className="font-display text-2xl font-bold mb-3">The Signal</h3>
            <p className="text-muted-foreground text-sm mb-6">
              We take what's in your head and make it visible. Consistently, strategically, on the platform where founders build reputations in real time.
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Your narrative, defined and sharpened",
                "2–3 posts per week on X — threads, insights, strategic replies",
                "Weekly 30-minute strategy call",
                "High-value content that draws the right audience to you"
              ].map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span className="text-secondary-foreground">{item}</span>
                </li>
              )}
            </ul>
            
              href="#book"
              className="block text-center border border-primary text-primary font-semibold px-6 py-3 rounded-xl hover:bg-primary/10 transition-colors">
              Apply Now
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="card-dark p-8 h-full flex flex-col border-primary/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-ember opacity-[0.06]" />
            <div className="relative flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Upgrade</span>
                <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-semibold">
                  MOST FOUNDERS CHOOSE THIS
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">The Signal — Everywhere</h3>
              <p className="text-muted-foreground text-sm mb-6">
                X builds the momentum. LinkedIn is where the people who write checks actually look. This covers both.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in Core",
                  "LinkedIn content + profile built for the rooms you want to be in",
                  "Narrative aligned for investors, partners, and acquirers",
                  "Two platforms compounding simultaneously"
                ].map((item, i) =>
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span className="text-secondary-foreground">{item}</span>
                  </li>
                )}
              </ul>
              <p className="text-xs text-muted-foreground mb-4 text-center">Most founders start here →</p>
              
                href="#book"
                className="block text-center bg-gradient-ember text-background font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
                Apply Now
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <ScrollReveal delay={0.3}>
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">5 founders at a time.</span> That's the max. This only works because we treat your narrative like it's ours — and that takes real attention. When we're full, the wait is usually 4–6 weeks.
          </p>
          <p className="text-muted-foreground text-sm">
            Pricing discussed on the call. This is high-touch, founder-level work — we'll figure out if it's the right fit for both sides.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>;

export default PricingSection;
