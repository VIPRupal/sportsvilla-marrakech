import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-3 md:mb-6">
          <h2 className="font-serif text-xl md:text-3xl font-semibold mb-1 md:mb-2 text-foreground">
            🧭 How It Works
          </h2>
          <p className="text-xs md:text-base text-muted-foreground">
            Booking is simple:
          </p>
        </div>
        
        <Card className="p-3 md:p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
            <div className="flex items-center text-center md:text-left">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-xs md:text-sm font-bold text-primary-foreground">1</span>
                </div>
                <p className="text-xs md:text-sm text-card-foreground">
                  Choose your travel dates and group size
                </p>
              </div>
            </div>
            
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 rotate-90 md:rotate-0" />
            
            <div className="flex items-center text-center md:text-left">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-xs md:text-sm font-bold text-primary-foreground">2</span>
                </div>
                <p className="text-xs md:text-sm text-card-foreground">
                  Pay a deposit based on your length of stay
                </p>
              </div>
            </div>
            
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 rotate-90 md:rotate-0" />
            
            <div className="flex items-center text-center md:text-left">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-xs md:text-sm font-bold text-primary-foreground">3</span>
                </div>
                <p className="text-xs md:text-sm text-card-foreground">
                  Final balance is due 30 days before arrival
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 md:pt-3 border-t border-border">
            <p className="text-[10px] md:text-xs text-center text-muted-foreground">
              <span className="font-semibold">E.g.</span> 3 nights = 1.5-night deposit · 6 or 7 nights = 3-night deposit
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
