import { Button } from "@/components/ui/button";
import appWorkout from "@/assets/app-workout.png";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] animate-pulse-glow pointer-events-none" />

      <div className="container mx-auto section-padding grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-0">
        <div className="flex flex-col gap-8 max-w-xl">
          <div className="animate-fade-up">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-6">
              {t("hero_badge")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-balance">
              {t("hero_title_1")}{" "}
              <span className="gradient-text">{t("hero_title_2")}</span>
            </h1>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed text-pretty animate-fade-up" style={{ animationDelay: "100ms" }}>
            {t("hero_desc")}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
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

        <div className="relative flex justify-center lg:justify-end animate-slide-left" style={{ animationDelay: "200ms" }}>
          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-primary/20 blur-[40px] scale-90" />
            <img
              src={appWorkout}
              alt="Bulked app workout tracking screen"
              className="relative w-[280px] sm:w-[320px] rounded-[2rem] shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
