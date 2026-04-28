import { useI18n } from "@/lib/i18n";

const BrazilFlag = () => (
  <svg viewBox="0 0 28 20" className="h-4 w-6" aria-hidden="true">
    <rect width="28" height="20" rx="2" fill="#009B3A" />
    <path d="M14 3 25 10 14 17 3 10 14 3Z" fill="#FFDF00" />
    <circle cx="14" cy="10" r="4" fill="#002776" />
    <path
      d="M10.2 8.8c2.6-.5 5.2-.1 7.6 1"
      fill="none"
      stroke="#fff"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

const UsaFlag = () => (
  <svg viewBox="0 0 28 20" className="h-4 w-6" aria-hidden="true">
    <rect width="28" height="20" rx="2" fill="#B22234" />
    {[2, 5, 8, 11, 14, 17].map((y) => (
      <rect key={y} y={y} width="28" height="1.5" fill="#fff" />
    ))}
    <rect width="12" height="10.5" rx="1.5" fill="#3C3B6E" />
    {[2.2, 5.2, 8.2].map((y) =>
      [2.2, 5, 7.8, 10.6].map((x) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="0.45" fill="#fff" />
      )),
    )}
  </svg>
);

const LanguageToggle = () => {
  const { lang, setLang } = useI18n();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "pt" : "en")}
      className="flex items-center gap-1.5 rounded-full border border-border/80 bg-white/[0.03] px-2.5 py-1.5 text-base text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
      aria-label="Toggle language"
    >
      <span
        aria-hidden="true"
        className={lang === "pt" ? "opacity-100" : "opacity-45"}
      >
        <BrazilFlag />
      </span>
      <span className="text-xs text-border" aria-hidden="true">
        /
      </span>
      <span
        aria-hidden="true"
        className={lang === "en" ? "opacity-100" : "opacity-45"}
      >
        <UsaFlag />
      </span>
    </button>
  );
};

export default LanguageToggle;
