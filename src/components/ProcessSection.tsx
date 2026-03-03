import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

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

      {/* Section label */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-4 h-px bg-gradient-ember" />
          <span className="section-label">05 — Process</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-[3.5rem] font-bold mb-4 tracking-[-0.02em]">
          One Call a Week.
        </h2>
        <p className="font-display text-2xl md:text-3xl text-muted-foreground mb-16 tracking-[-0.01em]">
          That's All We Need.
        </p>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-[23px] top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, hsl(22 100% 58%) 0%, hsl(22 100% 58% / 0.2) 100%)" }} />

        {/* Traveling ember dot */}
        <motion.div
          className="absolute left-[19px] w-5 h-5 rounded-full z-20 -translate-x-1/2 glow-ember-sm"
          style={{ background: "linear-gradient(135deg, hsl(18 100% 52%), hsl(42 100% 50%))" }}
          initial={{ top: "0%" }}
          whileInView={{ top: "calc(100% - 20px)" }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        <div className="space-y-10">
          {steps.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="flex gap-6 hover:translate-x-1 transition-transform duration-200">
                {/* Step circle */}
                <div className="relative gradient-border z-10 w-12 h-12 rounded-full flex items-center
                                justify-center shrink-0"
                  style={{ background: "hsl(var(--surface-2))" }}>
                  <span className="text-xs font-bold font-display"
                    style={{ color: "hsl(22 100% 58%)" }}>
                    {s.num}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-lg font-bold mb-1 tracking-[-0.01em]">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
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
