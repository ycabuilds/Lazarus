import ScrollReveal from "./ScrollReveal";
import { Shield, Zap } from "lucide-react";

const guarantees = [
  {
    Icon: Shield,
    iconColor: "text-primary",
    stamp: "30 Days",
    title: "30-Day Alignment Guarantee",
    desc: "If after 30 days you don't feel like we've nailed your positioning and narrative, walk away. No questions, no invoice, no hard feelings.",
  },
  {
    Icon: Zap,
    iconColor: "text-accent",
    stamp: "60 Days",
    title: "60-Day Signal Guarantee",
    desc: "If by day 60 you haven't seen real traction, inbound DMs, engagement growth, recognition from people who matter — we work for free until you do.",
  },
];

const GuaranteesSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">

      {/* Section label */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-4 h-px bg-gradient-ember" />
          <span className="section-label">09 — Risk Reversal</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-[-0.01em]">
          We Put Our <span className="text-gradient-ember italic">Money on It.</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 text-lg">
          Two guarantees. No fine print. If we don't deliver, you don't pay.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {guarantees.map((g, i) => (
          <ScrollReveal key={i} delay={i * 0.1 + 0.1}>
            <div className="gradient-border card-elevated p-8 h-full relative overflow-hidden">
              {/* Value stamp */}
              <div className="absolute top-4 right-4 rotate-6 rounded-lg px-2 py-1"
                style={{
                  background: "hsl(22 100% 58% / 0.1)",
                  border: "1px solid hsl(22 100% 58% / 0.2)",
                }}>
                <span className="text-[9px] font-bold uppercase tracking-wider"
                  style={{ color: "hsl(22 100% 58%)" }}>
                  {g.stamp}
                </span>
              </div>

              {/* Icon with gradient border circle */}
              <div className="gradient-border rounded-full w-14 h-14 flex items-center justify-center mb-6"
                style={{ background: "hsl(var(--surface-2))" }}>
                <g.Icon className={`w-6 h-6 ${g.iconColor}`} />
              </div>

              <h3 className="font-display text-xl font-bold mb-3 tracking-[-0.01em]">{g.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{g.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* No contract note */}
      <ScrollReveal delay={0.3}>
        <div className="text-center p-6 rounded-2xl max-w-xl mx-auto"
          style={{ background: "hsl(var(--surface-2) / 0.5)", border: "1px solid hsl(var(--border) / 0.4)" }}>
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">No contract. No lock-in.</span>{" "}
            If we don't deliver exactly what we said, you don't pay.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default GuaranteesSection;
