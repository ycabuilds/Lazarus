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
    desc: "Partnerships happen faster. Fundraising gets easier. \n\nExits are smoother. Not because you're louder, because you're familiar.",
  },
];

const PillarsSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-16 text-center">
          The Core <span className="text-gradient-ember">Promise</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="card-dark p-8 h-full group hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-ember flex items-center justify-center mb-6 group-hover:glow-ember-sm transition-shadow">
                <p.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{p.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PillarsSection;
