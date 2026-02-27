import ScrollReveal from "./ScrollReveal";

const FinalCTA = () => (
  <section className="section-padding" id="book">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-8">
          You can keep rebuilding credibility every time. Or you can{" "}
          <span className="text-gradient-ember">build it once</span> and let it compound for the rest of your career.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <a
          "<a href="https://calendly.com/yeray-lazarushq/30min" target="_blank" rel="noopener noreferrer">
          className="inline-block bg-gradient-ember text-background font-bold px-10 py-5 rounded-xl text-xl animate-pulse-glow hover:scale-105 transition-transform mb-4"
        >
          See If You Qualify
        </a>
        <p className="text-muted-foreground max-w-md mx-auto">
          No pitch. We'll look at where you are, what you're building, and whether this is the right moment. If it's a fit, we can start within the week.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
