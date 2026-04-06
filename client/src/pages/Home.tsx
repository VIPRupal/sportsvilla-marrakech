import HeroSection from "@/components/HeroSection";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import HowItWorks from "@/components/HowItWorks";
import VillaExperience from "@/components/VillaExperience";
import VisualTour from "@/components/VisualTour";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhoThisIsFor />
      <HowItWorks />
      <VillaExperience />
      <VisualTour />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTA />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
