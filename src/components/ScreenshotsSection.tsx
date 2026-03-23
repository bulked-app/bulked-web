import ScrollReveal from "@/components/ScrollReveal";
import appWorkout from "@/assets/app-workout.png";
import appProgress from "@/assets/app-progress.png";
import appGyms from "@/assets/app-gyms.png";

const screens = [
  { src: appWorkout, label: "Workout Logging", desc: "Log every set with precision" },
  { src: appProgress, label: "Progress Analytics", desc: "Visualize your gains over time" },
  { src: appGyms, label: "Gym Discovery", desc: "Find gyms with the right gear" },
];

const ScreenshotsSection = () => {
  return (
    <section id="screenshots" className="py-24 lg:py-32">
      <div className="container mx-auto section-padding">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">The App</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-balance leading-[1.1]">
            Designed for the weight room
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {screens.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-[2rem] bg-primary/10 blur-[30px] scale-90" />
                <img
                  src={s.src}
                  alt={s.label}
                  className="relative w-full max-w-[240px] rounded-[1.5rem] shadow-xl"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-lg">{s.label}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
