import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "Bulked helped me stay consistent across three different gyms. Knowing exactly which machines I used each time is a game-changer.",
    name: "Marcus T.",
    detail: "Powerlifter, 4 years",
  },
  {
    quote: "I switched from Hevy because I wanted to log equipment, not just exercises. Bulked nails that.",
    name: "Sara K.",
    detail: "Strength training, 2 years",
  },
  {
    quote: "As a gym owner, having my equipment listed so users can discover us has brought in new members every month.",
    name: "Daniel R.",
    detail: "Owner, Iron Republic Gym",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto section-padding">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-balance leading-[1.1]">
            Lifters love Bulked
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="glass-card rounded-xl p-6 h-full flex flex-col justify-between">
                <p className="text-sm leading-relaxed text-foreground/90 mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.detail}</p>
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
