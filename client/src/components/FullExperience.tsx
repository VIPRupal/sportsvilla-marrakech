import { Car, ChefHat, Music, UtensilsCrossed, Waves, Dumbbell, CalendarCheck } from "lucide-react";
import diningImage from "@assets/generated_images/Outdoor_dining_terrace_setup_b6468dbc.png";

const services = [
  { icon: Car, label: "Airport Transfers" },
  { icon: ChefHat, label: "Private Chefs" },
  { icon: Music, label: "VIP Nightlife" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Waves, label: "Beach Clubs & DJs" },
  { icon: Dumbbell, label: "Activities & Sports" },
  { icon: CalendarCheck, label: "Full Itinerary Planning" },
];

export default function FullExperience() {
  return (
    <section id="experience" className="py-10 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-center">

          {/* Left: content */}
          <div className="w-full md:w-[55%]">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-2">
              More than just a villa
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-foreground mb-6 md:mb-8 leading-snug">
              We Organise Your Full Marrakech Experience
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-2 text-center" data-testid={`service-${index}`}>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <p className="text-xs md:text-sm text-foreground font-medium leading-tight">{service.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: image */}
          <div className="w-full md:w-[45%] rounded-xl overflow-hidden shadow-md flex-shrink-0">
            <img
              src={diningImage}
              alt="Group enjoying the Marrakech villa experience"
              loading="lazy"
              decoding="async"
              className="w-full h-64 md:h-[420px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
