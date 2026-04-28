import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ConnectedSection from "@/components/ConnectedSection";
import AccessSection from "@/components/AccessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ConnectedSection />
      <AccessSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
