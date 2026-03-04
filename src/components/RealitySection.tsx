import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const bars = [
  { label: "Product & Engineering", pct: 55, highlight: false },
  { label: "Team & Operations",     pct: 30, highlight: false },
  { label: "Building in Public",    pct: 5,  highlight: true  },
];

const RealitySection = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto">

      {/* ── Bridge divider from Problem ── */}
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-16 max-w-3xl mx-auto">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(22 100% 58% / 0.35))" }} />
          <p className="font-display text-base md:text-lg italic text-muted-foreground/70 text-center px-2 shrink-0 max-w-xs">
            That's not a product problem. That's a reputation problem.
          </p>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, hsl(22 100% 58% / 0.35))" }} />
        </div>
      </ScrollReveal>

      {/* ── 9/10 full-width standalone moment ── */}
      <ScrollReveal delay={0.1}>
        <div className="relative text-center mb-20 max-w-3xl mx-auto">
          {/* Faint radial glow behind the number */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, hsl(22 100% 58% / 0.08) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />
          <span className="relative block font-display text-[7rem] md:text-[10rem] font-bold
                           leading-none text-gradient-ember glow-ember-text">
            9/10
          </span>
          <span className="relative block font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
            ventures fail because attention comes too late.
          </span>
        </div>
      </ScrollReveal>

      {/* Section label */}
      <ScrollReveal delay={0.05}>
        <div className="flex items-center gap-3 mb-5 max-w-3xl mx-auto">
          <span className="inline-block w-4 h-px bg-gradient-ember" />
          <span className="section-label">02 — Reality</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <h2 className="font-display text-4xl md:text-[3.5rem] font-bold mb-6 leading-[1.1] tracking-[-0.01em] max-w-3xl mx-auto">
          You Know Visibility Matters.{" "}
          <span className="text-muted-foreground font-bold">
            You Just Don't Have the Bandwidth.
          </span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
          Your days go into product, team, shipping, fixing things that break. You know
          building in public helps. But it keeps getting pushed to "later", because doing
          it well takes more than leftover energy. So nothing compounds.
        </p>
      </ScrollReveal>

      {/* Founder hours bar chart — wider, no card wrapper */}
      <ScrollReveal delay={0.25}>
        <div className="rounded-2xl p-6 md:p-8 max-w-3xl mx-auto"
          style={{ background: "hsl(var(--surface-1))" }}>
          <p className="section-label mb-8">Where founder hours actually go</p>
          <div className="space-y-7">
            {bars.map((bar, i) => (
              <div key={i} className="relative">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-sm font-medium"
                    style={{ color: bar.highlight ? "hsl(22 100% 58%)" : "hsl(var(--muted-foreground))" }}>
                    {bar.label}
                  </span>
                  <span className="font-mono text-sm font-bold"
                    style={{ color: bar.highlight ? "hsl(22 100% 58%)" : "hsl(var(--foreground) / 0.35)" }}>
                    {bar.pct}%
                  </span>
                </div>

                {/* Track */}
                <div className="h-2.5 w-full rounded-full overflow-hidden relative"
                  style={{ background: "hsl(var(--surface-3) / 0.8)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={bar.highlight
                      ? { background: "linear-gradient(135deg, hsl(18 100% 52%) 0%, hsl(22 100% 58%) 50%, hsl(42 100% 50%) 100%)" }
                      : { background: "hsl(var(--surface-3))", outline: "1px solid hsl(var(--border) / 0.5)" }
                    }
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.1 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  />
                  {/* Pulsing dot at end of highlighted bar */}
                  {bar.highlight && (
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2"
                      initial={{ left: 0, opacity: 0 }}
                      whileInView={{ left: `${bar.pct}%`, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.1 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="block w-3 h-3 rounded-full -translate-x-1/2 animate-pulse-glow"
                        style={{ background: "hsl(42 100% 50%)" }} />
                    </motion.div>
                  )}
                </div>

                {/* "← that's the gap" annotation for highlight bar */}
                {bar.highlight && (
                  <motion.span
                    className="block text-right font-mono text-[0.6rem] uppercase tracking-widest mt-1.5"
                    style={{ color: "hsl(22 100% 58% / 0.7)" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                  >
                    ← that's the gap
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

    </div>
  </section>
);

export default RealitySection;
