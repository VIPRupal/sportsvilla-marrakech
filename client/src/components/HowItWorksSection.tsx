import { Card } from "@/components/ui/card";
import { Calendar, CreditCard, Clock } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: Calendar,
      title: "Choose your travel dates and group size"
    },
    {
      number: "2",
      icon: CreditCard,
      title: "Pay a deposit based on your length of stay"
    },
    {
      number: "3",
      icon: Clock,
      title: "Final balance is due 30 days before arrival"
    }
  ];

  return (
    <section className="py-6 md:py-10 lg:py-12 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 text-foreground">
            🧭 How It Works
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Booking is simple:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.number} className="p-4 md:p-6 text-center hover-elevate">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 md:mb-3">
                    <span className="text-lg md:text-xl font-bold text-primary">{step.number}</span>
                  </div>
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-2 md:mb-3" />
                  <p className="text-xs md:text-base text-card-foreground">
                    {step.title}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-3 md:p-6 bg-muted/50">
          <p className="text-xs md:text-sm text-center text-muted-foreground">
            <span className="font-semibold">E.g.</span> 3 nights = 1.5-night deposit · 6 or 7 nights = 3-night deposit
          </p>
        </Card>
      </div>
    </section>
  );
}
