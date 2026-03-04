import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const costItems = [
  "Reintroducing yourself.",
  "Rebuilding trust.",
  "Proving yourself, again.",
  "Starting with zero audience, zero leverage.",
];

const ProblemSection = () => (
  <section className="section-padding-sm">
    <div className="max-w-3xl mx-auto">

      {/* Section label */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-4 h-px bg-gradient-ember" />
          <span className="section-label">01 — Problem</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-[3.5rem] font-bold mb-12 leading-[1.1] tracking-[-0.01em]">
          The Problem Nobody Talks About
        </h2>
      </ScrollReveal>

      {/* Pain lines — with italic ember on key phrase */}
      <div className="space-y-6 mb-14">
        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
            Most founders pour everything into product, team, and execution. Almost none invest
            in the one thing that carries across every venture:{" "}
            <span className="text-gradient-ember italic">their public reputation.</span>
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
            So every time they start something new, they restart attention from scratch. Not
            because they failed, but because they never built something that compounds.
          </p>
        </ScrollReveal>
      </div>

      {/* "Every new venture" heading */}
      <ScrollReveal delay={0.25}>
        <p className="font-display text-xl md:text-2xl font-bold text-foreground mb-8">
          Every new venture means:
        </p>
      </ScrollReveal>

      {/* Cost items — borderless vertical list with large typography + animated divider lines */}
      <div className="mb-14">
        {costItems.map((item, i) => (
          <ScrollReveal key={i} delay={0.3 + i * 0.1}>
            <div className="group py-5 relative">
              <div className="flex items-baseline gap-5">
                {/* Index number */}
                <span
                  className="font-mono text-[0.6rem] font-bold shrink-0 w-5 tabular-nums"
                  style={{ color: "hsl(22 100% 58% / 0.6)", letterSpacing: "0.1em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Item text */}
                <span className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {item}
                </span>
              </div>

              {/* Animated divider line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px"
                style={{ background: "hsl(var(--border) / 0.4)" }}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Ember accent line on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-px origin-left"
                style={{ background: "linear-gradient(to right, hsl(22 100% 58% / 0.6), transparent)" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Closing gradient line / bridge to Reality */}
      <ScrollReveal delay={0.7}>
        <p className="text-xl md:text-2xl font-display font-bold text-gradient-ember text-center">
          That's not a product problem. That's a reputation problem.
        </p>
      </ScrollReveal>

    </div>
  </section>
);

export default ProblemSection;
