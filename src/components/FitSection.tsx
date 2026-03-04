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
  <section className="pt-16 pb-0 px-6">
    <div className="max-w-5xl mx-auto">

      <div className="grid md:grid-cols-2 gap-4">

        {/* For you — warm tint, inviting */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl p-8 h-full"
            style={{ background: "hsl(22 20% 8%)" }}>
            <h3 className="font-mono text-xs font-bold mb-6 uppercase tracking-widest"
              style={{ color: "hsl(22 100% 58%)" }}>
              This Is For You If
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "hsl(22 100% 58%)" }} />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Not for you — cooler, recessive */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl p-8 h-full"
            style={{ background: "hsl(var(--surface-1) / 0.3)" }}>
            <h3 className="font-mono text-xs font-bold mb-6 uppercase tracking-widest text-muted-foreground/50">
              Not For You If
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3" style={{ opacity: 0.5 }}>
                  <X className="w-4 h-4 shrink-0 mt-0.5 text-muted-foreground/40" />
                  <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
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
