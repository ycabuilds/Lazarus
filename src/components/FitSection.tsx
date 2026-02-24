import ScrollReveal from "./ScrollReveal";
import { Check, X } from "lucide-react";

const forYou = [
  "Serious founder",
  "Plan to build more than one venture",
  "Understand leverage and compounding",
];

const notForYou = [
  "Want to stay anonymous",
  "Want quick vanity metrics",
  "Looking for a one-off content service",
];

const FitSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <ScrollReveal delay={0.1}>
          <div className="card-dark p-8 h-full border-primary/20">
            <h3 className="font-display text-xl font-bold mb-6 text-primary">
              ✅ This Is For You If
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="card-dark p-8 h-full">
            <h3 className="font-display text-xl font-bold mb-6 text-muted-foreground">
              ❌ Not For You If
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span>{item}</span>
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
