import ScrollReveal from "./ScrollReveal";
import { X, Check } from "lucide-react";

const notItems = [
  "Social media management",
  "Vanity posting",
  "Ghostwriting random thoughts",
  "A content service",
];

const areItems = [
  "Your story, sharpened and made visible to the right people",
  "A public track record that makes investors and partners come to you",
  "A compounding distribution channel you own",
  "The reputation that opens every door from here forward",
];

const DifferentiationSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">

      {/* Section label */}
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="inline-block w-4 h-px bg-gradient-ember" />
          <span className="section-label">03 — Differentiation</span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-[3.5rem] font-bold mb-12 tracking-[-0.01em] leading-[1.1]">
          This Is <span className="text-gradient-ember italic">Not</span> Social Media Management.
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-border/30 mb-12"
        style={{ background: "hsl(var(--border) / 0.3)" }}>

        {/* "Not for you" — muted */}
        <ScrollReveal delay={0.1}>
          <div className="p-8 h-full opacity-75" style={{ background: "hsl(var(--surface-1))" }}>
            <h3 className="font-display text-xs font-bold text-muted-foreground/60 mb-6 uppercase tracking-widest">
              What we're not
            </h3>
            <ul className="space-y-4">
              {notItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground/50">
                  <X className="w-4 h-4 text-muted-foreground/30 shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* "What we are" — premium */}
        <ScrollReveal delay={0.2}>
          <div className="p-8 h-full relative overflow-hidden" style={{ background: "hsl(var(--surface-2))" }}>
            {/* Top ember line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-ember opacity-60" />
            {/* Inner ember glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, hsl(22 100% 58% / 0.2) 0%, transparent 60%)",
              }}
            />
            <h3 className="relative font-display text-xs font-bold mb-6 uppercase tracking-widest"
              style={{ color: "hsl(22 100% 58%)" }}>
              What we are
            </h3>
            <ul className="relative space-y-4">
              {areItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3}>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Content is just the output. The real product is{" "}
          <span className="text-foreground font-semibold">
            your positioning, your narrative, your public credibility.
          </span>
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default DifferentiationSection;
