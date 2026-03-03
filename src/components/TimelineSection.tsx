import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const months = [
  {
    label: "Month 1",
    title: "Clarity",
    desc: "Clear positioning. Clear narrative. You finally know what you're saying and why.",
    stat: "Positioning locked",
  },
  {
    label: "Month 2",
    title: "Visibility",
    desc: "Consistent visibility. Recognition from the right people.",
    stat: "3–5× reach growth",
  },
  {
    label: "Month 3+",
    title: "Momentum",
    desc: "Inbound. Leverage. Momentum. Not hype — signal.",
    stat: "Inbound starts",
  },
];

const TimelineSection = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto">

      {/* Section label */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-4 h-px bg-gradient-ember" />
          <span className="section-label">07 — Timeline</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 tracking-[-0.02em]">
          The 90-Day <span className="text-gradient-ember">Timeline</span>
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Progress track */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px z-0"
          style={{ background: "hsl(var(--surface-3))" }} />
        <motion.div
          className="hidden md:block absolute top-6 left-0 h-px z-0"
          style={{
            background: "linear-gradient(135deg, hsl(18 100% 52%) 0%, hsl(22 100% 58%) 50%, hsl(42 100% 50%) 100%)",
            boxShadow: "0 0 8px hsl(22 100% 58% / 0.4)",
          }}
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {months.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              {/* Month circle */}
              <div className="hidden md:flex gradient-border w-12 h-12 rounded-full items-center
                              justify-center mb-6 mx-0 relative z-10"
                style={{ background: "hsl(var(--surface-2))" }}>
                <span className="text-xs font-bold font-display"
                  style={{ color: "hsl(22 100% 58%)" }}>
                  {i + 1}
                </span>
              </div>

              {/* Month card */}
              <div className="card-elevated rounded-2xl p-6">
                <span className="section-label mb-3 block"
                  style={{ color: "hsl(22 100% 58% / 0.8)" }}>
                  {m.label}
                </span>
                <h3 className="font-display text-2xl font-bold mb-2 tracking-[-0.01em]">
                  {m.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{m.desc}</p>
                <span className="section-label" style={{ color: "hsl(22 100% 58% / 0.7)" }}>
                  {m.stat}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
