import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, CreditCard, Gift } from "lucide-react";
import { whatsappConfig, pricingContent, heroContent } from "@/data/villa-content";

export default function PricingSection() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const getIcon = (iconName: string) => {
    const icons: Record<string, typeof Calendar> = {
      Calendar,
      CreditCard,
      Gift
    };
    return icons[iconName] || Calendar;
  };

  return (
    <section className="py-6 md:py-8 lg:py-10 bg-card">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-4">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-card-foreground">
            {pricingContent.sectionTitle}
          </h2>
        </div>
        
        <Card className="p-6 md:p-8 border-2 border-primary/20">
          <div className="text-center mb-4">
            <div className="flex items-baseline justify-center gap-2 mb-1">
              <span className="text-3xl md:text-5xl font-bold text-card-foreground">{pricingContent.pricePerNight}</span>
              <span className="text-lg md:text-xl text-muted-foreground">/night</span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              Sleeps {pricingContent.guestCount} = <span className="font-semibold text-primary">{pricingContent.pricePerPerson} per person</span>
            </p>
          </div>
          
          <div className="space-y-2 mb-4">
            {pricingContent.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-card-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {pricingContent.badges.map((badge, index) => {
              const IconComponent = getIcon(badge.icon);
              return (
                <Badge key={index} variant={index === pricingContent.badges.length - 1 ? "default" : "secondary"} className="px-3 py-1 text-xs md:text-sm">
                  <IconComponent className="w-3 h-3 mr-1" />
                  {badge.text}
                </Badge>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              asChild
              size="lg" 
              className="flex-1 text-sm md:text-base"
              data-testid="button-whatsapp-pricing"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                {heroContent.ctaText}
              </a>
            </Button>
          </div>
          
          <p className="text-center text-xs md:text-sm text-muted-foreground mt-3">
            {pricingContent.bonusText}
          </p>
        </Card>
      </div>
    </section>
  );
}
