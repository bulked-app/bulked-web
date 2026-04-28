import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import LanguageToggle from "@/components/LanguageToggle";
import { Link } from "react-router-dom";
import logo from "@/assets/letter-white.png";
import { WAITLIST_URL } from "@/lib/contants";

interface NavbarProps {
  isOwnerPage?: boolean;
}

const Navbar = ({ isOwnerPage = false }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const waitlistButton = (
    <a href={WAITLIST_URL} target="_blank" rel="noreferrer">
      {t("nav_join")}
      <ArrowRight size={18} />
    </a>
  );

  const links = isOwnerPage
    ? [{ href: "/", label: t("nav_app"), isRoute: true }]
    : [
        { href: "#features", label: t("nav_product") },
        { href: "#connected", label: t("nav_connected") },
        { href: "#access", label: t("nav_access") },
      ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-2xl">
      <div className="container mx-auto flex h-16 items-center justify-between section-padding">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Bulked" className="h-6 w-auto sm:h-7" />
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) =>
            "isRoute" in link && link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ),
          )}
          <LanguageToggle />
          <Button asChild variant="hero" size="sm">
            {waitlistButton}
          </Button>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="glass-card mx-4 mb-4 flex flex-col gap-4 rounded-lg p-5 md:hidden">
          {links.map((link) =>
            "isRoute" in link && link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ),
          )}
          {!isOwnerPage && (
            <Link
              to="/owners"
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("nav_owners_short")}
            </Link>
          )}
          <LanguageToggle />
          <Button asChild variant="hero" size="sm" className="w-full">
            {waitlistButton}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
