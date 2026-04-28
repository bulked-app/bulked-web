import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";
import logo from "@/assets/letter-white.png";

const LINKS = [
  { labelKey: "nav_product", href: "#features" },
  { labelKey: "nav_connected", href: "#connected" },
  { labelKey: "nav_access", href: "#access" },
] as const;

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border/60 py-12">
      <div className="container mx-auto section-padding">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <img src={logo} alt="Bulked" className="h-7 w-auto" />
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{t("footer_summary")}</p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              {LINKS.map((link) => (
                <a key={link.labelKey} href={link.href} className="transition-colors hover:text-foreground">
                  {t(link.labelKey)}
                </a>
              ))}
              <Link to="/owners" className="transition-colors hover:text-foreground">
                {t("nav_owners_short")}
              </Link>
              <Link to="/delete-account" className="transition-colors hover:text-foreground">
                {t("footer_delete_account")}
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">{t("footer_rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
