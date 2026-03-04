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

      {/* Comparison columns — no borders, strong contrast */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">

        {/* "What we're not" — deliberately dead */}
        <ScrollReveal delay={0.1}>
          <div className="p-8 rounded-2xl h-full"
            style={{ background: "hsl(var(--surface-1) / 0.4)" }}>
            <h3 className="font-mono text-xs font-bold text-muted-foreground/40 mb-6 uppercase tracking-widest">
              What we're not
            </h3>
            <ul className="space-y-4">
              {notItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3" style={{ opacity: 0.4 }}>
                  <X className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "hsl(var(--muted-foreground) / 0.3)" }} />
                  <span className="text-sm line-through decoration-muted-foreground/30">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* "What we are" — alive */}
        <ScrollReveal delay={0.2}>
          <div className="p-8 rounded-2xl h-full relative overflow-hidden border-l-2"
            style={{
              background: "hsl(var(--surface-2))",
              borderColor: "hsl(22 100% 58% / 0.4)",
            }}>
            {/* Inner ember glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 0% 50%, hsl(22 100% 58% / 0.07) 0%, transparent 60%)",
              }}
            />
            <h3 className="relative font-mono text-xs font-bold mb-6 uppercase tracking-widest"
              style={{ color: "hsl(22 100% 58%)" }}>
              What we are
            </h3>
            <ul className="relative space-y-4">
              {areItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "hsl(22 100% 58%)" }} />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* Thesis statement — pulled out, centered, larger */}
      <ScrollReveal delay={0.35}>
        <div className="text-center max-w-2xl mx-auto mt-10">
          <p className="font-display text-2xl md:text-3xl font-bold leading-snug tracking-[-0.01em]">
            Content is just the output. The real product is{" "}
            <span className="text-gradient-ember italic">
              your positioning, your narrative, your public credibility.
            </span>
          </p>
        </div>
      </ScrollReveal>

    </div>
  </section>
);

export default DifferentiationSection;
