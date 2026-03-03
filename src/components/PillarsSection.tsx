import ScrollReveal from "./ScrollReveal";
import { TrendingUp, Target, Unlock } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Credibility That Compounds",
    desc: "When someone Googles you before a meeting, they find a founder who clearly knows what they're talking about. That impression follows you into every room.",
  },
  {
    icon: Target,
    title: "Organic Inbound You Own",
    desc: "Investors DM you. Podcast hosts reach out. Potential partners already trust you before the first call. All because your thinking is visible where it matters.",
  },
  {
    icon: Unlock,
    title: "Long-Term Optionality",
    desc: "Partnerships happen faster. Fundraising gets easier. Exits are smoother. Not because you're louder, because you're familiar.",
  },
];

const PillarsSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">

      {/* Section label */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-4 h-px bg-gradient-ember" />
          <span className="section-label">04 — Promise</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 tracking-[-0.01em]">
          The Core <span className="text-gradient-ember italic">Promise</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <div className="gradient-border card-elevated p-8 h-full group
                            transition-all duration-300 hover:translate-y-[-2px]
                            hover:shadow-[0_8px_32px_hsl(0_0%_0%/0.3)] relative overflow-hidden">
              {/* Background decorative number */}
              <span className="absolute top-2 right-4 font-display text-[5rem] font-bold
                               leading-none pointer-events-none select-none"
                style={{ color: "hsl(var(--foreground) / 0.025)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon with gradient border */}
              <div className="relative gradient-border w-12 h-12 rounded-xl flex items-center
                              justify-center mb-6 transition-all duration-300 group-hover:glow-ember-sm"
                style={{ background: "hsl(var(--surface-2))" }}>
                <p.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="relative font-display text-xl font-bold mb-3 tracking-[-0.01em]">
                {p.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed text-sm">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PillarsSection;
