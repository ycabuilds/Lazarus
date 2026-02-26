import ScrollReveal from "./ScrollReveal";

const RealitySection = () =>
<section className="section-padding">
    <div className="max-w-3xl mx-auto">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          You Know Visibility Matters.{" "}
          <span className="text-muted-foreground">You Just Don't Have the Bandwidth.</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <p className="text-lg text-muted-foreground leading-relaxed">Your days go into product, team, shipping, fixing things that break. You know building in public helps. But it keeps getting pushed to "later", because doing it well takes more than leftover energy. So nothing compounds.



      </p>
      </ScrollReveal>
    </div>
  </section>;


export default RealitySection;
