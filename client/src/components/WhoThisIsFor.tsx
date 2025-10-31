import { Card } from "@/components/ui/card";
import { Users, Trophy, Palmtree, Crown } from "lucide-react";
import { whoThisIsForContent } from "@/data/villa-content";

export default function WhoThisIsFor() {
  const getIcon = (iconName: string) => {
    const icons: Record<string, typeof Users> = {
      Users,
      Trophy,
      Palmtree,
      Crown
    };
    return icons[iconName] || Users;
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-card-foreground">
            {whoThisIsForContent.sectionTitle}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {whoThisIsForContent.sectionSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whoThisIsForContent.audiences.map((audience, index) => {
            const IconComponent = getIcon(audience.icon);
            return (
              <Card 
                key={index} 
                className="p-8 hover-elevate active-elevate-2"
                data-testid={`card-audience-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-card-foreground">
                      {audience.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
