import { Check } from "lucide-react";
import { ourTeamContent } from "@/data/villa-content";

export default function OurTeamSection() {
  return (
    <section className="py-6 md:py-10 lg:py-12 bg-card">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-3 md:mb-6">
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-1 md:mb-2 text-card-foreground">
            {ourTeamContent.sectionTitle}
          </h2>
          <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">
            {ourTeamContent.sectionSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
          {ourTeamContent.benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start gap-2 md:gap-3"
              data-testid={`benefit-${index}`}
            >
              <div className="flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xs md:text-base font-semibold text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-[10px] md:text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
