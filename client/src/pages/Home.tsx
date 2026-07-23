import HeroSection from "@/components/HeroSection";
import VisualTour from "@/components/VisualTour";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import PricingSection from "@/components/PricingSection";
import GoogleReviews from "@/components/GoogleReviews";
import OurTeamSection from "@/components/OurTeamSection";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <VisualTour />
      <PricingSection />
      <GoogleReviews />
      {/* <WhoThisIsFor /> */}
      <OurTeamSection />
      <FinalCTA />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
