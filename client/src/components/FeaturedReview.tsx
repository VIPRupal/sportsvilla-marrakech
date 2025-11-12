import { Star } from "lucide-react";

export default function FeaturedReview() {
  return (
    <section className="py-4 md:py-6 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary text-primary" 
                data-testid={`star-${i + 1}`}
              />
            ))}
          </div>
          
          <span className="text-card-foreground font-medium">
            "Best Crew and Best Service"
          </span>
          
          <span className="text-muted-foreground">
            - R Shah
          </span>
        </div>
      </div>
    </section>
  );
}
