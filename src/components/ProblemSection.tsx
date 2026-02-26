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

const closingLine = " That's not a product problem. That's a reputation problem.";

const ProblemSection = () => (
  <section className="section-padding">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-gradient-ember">
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

      {/* Standout "cost of restart" card */}
      <ScrollReveal delay={0.3}>
        <div className="relative my-12 p-8 md:p-10 rounded-2xl border border-border bg-card overflow-hidden">
          {/* Ember accent bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-ember" />
          {/* Subtle background glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-ember opacity-[0.06] blur-3xl pointer-events-none" />

          <p className="relative font-display text-xl md:text-2xl font-bold text-foreground mb-6">
            Every new venture means:
          </p>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
            {costItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50"
              >
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-ember" />
                <span className="text-base md:text-lg font-medium text-foreground/90">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.45}>
        <p className="text-xl md:text-2xl font-display font-bold text-gradient-ember text-center">
          {closingLine}
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.55}>
        <div className="card-dark p-8 relative overflow-hidden mt-12">
          <div className="absolute inset-0 bg-gradient-ember opacity-5" />
          <p className="relative text-xl md:text-2xl font-display font-bold text-foreground">
            9 out of 10 ventures fail because attention comes too late.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProblemSection;
