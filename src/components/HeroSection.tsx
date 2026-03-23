import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useState, useEffect, useCallback } from "react";

const ROTATING_KEYS = ["hero_rotating_1", "hero_rotating_2", "hero_rotating_3", "hero_rotating_4"] as const;

const HeroSection = () => {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const rotate = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_KEYS.length);
      setIsAnimating(false);
    }, 400);
  }, []);

  useEffect(() => {
    const interval = setInterval(rotate, 2800);
    return () => clearInterval(interval);
  }, [rotate]);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] animate-pulse-glow pointer-events-none" />

      <div className="container mx-auto section-padding py-20 lg:py-0 max-w-3xl text-center flex flex-col items-center gap-8">
        <div className="animate-fade-up">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-6">
            {t("hero_badge")}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] text-balance">
            {t("hero_title_1")}
            <br />
            <span
              className={`gradient-text inline-block transition-all duration-400 ${
                isAnimating
                  ? "opacity-0 translate-y-3 blur-sm"
                  : "opacity-100 translate-y-0 blur-0"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              {t(ROTATING_KEYS[currentIndex])}
            </span>
          </h1>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed text-pretty animate-fade-up max-w-xl" style={{ animationDelay: "100ms" }}>
          {t("hero_desc")}
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-up" style={{ animationDelay: "200ms" }}>
          <Button variant="hero" size="lg" className="gap-2">
            {t("hero_cta")} <ArrowRight size={18} />
          </Button>
          <Button variant="hero-outline" size="lg">
            {t("hero_learn")}
          </Button>
        </div>

        <div className="flex items-center gap-8 pt-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <div>
            <p className="text-2xl font-bold">2.4k+</p>
            <p className="text-xs text-muted-foreground">{t("hero_signups")}</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="text-2xl font-bold">180+</p>
            <p className="text-xs text-muted-foreground">{t("hero_gyms")}</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div>
            <p className="text-2xl font-bold">12k+</p>
            <p className="text-xs text-muted-foreground">{t("hero_workouts")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
