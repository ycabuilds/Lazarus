const Footer = () => (
  <footer className="border-t border-border px-6 py-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="font-display text-lg font-bold tracking-tight">
        <span className="text-foreground">Lazarus</span>
        <span className="text-gradient-ember">HQ</span>
      </div>
      <p className="text-sm text-muted-foreground">
        Built for founders who refuse to start from zero.
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} LazarusHQ. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
