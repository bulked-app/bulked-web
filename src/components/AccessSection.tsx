import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { WAITLIST_URL } from "@/lib/contants";

const BULLET_KEYS = ["access_bullet_1", "access_bullet_2", "access_bullet_3"] as const;

const AccessSection = () => {
  const { t } = useI18n();

  return (
    <section id="access" className="py-24 lg:py-32">
      <div className="container mx-auto section-padding">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow-pill">{t("access_badge")}</span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.04] sm:text-4xl lg:text-5xl">
            {t("access_title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            {t("access_desc")}
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-14 max-w-3xl">
          <article className="surface-panel rounded-lg p-6 sm:p-8">
            <div className="flex min-h-full flex-col">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Sparkles size={16} />
                <span>{t("access_card_label")}</span>
              </div>

              <div className="mt-5">
                <p className="text-3xl font-bold sm:text-4xl">{t("access_card_title")}</p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {t("access_card_desc")}
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {BULLET_KEYS.map((bulletKey) => (
                  <li key={bulletKey} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{t(bulletKey)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button asChild variant="hero" size="lg" className="w-full gap-2 sm:w-auto">
                  <a href={WAITLIST_URL} target="_blank" rel="noreferrer">
                    {t("nav_join")} <ArrowRight size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AccessSection;
