import HeroSection from "@/components/HeroSection";
import PressBar from "@/components/PressBar";
import HowItWorks from "@/components/HowItWorks";
import VillaFeatures from "@/components/VillaFeatures";
import FullExperience from "@/components/FullExperience";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PressBar />
      <HowItWorks />
      <VillaFeatures />
      <FullExperience />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTA />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
