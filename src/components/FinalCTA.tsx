import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section className="section-padding relative overflow-hidden" id="book">

    {/* Two overlapping radial ember orbs — bookends the hero glow */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at center, hsl(22 100% 58% / 0.18) 0%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at center, hsl(22 100% 58% / 0.08) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />

    <div className="relative max-w-3xl mx-auto text-center">

      <ScrollReveal>
        {/* Spots Available pill — more urgent */}
        <div className="inline-flex items-center gap-2 mb-8 rounded-full px-4 py-2"
          style={{
            background: "hsl(var(--surface-2))",
            border: "1px solid hsl(var(--border) / 0.6)",
          }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-100"
              style={{ background: "hsl(22 100% 58%)" }} />
            <span className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: "hsl(22 100% 58%)" }} />
          </span>
          <span className="text-xs text-muted-foreground">
            <span className="text-foreground font-medium">2 spots</span> available this month
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-[3.5rem] font-bold leading-[1.1]
                       tracking-[-0.02em] mb-10">
          You can keep rebuilding credibility every time. Or you can{" "}
          <span className="text-gradient-ember italic">build it once</span> and let it compound
          for the rest of your career.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        {/* Button with glow halo */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-gradient-ember opacity-20 blur-2xl rounded-2xl scale-125 pointer-events-none" />
          <a
            href="https://calendly.com/yeray-lazarushq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2.5 bg-gradient-ember text-background
                       font-bold px-10 py-5 rounded-xl text-xl hover:scale-[1.02] hover:opacity-95
                       transition-all duration-300 animate-pulse-glow"
            style={{
              boxShadow: "0 4px 32px hsl(22 100% 58% / 0.4)",
              color: "hsl(20 8% 5%)",
            }}
          >
            See If You Qualify
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Reassuring paragraph — more prominent */}
        <p className="text-foreground/70 max-w-lg mx-auto text-base leading-relaxed">
          No pitch. We'll look at where you are, what you're building, and whether this
          is the right moment. If it's a fit, we can start within the week.
        </p>
      </ScrollReveal>

    </div>
  </section>
);

export default FinalCTA;
