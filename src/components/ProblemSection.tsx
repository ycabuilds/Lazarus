import ScrollReveal from "./ScrollReveal";

const painLines = [
  "Most founders pour everything into product, team, and execution. Almost none invest in the one thing that carries across every venture: their public reputation.",
  "So every time they start something new, they restart attention from scratch. Not because they failed, but because they never built something that compounds.",
];

const costItems = [
  "Reintroducing yourself.",
  "Rebuilding trust.",
  "Proving yourself, again.",
  "Starting with zero audience, zero leverage.",
];

const ProblemSection = () => (
  <section className="section-padding">
    <div className="max-w-3xl mx-auto">

      {/* Section label */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-4 h-px bg-gradient-ember" />
          <span className="section-label">01 — Problem</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-[3.5rem] font-bold mb-12 leading-[1.08] tracking-[-0.02em]">
          The Problem Nobody Talks About
        </h2>
      </ScrollReveal>

      <div className="space-y-6 mb-10">
        {painLines.map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
              {line}
            </p>
          </ScrollReveal>
        ))}
      </div>

      {/* "Every new venture" card — gradient-border with indexed items */}
      <ScrollReveal delay={0.3}>
        <div className="gradient-border card-elevated my-12 p-8 md:p-10 overflow-hidden relative">
          {/* Ember accent bar */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-ember rounded-t-[inherit]" />
          {/* Background glow */}
          <div
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl pointer-events-none opacity-[0.08]"
            style={{ background: "radial-gradient(circle, hsl(22 100% 58%) 0%, transparent 70%)" }}
          />
          {/* Decorative background text */}
          <span className="absolute -top-4 -right-4 font-display text-[8rem] font-bold
                           text-white/[0.02] leading-none pointer-events-none select-none">
            ×4
          </span>

          <p className="relative font-display text-xl md:text-2xl font-bold text-foreground mb-8">
            Every new venture means:
          </p>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
            {costItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border border-border/40"
                style={{ background: "hsl(var(--surface-3) / 0.6)" }}
              >
                <span className="font-display text-xs font-bold shrink-0 w-6"
                  style={{ color: "hsl(22 100% 58% / 0.7)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium text-foreground/90">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.45}>
        <p className="text-xl md:text-2xl font-display font-bold text-gradient-ember text-center">
          That's not a product problem. That's a reputation problem.
        </p>
      </ScrollReveal>

      {/* 9/10 callout — left border bar with oversized number */}
      <ScrollReveal delay={0.55}>
        <div className="mt-12 p-8 rounded-2xl border-l-2 border-primary relative overflow-hidden"
          style={{ background: "hsl(var(--surface-2))" }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              background: "radial-gradient(ellipse at 0% 50%, hsl(22 100% 58% / 0.15) 0%, transparent 60%)",
            }}
          />
          <span className="relative block font-display text-[4rem] md:text-[5rem] font-bold
                           leading-none mb-2 text-gradient-ember glow-ember-text">
            9/10
          </span>
          <span className="relative font-display text-xl md:text-2xl font-bold text-foreground">
            ventures fail because attention comes too late.
          </span>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSection;
