import ScrollReveal from "@/components/ScrollReveal";
import {
  BarChart3,
  Compass,
  Dumbbell,
  MapPinned,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import { type TranslationKey, useI18n } from "@/lib/i18n";

const CARDS: {
  icon: typeof Dumbbell;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}[] = [
  { icon: Dumbbell, titleKey: "product_card_1_title", descKey: "product_card_1_desc" },
  { icon: MapPinned, titleKey: "product_card_2_title", descKey: "product_card_2_desc" },
  { icon: BarChart3, titleKey: "product_card_3_title", descKey: "product_card_3_desc" },
  { icon: Compass, titleKey: "product_card_4_title", descKey: "product_card_4_desc" },
  { icon: TimerReset, titleKey: "product_card_5_title", descKey: "product_card_5_desc" },
  { icon: ShieldCheck, titleKey: "product_card_6_title", descKey: "product_card_6_desc" },
];

const FeaturesSection = () => {
  const { t } = useI18n();

  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container mx-auto section-padding">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow-pill">{t("product_badge")}</span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.04] sm:text-4xl lg:text-5xl">
            {t("product_title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            {t("product_desc")}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {CARDS.map((card, index) => (
            <ScrollReveal key={card.titleKey} delay={index * 70}>
              <article className="glass-card h-full rounded-lg p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <card.icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{t(card.titleKey)}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{t(card.descKey)}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
