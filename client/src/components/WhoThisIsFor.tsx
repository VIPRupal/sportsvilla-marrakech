import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, MapPin, Shield, Home, Users, MessageCircle } from "lucide-react";
import { whoThisIsForContent, whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function WhoThisIsFor() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const getIcon = (iconName: string) => {
    const icons: Record<string, typeof Trophy> = {
      Trophy, MapPin, Shield, Home, Users
    };
    return icons[iconName] || Trophy;
  };

  return (
    <section id="features" className="py-10 md:py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-card-foreground">
            {whoThisIsForContent.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-10">
          {whoThisIsForContent.audiences.map((audience, index) => {
            const IconComponent = getIcon(audience.icon);
            return (
              <Card
                key={index}
                className="p-4 md:p-6 hover-elevate active-elevate-2 text-center"
                data-testid={`card-reason-${index}`}
              >
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-card-foreground leading-tight">
                      {audience.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-snug hidden md:block">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center flex flex-col items-center gap-2">
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] font-bold px-8 rounded-full"
            data-testid="button-whatsapp-features"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('features_section')}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Check Availability Now
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">We reply within minutes</p>
        </div>
      </div>
    </section>
  );
}
