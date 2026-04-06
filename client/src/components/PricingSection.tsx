import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";
import { whatsappConfig, pricingContent } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function PricingSection() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('pricing_section');
  };

  return (
    <section id="pricing" className="py-10 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-3 md:mb-5">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-foreground">
            {pricingContent.sectionTitle}
          </h2>
          <div className="gold-divider mt-3 mb-3" />
          <p className="text-xs md:text-sm text-muted-foreground">
            Prices vary depending on dates — message for exact availability
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
          {pricingContent.seasons.map((season, index) => (
            <Card
              key={index}
              className="p-4 md:p-8 text-center hover-elevate active-elevate-2"
              data-testid={`card-pricing-${index}`}
            >
              <h3 className="font-semibold text-xs md:text-lg mb-2 md:mb-4 text-card-foreground">
                {season.name}
              </h3>
              <div className="mb-2 md:mb-4">
                <span className="text-xl md:text-4xl font-bold text-primary">{season.onlinePrice}</span>
                <span className="text-xs md:text-base text-muted-foreground">/nt</span>
              </div>
              <p className="text-[10px] md:text-sm text-muted-foreground mb-1">
                Sleeps {pricingContent.guestCount}
              </p>
              <p className="text-[10px] md:text-sm text-primary font-semibold">
                Free Airport Transfer
              </p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-8 max-w-2xl mx-auto">
          {pricingContent.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-xs md:text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] font-bold px-6 md:px-10 rounded-full w-full md:w-auto text-sm md:text-base"
            data-testid="button-whatsapp-pricing"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Send Your Dates — Check Availability Instantly
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
