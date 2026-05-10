import { Car, ChefHat, Music, UtensilsCrossed, Waves, Dumbbell, CalendarCheck } from "lucide-react";
import diningImage from "@assets/generated_images/Outdoor_dining_terrace_setup_b6468dbc.png";

const services = [
  { icon: Car, label: "Airport\nTransfers" },
  { icon: ChefHat, label: "Private\nChefs" },
  { icon: Music, label: "VIP\nNightlife" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Waves, label: "Beach Clubs\n& DJs" },
  { icon: Dumbbell, label: "Activities\n& Sports" },
  { icon: CalendarCheck, label: "Full Itinerary\nPlanning" },
];

export default function FullExperience() {
  return (
    <section id="experience" className="py-10 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">

          {/* Left: content */}
          <div className="w-full md:w-[55%]">
            <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase mb-2">
              More than just a villa
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-gray-900 mb-6 md:mb-8 leading-snug">
              We Organise Your Full Marrakech Experience
            </h2>

            {/* 4-col grid → 4+3 layout on all screen sizes */}
            <div className="grid grid-cols-4 gap-x-3 gap-y-5">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-2 text-center" data-testid={`service-${index}`}>
                    <div className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-[10px] md:text-xs text-gray-600 font-medium leading-tight whitespace-pre-line">
                      {service.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: image — hidden on mobile */}
          <div className="hidden md:block w-full md:w-[45%] rounded-xl overflow-hidden shadow-md flex-shrink-0">
            <img
              src={diningImage}
              alt="Group enjoying the Marrakech villa experience"
              loading="lazy"
              decoding="async"
              className="w-full h-[400px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
