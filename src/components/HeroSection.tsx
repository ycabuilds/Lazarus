import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stats = [
  { value: "90", unit: "days", label: "to visible momentum" },
  { value: "5",  unit: "max",  label: "founders at a time" },
  { value: "2×", unit: "avg",  label: "inbound lift by month 2" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-36 overflow-hidden">

    {/* Background orb — bottom left, large */}
    <div
      className="absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full opacity-[0.12]
                 blur-[140px] bg-gradient-ember pointer-events-none animate-radial-pulse"
    />
    {/* Background orb — top right, smaller */}
    <div
      className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06]
                 blur-[100px] bg-gradient-ember pointer-events-none"
    />

    <div className="relative z-10 max-w-5xl mx-auto w-full">

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="flex items-center gap-3 mb-8"
      >
        <span className="inline-block w-6 h-px bg-gradient-ember" />
        <span className="section-label">Founder Reputation Infrastructure</span>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]
                     font-bold leading-[1.0] tracking-[-0.03em] mb-6 max-w-4xl"
        >
          You've Built Before.{" "}
          <span className="animate-shimmer-text">
            Your Reputation Should Show It.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed"
        >
          We build your public narrative so your name opens doors across
          every venture, raise, and deal you'll ever do.
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-start gap-4 mb-16"
        >
          <a
            href="https://calendly.com/yeray-lazarushq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-ember text-background
                       font-bold px-8 py-4 rounded-xl text-base animate-pulse-glow
                       hover:scale-[1.03] hover:opacity-95 transition-all duration-300"
          >
            See If You Qualify
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="self-center text-sm text-muted-foreground">
            Max{" "}
            <span className="text-foreground font-semibold">5 founders</span>
            {" "}at a time
          </p>
        </motion.div>

        {/* Stats bar — gap-px hairline divider pattern (Pitch.com / Linear technique) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden
                     border border-border/50 shadow-[0_8px_48px_hsl(0_0%_0%/0.4)]"
          style={{ background: "hsl(var(--border) / 0.5)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-6 px-4 text-center"
              style={{ background: "hsl(var(--surface-1))" }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold leading-none mb-1 glow-ember-text text-gradient-ember">
                {stat.value}
                <span className="text-lg font-normal text-muted-foreground ml-1">
                  {stat.unit}
                </span>
              </div>
              <span className="text-xs text-muted-foreground mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
