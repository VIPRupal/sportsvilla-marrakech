import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, BedDouble, Waves, Trophy, ConciergeBell } from "lucide-react";
import { whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";
import heroImage from "@assets/generated_images/Villa_hero_sunset_view_049ff5ba.png";

const featureIcons = [
  { icon: BedDouble, label: "6 Bedrooms", sub: "Sleeps 12" },
  { icon: Waves, label: "Heated Pool", sub: "Year-round" },
  { icon: Trophy, label: "Padel Court", sub: "Private" },
  { icon: ConciergeBell, label: "Concierge", sub: "Included" },
];

const Star = () => (
  <svg className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function HeroSection() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gray-900"
      style={{ minHeight: "100svh" }}
    >
      {/* Background image */}
      <img
        src={heroImage}
        alt="Luxury sports villa in Marrakech"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 40%" }}
      />
      {/* Dark overlay — heavier at top and bottom, lighter in middle so villa shows */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/65" />

      {/* Top bar */}
      <div className="relative z-20 w-full px-4 md:px-8 pt-4 md:pt-5 flex items-center justify-between">
        <div className="flex flex-col leading-none">
          <span className="text-white font-serif font-bold text-base md:text-xl tracking-wide">VIP</span>
          <span className="text-primary font-semibold text-[8px] md:text-[10px] tracking-[0.22em] uppercase">Concierge</span>
        </div>

        {/* Desktop: stars centre */}
        <div className="hidden md:flex flex-col items-center gap-0.5">
          <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} />)}</div>
          <p className="text-white/80 text-[10px] tracking-wide">Trusted by 15,000+ Marrakech travellers since 2016</p>
        </div>

        {/* Desktop: location right */}
        <div className="hidden md:flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
          <div className="text-right">
            <p className="text-white/90 text-[10px] font-semibold">Local Team in Marrakech</p>
            <p className="text-white/60 text-[9px]">24/7 Concierge Service</p>
          </div>
        </div>

        {/* Mobile: stars + count right */}
        <div className="flex md:hidden items-center gap-1">
          {[...Array(5)].map((_, i) => <Star key={i} />)}
          <span className="text-white/70 text-[9px] ml-0.5">15,000+ guests</span>
        </div>
      </div>

      {/* Hero content — sits just below the top bar on mobile, left-aligned on desktop */}
      <div className="relative z-10 flex flex-col px-4 md:px-12 lg:px-20 pt-6 pb-10 md:pt-28 md:pb-20">
        <div className="w-full max-w-2xl mx-auto md:mx-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="font-serif font-bold text-[2.1rem] leading-[1.12] md:text-5xl lg:text-6xl text-white drop-shadow-lg mb-2 md:mb-3">
            The Ultimate Sports Villa in Marrakech
          </h1>

          <p className="text-[10px] md:text-sm font-bold tracking-[0.18em] text-primary uppercase mb-5 md:mb-6">
            For Groups, Events &amp; Unforgettable Stays
          </p>

          {/* Feature icons — 2×2 grid on mobile (centred), single row on desktop */}
          <div className="grid grid-cols-2 md:flex md:flex-row gap-y-3 gap-x-4 md:gap-6 mb-4 md:mb-5 w-full md:w-auto">
            {featureIcons.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="leading-none text-left">
                    <p className="text-white text-[11px] font-semibold">{item.label}</p>
                    <p className="text-white/55 text-[9px] mt-0.5">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Airport transfer badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded px-3 py-1.5 mb-5 md:mb-6">
            <span className="text-white text-[11px] md:text-sm font-semibold tracking-wide uppercase">
              Free Airport Transfer on Arrival
            </span>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-start gap-2 w-full">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] font-bold rounded-full shadow-lg text-sm w-full md:w-auto md:px-8"
              data-testid="button-whatsapp-hero"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("hero_section")}>
                <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                Check Availability on WhatsApp
              </a>
            </Button>
            <p className="text-white/55 text-xs">Get a fast response within 15 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
