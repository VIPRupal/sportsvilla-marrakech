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
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-card-foreground">
            {pricingContent.sectionTitle}
          </h2>
        </div>
        
        <Card className="p-8 md:p-12 border-2 border-primary/20">
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-4xl md:text-6xl font-bold text-card-foreground">{pricingContent.pricePerNight}</span>
              <span className="text-xl md:text-2xl text-muted-foreground">/night</span>
            </div>
            <p className="text-base md:text-lg text-muted-foreground">
              Sleeps {pricingContent.guestCount} = <span className="font-semibold text-primary">{pricingContent.pricePerPerson} per person</span>
            </p>
          </div>
          
          <div className="space-y-4 mb-8">
            {pricingContent.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-base md:text-lg text-card-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {pricingContent.badges.map((badge, index) => {
              const IconComponent = getIcon(badge.icon);
              return (
                <Badge key={index} variant={index === pricingContent.badges.length - 1 ? "default" : "secondary"} className="px-4 py-2 text-sm">
                  <IconComponent className="w-4 h-4 mr-2" />
                  {badge.text}
                </Badge>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg" 
              className="flex-1 text-base md:text-lg"
              data-testid="button-whatsapp-pricing"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                {heroContent.ctaText}
              </a>
            </Button>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            {pricingContent.bonusText}
          </p>
        </Card>
      </div>
    </section>
  );
}
