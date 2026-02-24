import ScrollReveal from "./ScrollReveal";
import { X, Check } from "lucide-react";

const notItems = [
  "Social media management",
  "Vanity posting",
  "Ghostwriting random thoughts",
  "A content service",
];

const areItems = [
  "Narrative positioning",
  "Public credibility architecture",
  "A compounding distribution channel you own",
  "Your unfair advantage across every future venture",
];

const DifferentiationSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center">
          This Is <span className="text-gradient-ember">Not</span> Social Media Management.
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <ScrollReveal delay={0.1}>
          <div className="card-dark p-8 h-full">
            <h3 className="font-display text-lg font-bold text-muted-foreground mb-6 uppercase tracking-wider">
              What we're not
            </h3>
            <ul className="space-y-4">
              {notItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="card-dark p-8 h-full border-primary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-ember opacity-[0.03]" />
            <h3 className="relative font-display text-lg font-bold text-primary mb-6 uppercase tracking-wider">
              What we are
            </h3>
            <ul className="relative space-y-4">
              {areItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3}>
        <p className="text-center text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
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
