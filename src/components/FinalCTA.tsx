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
          href="#book"
          className="inline-block bg-gradient-ember text-background font-bold px-10 py-5 rounded-xl text-xl animate-pulse-glow hover:scale-105 transition-transform mb-4"
        >
          Book Your 30-Minute Call
        </a>
        <p className="text-muted-foreground max-w-md mx-auto">
          No pitch. We look at fit, timing, and leverage potential. If it's a yes, we start. If not, no pressure.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
