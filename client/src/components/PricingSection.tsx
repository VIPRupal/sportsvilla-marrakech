import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Gift, Sparkles } from "lucide-react";
import { whatsappConfig, pricingContent, heroContent } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function PricingSection() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('pricing_section');
  };

  const getIcon = (iconName: string) => {
    const icons: Record<string, typeof Calendar> = {
      Calendar,
      Gift,
      Sparkles
    };
    return icons[iconName] || Calendar;
  };

  return (
    <section id="pricing" className="py-3 md:py-5 bg-card below-fold-section">
      <div className="max-w-xl mx-auto px-4 md:px-6">
        <div className="text-center mb-3 md:mb-6">
          <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold mb-1 md:mb-2 text-card-foreground">
            {pricingContent.sectionTitle}
          </h2>
          <h3 className="text-xs md:text-sm font-medium text-muted-foreground mt-1 md:mt-2">
            Limited Dates Available – Book Direct
          </h3>
        </div>
        
        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-3 md:mb-4">
          {pricingContent.seasons.map((season, index) => (
            <Card key={index} className="p-2 md:p-4 border-2 border-primary/20">
              <div className="text-center">
                <h3 className="font-semibold text-xs md:text-sm mb-1 md:mb-2 text-card-foreground">
                  {season.name}
                </h3>
                
                <div className="mb-1 md:mb-2">
                  <div className="flex items-baseline justify-center gap-0.5 md:gap-1">
                    <span className="text-base md:text-2xl font-bold text-primary">{season.onlinePrice}</span>
                    <span className="text-[10px] md:text-xs text-muted-foreground">/nt</span>
                  </div>
                </div>
                
                <p className="text-[9px] md:text-xs text-muted-foreground">
                  Sleeps {pricingContent.guestCount}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <Button
          asChild
          size="default"
          className="w-full text-xs md:text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white border-[#25D366]"
          data-testid="button-whatsapp-pricing"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
            Get Live Quote
          </a>
        </Button>
      </div>
    </section>
  );
}
