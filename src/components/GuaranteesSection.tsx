import ScrollReveal from "./ScrollReveal";
import { Shield, Zap, Unlock } from "lucide-react";

const GuaranteesSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">

      {/* Section label */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-4 h-px bg-gradient-ember" />
          <span className="section-label">09 — Our Commitment</span>
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

      <div className="grid md:grid-cols-2 gap-4 mb-0">

        {/* 30-day card */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl p-8 h-full"
            style={{ background: "hsl(var(--surface-1))" }}>

            {/* Icon + badge row */}
            <div className="flex items-center gap-3 mb-6">
              <Shield
                className="w-10 h-10"
                style={{
                  color: "hsl(22 100% 58%)",
                  filter: "drop-shadow(0 0 12px hsl(22 100% 58% / 0.4))",
                }}
              />
              <span
                className="inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-widest"
                style={{
                  background: "hsl(22 100% 58% / 0.1)",
                  border: "1px solid hsl(22 100% 58% / 0.25)",
                  color: "hsl(22 100% 58%)",
                }}
              >
                30d
              </span>
            </div>

            <h3 className="font-display text-xl font-bold mb-3 tracking-[-0.01em]">
              Alignment Guarantee
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              If after 30 days you don't feel like we've nailed your positioning and narrative,
              walk away. No questions, no invoice, no hard feelings.
            </p>
          </div>
        </ScrollReveal>

        {/* 60-day card — more prominent */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl p-8 h-full relative overflow-hidden"
            style={{
              background: "hsl(var(--surface-2))",
              border: "1px solid hsl(var(--border) / 0.4)",
              boxShadow: "0 0 32px hsl(22 100% 58% / 0.06)",
            }}>

            {/* Icon + badge row */}
            <div className="flex items-center gap-3 mb-6">
              <Zap
                className="w-10 h-10"
                style={{
                  color: "hsl(42 100% 50%)",
                  filter: "drop-shadow(0 0 14px hsl(42 100% 50% / 0.5))",
                }}
              />
              <span
                className="inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[0.6rem] font-bold uppercase tracking-widest"
                style={{
                  background: "hsl(42 100% 50% / 0.1)",
                  border: "1px solid hsl(42 100% 50% / 0.3)",
                  color: "hsl(42 100% 50%)",
                }}
              >
                60d
              </span>
            </div>

            <h3 className="font-display text-xl font-bold mb-3 tracking-[-0.01em]">
              Signal Guarantee
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              If by day 60 you haven't seen real traction — inbound DMs, engagement growth,
              recognition from people who matter — we work for free until you do.
            </p>
          </div>
        </ScrollReveal>

      </div>

      {/* No contract bar — full width */}
      <ScrollReveal delay={0.3}>
        <div className="flex items-center gap-3 mt-4 px-8 py-5 rounded-2xl"
          style={{
            background: "hsl(var(--surface-2))",
            borderTop: "1px solid hsl(var(--border) / 0.3)",
            borderBottom: "1px solid hsl(var(--border) / 0.3)",
          }}>
          <Unlock
            className="w-5 h-5 shrink-0"
            style={{ color: "hsl(22 100% 58% / 0.7)" }}
          />
          <p className="text-base font-semibold text-foreground">
            No contract. No lock-in.{" "}
            <span className="text-muted-foreground font-normal">
              If we don't deliver exactly what we said, you don't pay.
            </span>
          </p>
        </div>
      </ScrollReveal>

    </div>
  </section>
);

export default GuaranteesSection;
