import { Card } from "@/components/ui/card";
import { Trophy, MapPin, Shield, Home } from "lucide-react";
import { whoThisIsForContent } from "@/data/villa-content";

export default function HowItWorksSection() {
  const getIcon = (iconName: string) => {
    const icons: Record<string, typeof Trophy> = {
      Trophy,
      MapPin,
      Shield,
      Home
    };
    return icons[iconName] || Trophy;
  };

  const steps = [
    {
      number: "1",
      text: "Choose your travel dates and group size"
    },
    {
      number: "2",
      text: "Pay a deposit based on your length of stay"
    },
    {
      number: "3",
      text: "Final balance is due 30 days before arrival"
    }
  ];

  return (
    <section className="py-6 md:py-10 lg:py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-3 md:mb-6">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-1 md:mb-2 text-foreground">
            How It Works
          </h2>
          <p className="text-xs md:text-base text-muted-foreground">
            Booking is simple:
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-3 md:mb-6">
          {steps.map((step, index) => (
            <Card key={index} className="p-2 md:p-6 border-2 border-primary/20">
              <div className="text-center">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-1 md:mb-3">
                  <span className="text-sm md:text-xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                <p className="text-[10px] md:text-base text-card-foreground leading-tight md:leading-relaxed">
                  {step.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-3 md:p-8 border-2 border-primary/20">
          <h3 className="font-serif text-base md:text-2xl font-semibold text-center mb-2 md:mb-4 text-card-foreground">
            {whoThisIsForContent.sectionTitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {whoThisIsForContent.audiences.map((audience, index) => {
              const IconComponent = getIcon(audience.icon);
              return (
                <div 
                  key={index}
                  className="flex items-start gap-2 md:gap-3"
                  data-testid={`item-reason-${index}`}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 md:w-8 md:h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-3 h-3 md:w-5 md:h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs md:text-base font-semibold text-card-foreground mb-0.5">
                      {audience.title}
                    </h4>
                    <p className="text-[10px] md:text-sm text-muted-foreground">
                      {audience.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}
