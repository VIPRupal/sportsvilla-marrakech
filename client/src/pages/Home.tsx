import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";

const VisualTour = lazy(() => import("@/components/VisualTour"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const GoogleReviews = lazy(() => import("@/components/GoogleReviews"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const OurTeamSection = lazy(() => import("@/components/OurTeamSection"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Suspense fallback={null}>
        <VisualTour />
        <PricingSection />
        <GoogleReviews />
        <PortfolioSection />
        {/* <WhoThisIsFor /> */}
        <OurTeamSection />
        <FinalCTA />
        <WhatsAppButton />
        <Footer />
      </Suspense>
    </div>
  );
}
