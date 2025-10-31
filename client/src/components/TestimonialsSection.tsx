import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { testimonials, testimonialsContent } from "@/data/villa-content";

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-foreground">
            {testimonialsContent.sectionTitle}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {testimonialsContent.sectionSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-8 relative hover-elevate active-elevate-2"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="w-12 h-12 text-primary/20 mb-4" />
              <p className="text-base md:text-lg italic mb-6 text-card-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
