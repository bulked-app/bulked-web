import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Dumbbell, MapPin } from "lucide-react";
import { type TranslationKey, useI18n } from "@/lib/i18n";
import { WAITLIST_URL } from "@/lib/contants";

const TITLE_ICONS = [MapPin, Dumbbell, BarChart3] as const;
const TITLE_TAG_KEYS = [
  "landing_hero_tag_gym",
  "landing_hero_tag_machine",
  "landing_hero_tag_progress",
] as const;
const PROOF_KEYS = [
  "landing_hero_proof_1",
  "landing_hero_proof_2",
  "landing_hero_proof_3",
] as const;
const PANEL_ITEMS: {
  titleKey: TranslationKey;
  descKey: TranslationKey;
}[] = [
  { titleKey: "landing_hero_panel_item_1_title", descKey: "landing_hero_panel_item_1_desc" },
  { titleKey: "landing_hero_panel_item_2_title", descKey: "landing_hero_panel_item_2_desc" },
  { titleKey: "landing_hero_panel_item_3_title", descKey: "landing_hero_panel_item_3_desc" },
];

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-fade absolute inset-x-0 top-0 h-[620px] opacity-60" />
        <div className="absolute left-[12%] top-20 h-56 w-56 rounded-full bg-primary/20 blur-[110px]" />
        <div className="absolute right-[10%] top-36 h-64 w-64 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="container mx-auto section-padding relative py-14 lg:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]">
          <div className="max-w-2xl">
            <div className="mt-7">
              <h1 className="text-balance text-5xl font-extrabold leading-[0.98] sm:text-6xl lg:text-[76px]">
                Bulked
              </h1>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/8 px-3 py-1.5 text-sm font-medium text-yellow-200 shadow-[0_0_24px_rgba(250,204,21,0.12)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75 blur-[2px]" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow-300" />
                </span>
                {t("hero_status_development")}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xl font-semibold text-foreground/92 sm:text-2xl">
                {TITLE_TAG_KEYS.map((tagKey, index) => {
                  const Icon = TITLE_ICONS[index];

                  return (
                    <div key={tagKey} className="flex items-center gap-3">
                      <span>{t(tagKey)}</span>
                      {index < TITLE_TAG_KEYS.length - 1 ? (
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-white/[0.04] text-primary">
                          <Icon size={16} />
                        </span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>

            <p
              className="mt-6 max-w-x text-lg leading-8 text-muted-foreground"
            >
              {t("landing_hero_desc")}
            </p>

            <div
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild variant="hero" size="lg" className="gap-2">
                <a href={WAITLIST_URL} target="_blank" rel="noreferrer">
                  {t("nav_join")} <ArrowRight size={18} />
                </a>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <a href="#features">{t("landing_hero_secondary")}</a>
              </Button>
            </div>

            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5"
            >
              {PROOF_KEYS.map((itemKey) => (
                <span
                  key={itemKey}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t(itemKey)}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="surface-panel relative overflow-hidden rounded-lg p-5 sm:p-6">
              <div className="absolute right-4 top-4 rounded-full border border-border/80 bg-white/[0.1] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {t("landing_hero_panel_eyebrow")}
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="mt-6 grid gap-3">
                  {PANEL_ITEMS.map((item, index) => (
                    <div
                      key={item.titleKey}
                      className="glass-card rounded-lg p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold text-foreground">{t(item.titleKey)}</p>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">{t(item.descKey)}</p>
                        </div>
                        <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
