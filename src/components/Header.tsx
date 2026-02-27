import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""}`
      }>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          <span className="text-foreground">Lazarus</span>
          
        </a>
        <a
          "<a href="https://calendly.com/yeray-lazarushq/30min" target="_blank" rel="noopener noreferrer">
          className="bg-gradient-ember text-background font-semibold px-5 py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity">

          Book a Call
        </a>
      </div>
    </motion.header>);

};

export default Header;
