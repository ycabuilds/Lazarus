import ScrollReveal from "./ScrollReveal";
import { Shield, Zap } from "lucide-react";

const GuaranteesSection = () => (
  <section className="section-padding">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-center">
          We Put Our <span className="text-gradient-ember">Money on It.</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Two guarantees. No fine print. If we don't deliver, you don't pay.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-6">
        <ScrollReveal delay={0.1}>
          <div className="card-dark p-8 h-full">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">30-Day Alignment Guarantee</h3>
            <p className="text-muted-foreground leading-relaxed">
              If after 30 days you don't feel like we've nailed your positioning and narrative, walk away. No questions, no invoice, no hard feelings.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="card-dark p-8 h-full">
            <Zap className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-display text-xl font-bold mb-3">60-Day Signal Guarantee</h3>
            <p className="text-muted-foreground leading-relaxed">
              If by day 60 you haven't seen real traction, inbound DMs, engagement growth, recognition from people who matter — we work for free until you do.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default GuaranteesSection;
