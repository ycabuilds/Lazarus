import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "30-minute weekly call",
    desc: "Talk about what you're building, learning, what matters now.",
  },
  {
    num: "02",
    title: "We craft your narrative",
    desc: "Positioning, story, what goes public.",
  },
  {
    num: "03",
    title: "We publish and engage",
    desc: "Posts, threads, strategic replies on X. LinkedIn if bundled.",
  },
  {
    num: "04",
    title: "You stay focused on building.",
    desc: "Your presence compounds in the background. Inbound starts coming. You never touch a content calendar.",
  },
];

const ProcessSection = () => (
  <section className="section-padding">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          One Call a Week.
        </h2>
        <p className="text-2xl md:text-3xl font-display text-muted-foreground mb-16">
          That's All We Need.
        </p>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />

        <div className="space-y-10">
          {steps.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="flex gap-6">
                <div className="relative z-10 w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-primary font-display">{s.num}</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-lg font-bold mb-1">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
