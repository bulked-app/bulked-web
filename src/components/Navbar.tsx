import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";
import { Link } from "react-router-dom";

interface NavbarProps {
  isOwnerPage?: boolean;
}

const Navbar = ({ isOwnerPage = false }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between section-padding">
        <Link to="/" className="text-xl font-extrabold tracking-tight">
          <span className="gradient-text">BULKED</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {isOwnerPage ? (
            <>
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t("nav_app")}
              </Link>
            </>
          ) : (
            <>
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav_features")}</a>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav_how")}</a>
            </>
          )}
          <LanguageToggle />
          <Button asChild variant="outline" size="sm">
            <Link to={isOwnerPage ? "/" : "/owners"}>
              {isOwnerPage ? t("owners_hero_cta") : t("nav_owners")}
            </Link>
          </Button>
          <Button variant="hero" size="sm">{isOwnerPage ? t("owners_hero_cta") : t("nav_join")}</Button>
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
          {isOwnerPage ? (
            <Link to="/" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("nav_app")}
            </Link>
          ) : (
            <>
              <a href="#features" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav_features")}</a>
              <a href="#how-it-works" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav_how")}</a>
              <a href="#screenshots" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav_app")}</a>
              <a href="#testimonials" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav_testimonials")}</a>
              <Link to="/owners" onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav_owners")}</Link>
            </>
          )}
          <LanguageToggle />
          <Button variant="hero" size="sm" className="w-full">{isOwnerPage ? t("owners_hero_cta") : t("nav_join")}</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
