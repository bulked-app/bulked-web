import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { ArrowRight, Package, Eye, BarChart3, Store } from "lucide-react";

const OwnersPage = () => {
  const { t } = useI18n();

  const features = [
    { icon: Package, title: t("owners_feat_1_title"), desc: t("owners_feat_1_desc") },
    { icon: Eye, title: t("owners_feat_2_title"), desc: t("owners_feat_2_desc") },
    { icon: BarChart3, title: t("owners_feat_3_title"), desc: t("owners_feat_3_desc") },
    { icon: Store, title: t("owners_feat_4_title"), desc: t("owners_feat_4_desc") },
  ];

  const steps = [
    { num: "01", title: t("owners_how_1_title"), desc: t("owners_how_1_desc") },
    { num: "02", title: t("owners_how_2_title"), desc: t("owners_how_2_desc") },
    { num: "03", title: t("owners_how_3_title"), desc: t("owners_how_3_desc") },
  ];

  const testimonials = [
    { quote: t("owners_test_1_quote"), name: t("owners_test_1_name"), detail: t("owners_test_1_detail") },
    { quote: t("owners_test_2_quote"), name: t("owners_test_2_name"), detail: t("owners_test_2_detail") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar isOwnerPage />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="container mx-auto section-padding py-20 lg:py-0 max-w-3xl text-center flex flex-col items-center gap-8">
          <div className="animate-fade-up">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-6">
              {t("owners_hero_badge")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-balance">
              {t("owners_hero_title_1")}{" "}
              <span className="gradient-text">{t("owners_hero_title_2")}</span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty animate-fade-up max-w-xl" style={{ animationDelay: "100ms" }}>
            {t("owners_hero_desc")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Button variant="hero" size="lg" className="gap-2">
              {t("owners_hero_cta")} <ArrowRight size={18} />
            </Button>
            <Button variant="hero-outline" size="lg">
              {t("owners_hero_learn")}
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <div>
              <p className="text-2xl font-bold">{t("owners_stat_1")}</p>
              <p className="text-xs text-muted-foreground">{t("owners_stat_1_label")}</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold">{t("owners_stat_2")}</p>
              <p className="text-xs text-muted-foreground">{t("owners_stat_2_label")}</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold">{t("owners_stat_3")}</p>
              <p className="text-xs text-muted-foreground">{t("owners_stat_3_label")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto section-padding">
          <ScrollReveal className="text-center mb-16 lg:mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">{t("owners_feat_badge")}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-balance leading-[1.1]">
              {t("owners_feat_title")}
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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

      {/* How It Works */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto section-padding">
          <ScrollReveal className="text-center mb-16 lg:mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">{t("owners_how_badge")}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-balance leading-[1.1]">
              {t("owners_how_title")}
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {steps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 100}>
                <div className="relative text-center">
                  <span className="text-6xl font-black text-primary/10 leading-none">{s.num}</span>
                  <h3 className="text-lg font-bold mt-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto section-padding">
          <ScrollReveal className="text-center mb-16 lg:mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">{t("owners_test_badge")}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-balance leading-[1.1]">
              {t("owners_test_title")}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((te, i) => (
              <ScrollReveal key={te.name} delay={i * 100}>
                <div className="glass-card rounded-xl p-6 h-full flex flex-col justify-between">
                  <p className="text-sm leading-relaxed text-foreground/90 mb-6">"{te.quote}"</p>
                  <div>
                    <p className="font-semibold text-sm">{te.name}</p>
                    <p className="text-xs text-muted-foreground">{te.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
        <div className="container mx-auto section-padding relative">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance leading-[1.1]">
              {t("owners_cta_title_1")}<span className="gradient-text">{t("owners_cta_title_2")}</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg text-pretty">
              {t("owners_cta_desc")}
            </p>
            <div className="flex justify-center mt-8">
              <Button variant="hero" size="lg" className="gap-2">
                {t("owners_cta_btn")} <ArrowRight size={18} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OwnersPage;
