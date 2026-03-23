const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto section-padding flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="text-lg font-extrabold tracking-tight gradient-text">BULKED</span>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Bulked. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
