import { Award, Headphones, BadgeCheck, Star, Trophy, Lock } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Marrakech Specialists",
    description: "10+ years experience in luxury villa rentals. We know every detail so you don't have to.",
  },
  {
    icon: Headphones,
    title: "Personal Concierge",
    description: "One dedicated contact from enquiry to checkout. We plan everything around your group.",
  },
  {
    icon: BadgeCheck,
    title: "Best Price Guarantee",
    description: "Found it cheaper online? We'll match the price — no questions asked.",
  },
];

const trustBadges = [
  { icon: Star, label: "4.9/5 Rated" },
  { icon: Trophy, label: "Est. 2016" },
  { icon: Lock, label: "Secure Booking" },
];

export default function OurTeamSection() {
  return (
    <section id="team" aria-label="Our team" className="py-3 md:py-5 bg-card below-fold-section">
      <div className="max-w-5xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-card-foreground mb-4">
            Why Book With Us?
          </h2>

          {/* Trust badges */}
          <div className="inline-flex flex-wrap justify-center gap-3">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 bg-background rounded-full px-3 py-1.5 border border-border"
              >
                <Icon className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {benefits.map(({ icon: Icon, title, description }, i) => (
            <div
              key={i}
              className="bg-background rounded-xl border border-border p-5 md:p-6 flex flex-col items-center text-center gap-3"
              data-testid={`benefit-${i}`}
            >
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">
                  {title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
