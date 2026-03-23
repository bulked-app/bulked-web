import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto section-padding flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="text-lg font-extrabold tracking-tight gradient-text">BULKED</span>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">{t("footer_privacy")}</a>
          <a href="#" className="hover:text-foreground transition-colors">{t("footer_terms")}</a>
          <a href="#" className="hover:text-foreground transition-colors">{t("footer_contact")}</a>
        </div>
        <p className="text-xs text-muted-foreground">{t("footer_rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
