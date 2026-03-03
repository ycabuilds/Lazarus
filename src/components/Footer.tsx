const Footer = () => (
  <footer className="pt-px pb-14 mt-4">
    <div className="section-divider mb-10 mx-6" />
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo — matches header */}
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-gradient-ember" />
          <span className="font-display text-base font-bold tracking-[-0.02em]">
            <span className="text-foreground">Lazarus</span>
            <span className="text-gradient-ember">HQ</span>
          </span>
        </div>

        <p className="text-sm italic"
          style={{ color: "hsl(var(--muted-foreground) / 0.6)" }}>
          Built for founders who refuse to start from zero.
        </p>

        <p className="text-xs"
          style={{ color: "hsl(var(--muted-foreground) / 0.4)" }}>
          © {new Date().getFullYear()} LazarusHQ. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
