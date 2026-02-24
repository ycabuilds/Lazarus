import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const months = [
  {
    label: "Month 1",
    title: "Clarity",
    desc: "Clear positioning. Clear narrative. You finally know what you're saying and why.",
  },
  {
    label: "Month 2",
    title: "Visibility",
    desc: "Consistent visibility. Recognition from the right people.",
  },
  {
    label: "Month 3+",
    title: "Momentum",
    desc: "Inbound. Leverage. Momentum. Not hype — signal.",
  },
];

const TimelineSection = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-16 text-center">
          The 90-Day <span className="text-gradient-ember">Timeline</span>
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Progress bar - behind circles */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border z-0" />
        <motion.div
          className="hidden md:block absolute top-6 left-0 h-px bg-gradient-ember z-0"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {months.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <div className="text-center md:text-left">
                <div className="hidden md:flex w-12 h-12 rounded-full bg-secondary border border-primary/50 items-center justify-center mb-6 mx-auto md:mx-0 relative z-10">
                  <span className="text-xs font-bold text-primary">{i + 1}</span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
                  {m.label}
                </span>
                <h3 className="font-display text-xl font-bold mb-2">{m.title}</h3>
                <p className="text-muted-foreground">{m.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
