import { useI18n } from "@/lib/i18n";

const LanguageToggle = () => {
  const { lang, setLang } = useI18n();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "pt" : "en")}
      className="flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md border border-border/50 hover:border-border"
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "text-foreground" : ""}>EN</span>
      <span className="text-border">/</span>
      <span className={lang === "pt" ? "text-foreground" : ""}>PT</span>
    </button>
  );
};

export default LanguageToggle;
