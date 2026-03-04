import ScrollReveal from "./ScrollReveal";

const dots = [true, true, true, false, false];

const ScarcityBlock = () => (
  <section
    className="relative overflow-hidden py-20 px-6"
    style={{ background: "hsl(20 6% 7%)" }}
  >
    {/* Radial ember glow */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at center, hsl(22 100% 58% / 0.06) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />

    <div className="relative max-w-2xl mx-auto text-center">

      <ScrollReveal>
        <p
          className="font-display font-bold italic leading-none mb-4 text-gradient-ember"
          style={{ fontSize: "clamp(4rem, 12vw, 7rem)" }}
        >
          5 founders
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
          at a time. That's the max.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.18}>
        <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
          This only works because we treat your narrative like it's ours — and that takes
          real attention. When we're full, the wait is usually 4–6 weeks.
        </p>
      </ScrollReveal>

      {/* Scarcity dots — 3 filled, 2 empty */}
      <ScrollReveal delay={0.28}>
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {dots.map((filled, i) => (
            filled ? (
              <span
                key={i}
                className="w-3 h-3 rounded-full"
                style={{
                  background: "linear-gradient(135deg, hsl(18 100% 52%), hsl(42 100% 50%))",
                  boxShadow: "0 0 6px hsl(22 100% 58% / 0.5)",
                }}
              />
            ) : (
              <span
                key={i}
                className="w-3 h-3 rounded-full border"
                style={{ borderColor: "hsl(var(--border) / 0.6)" }}
              />
            )
          ))}
        </div>
        <p className="font-mono text-[0.6rem] uppercase tracking-widest text-muted-foreground/50 mt-3">
          3 of 5 spots active
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.36}>
        <p className="text-xs text-muted-foreground/60 mt-6 italic">
          Pricing discussed on the call — this is high-touch, founder-level work.
        </p>
      </ScrollReveal>

    </div>
  </section>
);

export default ScarcityBlock;
