import ScrollReveal from "@/components/ScrollReveal";
import { useI18n } from "@/lib/i18n";

const TestimonialsSection = () => {
  const { t } = useI18n();

  const testimonials = [
    { quote: t("test_1_quote"), name: t("test_1_name"), detail: t("test_1_detail") },
    { quote: t("test_2_quote"), name: t("test_2_name"), detail: t("test_2_detail") },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto section-padding">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">{t("test_badge")}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-balance leading-[1.1]">
            {t("test_title")}
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
  );
};

export default TestimonialsSection;
