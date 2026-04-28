import ScrollReveal from "@/components/ScrollReveal";
import { Activity, Building2, Compass, GitBranchPlus, Radar, ScanSearch } from "lucide-react";
import { type TranslationKey, useI18n } from "@/lib/i18n";

const CARDS: {
  icon: typeof Building2;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}[] = [
  { icon: Building2, titleKey: "connected_card_1_title", descKey: "connected_card_1_desc" },
  { icon: ScanSearch, titleKey: "connected_card_2_title", descKey: "connected_card_2_desc" },
  { icon: Activity, titleKey: "connected_card_3_title", descKey: "connected_card_3_desc" },
  { icon: Radar, titleKey: "connected_card_4_title", descKey: "connected_card_4_desc" },
  { icon: GitBranchPlus, titleKey: "connected_card_5_title", descKey: "connected_card_5_desc" },
  { icon: Compass, titleKey: "connected_card_6_title", descKey: "connected_card_6_desc" },
];

const ConnectedSection = () => {
  const { t } = useI18n();

  return (
    <section id="connected" className="py-24 lg:py-32">
      <div className="container mx-auto section-padding">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start">
          <ScrollReveal className="max-w-xl">
            <span className="eyebrow-pill">{t("connected_badge")}</span>
            <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.04] sm:text-4xl lg:text-5xl">
              {t("connected_title")}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{t("connected_desc")}</p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {CARDS.map((card, index) => (
              <ScrollReveal key={card.titleKey} delay={index * 70}>
                <article className="surface-panel h-full rounded-lg p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-white/[0.03] text-primary">
                    <card.icon size={18} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{t(card.titleKey)}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{t(card.descKey)}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedSection;
