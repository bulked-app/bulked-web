import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";

const CTASection = () => {
  const { t } = useI18n();

  return (
    <section id="cta" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.16),transparent_38%)]" />
      <div className="container mx-auto section-padding relative">
        <ScrollReveal className="surface-panel mx-auto max-w-4xl rounded-lg px-6 py-12 text-center sm:px-10">
          <h2 className="text-balance text-3xl font-extrabold leading-[1.04] sm:text-4xl lg:text-5xl">
            {t("landing_cta_title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            {t("landing_cta_desc")}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="hero" size="lg" className="gap-2">
              <a href="#access">
                {t("landing_cta_primary")} <ArrowRight size={18} />
              </a>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <Link to="/owners">{t("landing_cta_secondary")}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
