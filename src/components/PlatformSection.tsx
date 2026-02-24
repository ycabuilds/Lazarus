import ScrollReveal from "./ScrollReveal";

const PlatformSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center">
          Where This <span className="text-gradient-ember">Happens</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        <ScrollReveal delay={0.1}>
          <div className="card-dark p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-display font-bold">𝕏</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">The Engine</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Where builders think in public, ideas spread, credibility is built daily, investors hang out. Momentum starts here.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="card-dark p-8 h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-display font-bold">in</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">The Multiplier</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Where serious people check. Investors, execs, acquirers validate trust. X builds it, LinkedIn locks it in.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default PlatformSection;
