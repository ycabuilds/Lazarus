import ScrollReveal from "./ScrollReveal";
import { Check } from "lucide-react";

const PricingSection = () =>
<section className="section-padding" id="pricing">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-16 text-center">
          The <span className="text-gradient-ember">Offer</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <ScrollReveal delay={0.1}>
          <div className="card-dark p-8 h-full flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Core</span>
            <h3 className="font-display text-2xl font-bold mb-2">Authority Engine</h3>
            



            <ul className="space-y-3 mb-8 flex-1">
              {["Founder positioning & narrative", "X execution", "Weekly 30-minute alignment call"].map((item, i) =>
            <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <span className="text-secondary-foreground">{item}</span>
                </li>
            )}
            </ul>
            <a
            href="#book"
            className="block text-center border border-primary text-primary font-semibold px-6 py-3 rounded-xl hover:bg-primary/10 transition-colors">

              Get Started
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="card-dark p-8 h-full flex flex-col border-primary/40 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-ember opacity-[0.04]" />
            <div className="relative flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Upgrade</span>
                <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-semibold">
                  POPULAR
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Authority Everywhere</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-4xl font-bold text-gradient-ember">$4,500</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
              "Everything in Core",
              "LinkedIn amplification",
              "Profile + content aligned for investors, buyers, and execs"].
              map((item, i) =>
              <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span className="text-secondary-foreground">{item}</span>
                  </li>
              )}
              </ul>
              <a
              href="#book"
              className="block text-center bg-gradient-ember text-background font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">

                Get Started
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3}>
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <p className="text-muted-foreground">
            We work with max <span className="text-foreground font-medium">5 founders</span> at a time. This breaks if we scale it. We go deep. We stay close. When spots are gone, they're gone.
          </p>
          


        </div>
      </ScrollReveal>
    </div>
  </section>;


export default PricingSection;