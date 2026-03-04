import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const months = [
  {
    label: "Month 1",
    title: "Clarity",
    desc: "Clear positioning. Clear narrative. You finally know what you're saying and why.",
    stat: "Positioning Locked",
    weight: "muted",
  },
  {
    label: "Month 2",
    title: "Visibility",
    desc: "Consistent visibility. Recognition from the right people.",
    stat: "3–5× Reach Growth",
    weight: "mid",
  },
  {
    label: "Month 3+",
    title: "Momentum",
    desc: "Inbound. Leverage. Momentum. Not hype — signal.",
    stat: "Inbound Starts",
    weight: "full",
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
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 tracking-[-0.01em]">
          The 90-Day <span className="text-gradient-ember italic">Timeline</span>
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Progress track — desktop */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px z-0"
          style={{ background: "hsl(var(--border) / 0.3)" }} />
        <motion.div
          className="hidden md:block absolute top-6 left-0 h-px z-0"
          style={{
            background: "linear-gradient(to right, hsl(var(--border)), hsl(22 100% 58% / 0.6), hsl(42 100% 50%))",
            boxShadow: "0 0 8px hsl(22 100% 58% / 0.3)",
          }}
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Mobile vertical line */}
        <div className="md:hidden absolute left-[23px] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, hsl(var(--border)), hsl(22 100% 58% / 0.6), hsl(42 100% 50%))" }} />

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
          {months.map((m, i) => {
            const isMid = m.weight === "mid";
            const isFull = m.weight === "full";

            return (
              <ScrollReveal key={i} delay={i * 0.2}>
                {/* Mobile layout: circle + content side by side */}
                <div className="flex md:block gap-4 md:gap-0">
                  {/* Month circle */}
                  <div
                    className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0
                                border md:mx-0 md:mb-6"
                    style={{
                      background: "hsl(var(--surface-2))",
                      borderColor: isFull
                        ? "hsl(22 100% 58% / 0.6)"
                        : isMid
                        ? "hsl(var(--border) / 0.5)"
                        : "hsl(var(--border) / 0.3)",
                      boxShadow: isFull ? "0 0 16px hsl(22 100% 58% / 0.2)" : "none",
                    }}
                  >
                    <span
                      className="text-xs font-bold font-mono"
                      style={{ color: isFull ? "hsl(22 100% 58%)" : isMid ? "hsl(22 100% 58% / 0.7)" : "hsl(var(--muted-foreground))" }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-2xl p-6 transition-all duration-300"
                    style={{
                      background: isFull ? "hsl(var(--surface-2))" : "hsl(var(--surface-1) / 0.6)",
                      opacity: m.weight === "muted" ? 0.8 : m.weight === "mid" ? 0.92 : 1,
                      border: isFull ? "1px solid hsl(22 100% 58% / 0.25)" : isMid ? "1px solid hsl(var(--border) / 0.3)" : "none",
                      boxShadow: isFull ? "0 0 32px hsl(22 100% 58% / 0.1)" : "none",
                    }}
                  >
                    {/* Month label */}
                    <span
                      className="font-mono text-[0.6rem] uppercase tracking-widest mb-3 block"
                      style={{ color: isFull ? "hsl(22 100% 58% / 0.8)" : "hsl(var(--muted-foreground))" }}
                    >
                      {m.label}
                    </span>

                    {/* Title — escalates in size */}
                    <h3
                      className="font-display font-bold mb-2 tracking-[-0.01em]"
                      style={{ fontSize: isFull ? "1.75rem" : isMid ? "1.5rem" : "1.25rem" }}
                    >
                      {m.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{m.desc}</p>

                    {/* Stat metric label */}
                    <span
                      className="font-mono text-sm font-bold uppercase tracking-wide"
                      style={{ color: isFull ? "hsl(22 100% 58%)" : "hsl(var(--muted-foreground) / 0.7)" }}
                    >
                      {isFull ? (
                        <span className="text-gradient-ember">{m.stat}</span>
                      ) : (
                        m.stat
                      )}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
