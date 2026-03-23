import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";

const CTASection = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="container mx-auto section-padding relative">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance leading-[1.1]">
            {t("cta_title_1")}<span className="gradient-text">{t("cta_title_2")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg text-pretty">
            {t("cta_desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="hero" size="lg" className="gap-2">
              {t("cta_btn")} <ArrowRight size={18} />
            </Button>
            <Link to="/owners">
              <Button variant="hero-outline" size="lg">
                {t("nav_owners")}
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
