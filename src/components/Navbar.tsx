import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between section-padding">
        <a href="#" className="text-xl font-extrabold tracking-tight">
          <span className="gradient-text">BULKED</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
          <a href="#screenshots" className="text-sm text-muted-foreground hover:text-foreground transition-colors">App</a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          <Button variant="hero" size="sm">Join Waitlist</Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 pb-6 pt-4 flex flex-col gap-4 animate-fade-in">
          <a href="#features" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
          <a href="#screenshots" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">App</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          <Button variant="hero" size="sm" className="w-full">Join Waitlist</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
