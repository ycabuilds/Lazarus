import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center section-padding pt-32">
    {/* Radial glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] bg-gradient-ember pointer-events-none" />

    <div className="relative z-10 max-w-4xl mx-auto text-center">
      {/* Heartbeat SVG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mx-auto mb-8 w-64"
      >
        <svg viewBox="0 0 300 100" className="w-full">
          <motion.path
            d="M 0 50 L 300 50"
            stroke="hsl(22 100% 58%)"
            strokeWidth="2"
            fill="none"
            initial={{ d: "M 0 50 L 300 50" }}
            animate={{
              d: [
                "M 0 50 L 300 50",
                "M 0 50 L 100 50 L 120 20 L 140 80 L 160 35 L 180 50 L 300 50",
                "M 0 50 L 300 50",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
      >
        Own Your <span className="text-gradient-ember">Permanent Distribution Advantage.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        Lazarus builds narrative infrastructure that compounds across every company, project, or move you make.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex flex-col items-center gap-4"
      >
        <a
          href="#book"
          className="inline-block bg-gradient-ember text-background font-bold px-8 py-4 rounded-xl text-lg animate-pulse-glow hover:scale-105 transition-transform"
        >
          Book Your 30-Minute Call
        </a>
        <p className="text-sm text-muted-foreground">
          We work with max <span className="text-foreground font-medium">5 founders</span> at a time.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
