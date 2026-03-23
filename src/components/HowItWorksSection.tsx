import ScrollReveal from "@/components/ScrollReveal";
import { useI18n } from "@/lib/i18n";

const HowItWorksSection = () => {
  const { t } = useI18n();

  const steps = [
    { num: "01", title: t("how_1_title"), desc: t("how_1_desc") },
    { num: "02", title: t("how_2_title"), desc: t("how_2_desc") },
    { num: "03", title: t("how_3_title"), desc: t("how_3_desc") },
    { num: "04", title: t("how_4_title"), desc: t("how_4_desc") },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto section-padding">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">{t("how_badge")}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-balance leading-[1.1]">
            {t("how_title")}
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 100}>
              <div className="relative">
                <span className="text-6xl font-black text-primary/10 leading-none">{s.num}</span>
                <h3 className="text-lg font-bold mt-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 h-px bg-border" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
