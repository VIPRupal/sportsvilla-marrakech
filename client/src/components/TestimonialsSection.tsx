import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star, Shield, Award, Users, MapPin, MessageCircle } from "lucide-react";
import { testimonials, testimonialsContent, whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

const trustBadges = [
  { icon: Star, label: "4.9/5 Rated" },
  { icon: Award, label: "Est. 2016" },
  { icon: Shield, label: "Secure Booking" },
  { icon: MapPin, label: "UK-Based Team" }
];

export default function TestimonialsSection() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <section id="testimonials" className="py-10 md:py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-card-foreground">
            {testimonialsContent.sectionTitle}
          </h2>
          <div className="gold-divider mt-3 mb-3" />
          <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">
            {testimonialsContent.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-4 md:p-6 relative hover-elevate active-elevate-2"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="w-6 h-6 text-primary/20 mb-2 md:mb-3" />
              <p className="text-sm md:text-base italic mb-3 md:mb-5 text-card-foreground leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-2 md:gap-3">
                <Avatar className="w-9 h-9 md:w-10 md:h-10">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xs md:text-sm">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-xs md:text-sm text-card-foreground">{testimonial.name}</p>
                  <div className="flex gap-0.5 my-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-[10px] md:text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto mb-8 md:mb-10">
          {trustBadges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div key={index} className="flex flex-col items-center gap-1.5 p-3 md:p-4 rounded-xl bg-background" data-testid={`trust-badge-${index}`}>
                <IconComponent className="w-5 h-5 text-primary" />
                <span className="text-xs md:text-sm font-semibold text-foreground text-center">{badge.label}</span>
              </div>
            );
          })}
        </div>

        {/* CTA placed right after social proof — highest-intent moment */}
        <div className="text-center flex flex-col items-center gap-2">
          <p className="text-xs md:text-sm text-muted-foreground mb-1">
            Join 100+ groups who've already booked
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] font-bold px-8 rounded-full"
            data-testid="button-whatsapp-testimonials"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('testimonials_section')}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Check Live Availability on WhatsApp
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">No commitment — we reply instantly</p>
        </div>
      </div>
    </section>
  );
}
