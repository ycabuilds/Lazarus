import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "30-minute weekly call",
    desc: "Talk about what you're building, learning, what matters now.",
    isFinal: false,
  },
  {
    num: "02",
    title: "We craft your narrative",
    desc: "Positioning, story, what goes public.",
    isFinal: false,
  },
  {
    num: "03",
    title: "We publish and engage",
    desc: "Posts, threads, strategic replies on X. LinkedIn if bundled.",
    isFinal: false,
  },
  {
    num: "04",
    title: "You stay focused on building.",
    desc: "Your presence compounds in the background. Inbound starts coming. You never touch a content calendar.",
    isFinal: true,
  },
];

const ProcessSection = () => (
  <section
    className="section-padding relative overflow-hidden"
    style={{ background: "hsl(20 6% 6%)" }}
  >
    {/* Faint decorative glyph — right side asymmetric element */}
    <div
      className="absolute right-8 top-1/2 -translate-y-1/2 font-display font-bold
                 leading-none pointer-events-none select-none hidden md:block"
      style={{
        fontSize: "10rem",
        color: "hsl(var(--foreground) / 0.03)",
      }}
    >
      ✦
    </div>

    <div className="relative max-w-3xl mx-auto">

      {/* Section label */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-4 h-px bg-gradient-ember" />
          <span className="section-label">05 — Process</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-[3.5rem] font-bold mb-4 tracking-[-0.01em]">
          One Call a Week.
        </h2>
        <p className="font-display text-2xl md:text-3xl text-muted-foreground mb-16 tracking-[-0.01em]">
          That's All We Need.
        </p>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline vertical line — fades to transparent at bottom */}
        <div className="absolute left-[23px] top-0 w-px"
          style={{
            height: "calc(100% - 3rem)",
            background: "linear-gradient(to bottom, hsl(22 100% 58%) 0%, hsl(22 100% 58% / 0.15) 85%, transparent 100%)",
          }} />

        <div className="space-y-12">
          {steps.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="flex gap-6 hover:translate-x-1 transition-transform duration-200">
                {/* Step circle */}
                <div className="relative z-10 w-12 h-12 rounded-full flex items-center
                                justify-center shrink-0 border border-border/50"
                  style={{ background: "hsl(var(--surface-2))" }}>
                  <span className="text-xs font-bold font-mono"
                    style={{ color: "hsl(22 100% 58%)" }}>
                    {s.num}
                  </span>
                </div>

                {/* Step content */}
                <div className={`pt-2 ${s.isFinal ? "border-l-2 pl-4" : ""}`}
                  style={s.isFinal ? { borderColor: "hsl(22 100% 58% / 0.6)" } : {}}>
                  <h3 className={`font-display font-bold mb-1.5 tracking-[-0.01em]
                                  ${s.isFinal ? "text-2xl" : "text-lg"}`}>
                    {s.title}
                  </h3>
                  <p className={`leading-relaxed text-sm
                                 ${s.isFinal ? "text-foreground/80" : "text-muted-foreground"}`}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Fade-out gradient tail after last step */}
        <div className="absolute left-[23px] bottom-0 w-px h-12"
          style={{ background: "linear-gradient(to bottom, hsl(22 100% 58% / 0.15), transparent)" }} />
      </div>

    </div>
  </section>
);

export default ProcessSection;
