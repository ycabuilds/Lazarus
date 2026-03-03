import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const bars = [
  { label: "Product & Engineering", pct: 55, highlight: false },
  { label: "Team & Operations",     pct: 30, highlight: false },
  { label: "Building in Public",    pct: 5,  highlight: true  },
];

const RealitySection = () => (
  <section className="section-padding">
    <div className="max-w-3xl mx-auto">

      {/* Section label */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-4 h-px bg-gradient-ember" />
          <span className="section-label">02 — Reality</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-[3.5rem] font-bold mb-6 leading-[1.08] tracking-[-0.02em]">
          You Know Visibility Matters.{" "}
          <span className="text-muted-foreground font-bold">
            You Just Don't Have the Bandwidth.
          </span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          Your days go into product, team, shipping, fixing things that break. You know
          building in public helps. But it keeps getting pushed to "later", because doing
          it well takes more than leftover energy. So nothing compounds.
        </p>
      </ScrollReveal>

      {/* Founder hours bar chart */}
      <ScrollReveal delay={0.25}>
        <div className="card-elevated rounded-2xl p-6 md:p-8">
          <p className="section-label mb-6">Where founder hours actually go</p>
          <div className="space-y-5">
            {bars.map((bar, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm font-medium ${bar.highlight ? "text-ember" : "text-muted-foreground"}`}
                    style={bar.highlight ? { color: "hsl(22 100% 58%)" } : {}}>
                    {bar.label}
                  </span>
                  <span className={`font-display text-sm font-bold ${bar.highlight ? "text-ember" : "text-foreground/40"}`}
                    style={bar.highlight ? { color: "hsl(22 100% 58%)" } : {}}>
                    {bar.pct}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full overflow-hidden"
                  style={{ background: "hsl(var(--surface-3))" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={bar.highlight
                      ? { background: "linear-gradient(135deg, hsl(18 100% 52%) 0%, hsl(22 100% 58%) 50%, hsl(42 100% 50%) 100%)" }
                      : { background: "hsl(var(--surface-3))", border: "1px solid hsl(var(--border))" }
                    }
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default RealitySection;
