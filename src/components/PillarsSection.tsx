import ScrollReveal from "./ScrollReveal";
import { TrendingUp, Target, Unlock } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Credibility That Compounds",
    desc: "When someone Googles you before a meeting, they find a founder who clearly knows what they're talking about. That impression follows you into every room.",
    span: "md:col-span-2",
    numSize: "text-[12rem]",
    headingSize: "text-2xl md:text-3xl",
  },
  {
    icon: Target,
    title: "Organic Inbound You Own",
    desc: "Investors DM you. Podcast hosts reach out. Potential partners already trust you before the first call. All because your thinking is visible where it matters.",
    span: "md:col-span-1",
    numSize: "text-[8rem]",
    headingSize: "text-xl",
  },
  {
    icon: Unlock,
    title: "Long-Term Optionality",
    desc: "Partnerships happen faster. Fundraising gets easier. Exits are smoother. Not because you're louder, because you're familiar.",
    span: "md:col-span-1",
    numSize: "text-[8rem]",
    headingSize: "text-xl",
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

      {/* First row: hero card (col-span-2) + second card */}
      <div className="grid md:grid-cols-3 gap-4">
        {pillars.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <div className={`${p.span} bg-surface-1/50 rounded-2xl p-8 h-full group
                            transition-all duration-300 hover:-translate-y-[3px] relative overflow-hidden`}
              style={{ background: "hsl(var(--surface-1) / 0.5)" }}>

              {/* Large background number watermark */}
              <span
                className={`absolute -bottom-4 right-2 font-display ${p.numSize} font-bold
                             leading-none pointer-events-none select-none`}
                style={{ color: "hsl(var(--foreground) / 0.03)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon — plain bg, glow */}
              <div
                className="relative rounded-xl p-3 mb-6 inline-flex items-center justify-center"
                style={{ background: "hsl(var(--surface-3) / 0.6)" }}
              >
                <p.icon
                  className="w-8 h-8"
                  style={{
                    color: "hsl(22 100% 58%)",
                    filter: "drop-shadow(0 0 8px hsl(22 100% 58% / 0.4))",
                  }}
                />
              </div>

              <h3 className={`relative font-display ${p.headingSize} font-bold mb-3 tracking-[-0.01em]`}>
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
