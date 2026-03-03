import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/75 backdrop-blur-2xl border-b border-white/[0.05] shadow-[0_1px_0_hsl(20_5%_16%/0.6)]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo with ember mark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-gradient-ember opacity-20 animate-radial-pulse" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-ember" />
          </span>
          <span className="font-display text-[1.1rem] font-bold tracking-[-0.02em]">
            <span className="text-foreground">Lazarus</span>
            <span className="text-gradient-ember">HQ</span>
          </span>
        </a>

        {/* CTA */}
        <a
          href="https://calendly.com/yeray-lazarushq/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-ember text-background font-semibold
                     px-5 py-2.5 rounded-lg text-sm glow-button hover:scale-[1.03]
                     hover:opacity-95 transition-all duration-300"
        >
          Book a Call
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
