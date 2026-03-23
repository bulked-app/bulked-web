import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { num: "01", title: "Choose your gym", desc: "Search or select the gym you're training at today." },
  { num: "02", title: "Log exercises", desc: "Pick exercises, select equipment, and record your sets." },
  { num: "03", title: "Track progress", desc: "Watch your strength and volume grow over time." },
  { num: "04", title: "Improve performance", desc: "Use insights to optimize your training splits." },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto section-padding">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">How it works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-balance leading-[1.1]">
            From gym door to gains
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
