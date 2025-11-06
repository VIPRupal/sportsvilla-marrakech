import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import PricingSection from "@/components/PricingSection";
import OurTeamSection from "@/components/OurTeamSection";
import FinalCTA from "@/components/FinalCTA";
import ContactFormSection from "@/components/ContactFormSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

// Only lazy load the heaviest components (carousel-based)
const VisualTour = lazy(() => import("@/components/VisualTour"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Suspense fallback={<div className="min-h-[60vh] bg-background" />}>
        <VisualTour />
      </Suspense>
      <WhoThisIsFor />
      <PricingSection />
      <OurTeamSection />
      <Suspense fallback={<div className="min-h-[40vh] bg-background" />}>
        <TestimonialsSection />
      </Suspense>
      <FinalCTA />
      <ContactFormSection />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
