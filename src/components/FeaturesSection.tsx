import ScrollReveal from "@/components/ScrollReveal";
import { Dumbbell, MapPin, Cpu, TrendingUp, Search, Building2 } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Smart Workout Tracking",
    desc: "Log sets, reps, weight, rest time, and notes — all in a few taps.",
  },
  {
    icon: MapPin,
    title: "Gym-Based History",
    desc: "Every workout is tied to a real location. Know exactly where you trained.",
  },
  {
    icon: Cpu,
    title: "Equipment-Aware Logging",
    desc: "Select the exact machine you used. No more guessing between cable brands.",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    desc: "Visualize strength gains, volume trends, and personal records over time.",
  },
  {
    icon: Search,
    title: "Discover Gyms",
    desc: "Find gyms with the specific equipment you need, wherever you are.",
  },
  {
    icon: Building2,
    title: "Gym Owner Dashboard",
    desc: "Manage your gym profile, equipment catalog, and attract new members.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container mx-auto section-padding">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 text-balance leading-[1.1]">
            Everything you need to level up
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-pretty">
            Built for lifters who care about data, precision, and knowing their gym inside out.
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
