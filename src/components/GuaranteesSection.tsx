import ScrollReveal from "./ScrollReveal";
import { Shield, Zap } from "lucide-react";

const GuaranteesSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 text-center">
          Zero Risk. <span className="text-gradient-ember">Full Alignment.</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6">
        <ScrollReveal delay={0.1}>
          <div className="card-dark p-8 h-full">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">Alignment Guarantee</h3>
            <p className="text-muted-foreground leading-relaxed">
              If after 30 days you don't feel aligned on positioning and narrative — walk away, no questions.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="card-dark p-8 h-full">
            <Zap className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">Signal Guarantee</h3>
            <p className="text-muted-foreground leading-relaxed">
              If by day 60 you don't see real traction — engagement, inbound signals, recognition — we work for free until you do.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default GuaranteesSection;
