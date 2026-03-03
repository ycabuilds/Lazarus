import ScrollReveal from "./ScrollReveal";
import { Check, X } from "lucide-react";

const forYou = [
  "You've built something before, or you're about to",
  "You're thinking beyond this one venture",
  "You want your name to open doors, not just your product",
  "You don't have time to build your presence alone",
];

const notForYou = [
  "You want to stay behind the scenes",
  "You're chasing followers, not credibility",
  "You want someone to post for you and disappear",
];

const FitSection = () => (
  <section className="section-padding-sm">
    <div className="max-w-5xl mx-auto">

      <div className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-border/30"
        style={{ background: "hsl(var(--border) / 0.3)" }}>

        {/* For you — elevated */}
        <ScrollReveal delay={0.1}>
          <div className="gradient-border card-elevated p-8 h-full border-l-2 border-primary relative overflow-hidden"
            style={{ borderRadius: 0 }}>
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: "radial-gradient(ellipse at 0% 50%, hsl(22 100% 58% / 0.1) 0%, transparent 60%)",
              }}
            />
            <h3 className="relative font-display text-xs font-bold text-primary mb-6 uppercase tracking-widest flex items-center gap-2">
              <Check className="w-3.5 h-3.5" />
              This Is For You If
            </h3>
            <ul className="relative space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Not for you — muted */}
        <ScrollReveal delay={0.2}>
          <div className="p-8 h-full opacity-70" style={{ background: "hsl(var(--surface-1))", borderRadius: 0 }}>
            <h3 className="font-display text-xs font-bold text-muted-foreground mb-6 uppercase tracking-widest flex items-center gap-2">
              <X className="w-3.5 h-3.5" />
              Not For You If
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground/60">
                  <X className="w-4 h-4 text-muted-foreground/30 shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default FitSection;
