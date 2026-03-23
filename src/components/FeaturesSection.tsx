import ScrollReveal from "@/components/ScrollReveal";
import { Dumbbell, MapPin, Cpu, TrendingUp, Search } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const FeaturesSection = () => {
  const { t } = useI18n();

  const features = [
    { icon: Dumbbell, title: t("feat_1_title"), desc: t("feat_1_desc") },
    { icon: MapPin, title: t("feat_2_title"), desc: t("feat_2_desc") },
    { icon: Cpu, title: t("feat_3_title"), desc: t("feat_3_desc") },
    { icon: TrendingUp, title: t("feat_4_title"), desc: t("feat_4_desc") },
    { icon: Search, title: t("feat_5_title"), desc: t("feat_5_desc") },
  ];

  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container mx-auto section-padding">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">{t("feat_badge")}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-balance leading-[1.1]">
            {t("feat_title")}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-pretty">
            {t("feat_desc")}
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <div className="glass-card rounded-xl p-6 h-full hover:border-primary/30 transition-colors duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
