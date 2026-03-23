import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      <div className="container mx-auto section-padding relative">
        <ScrollReveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-balance leading-[1.1]">
            Ready to <span className="gradient-text">get Bulked?</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg text-pretty">
            Join thousands of lifters tracking smarter. Sign up for early access and be the first to know when we launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="hero" size="lg" className="gap-2">
              Join the Waitlist <ArrowRight size={18} />
            </Button>
            <Button variant="hero-outline" size="lg">
              For Gym Owners
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
