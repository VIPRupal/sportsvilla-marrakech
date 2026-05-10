import { Check, BedDouble, Waves, Trophy, Dumbbell, ConciergeBell, CalendarDays, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

import largePoolImage from "@assets/generated_images/Bali_stone_pool_loungers_57cd748d.png";
import livingImage from "@assets/generated_images/Living_Area.webp";
import bedroomImage from "@assets/generated_images/Bedroom_3.webp";
import gymImage from "@assets/generated_images/Gym.webp";
import padelImage from "@assets/generated_images/Padel_court.webp";

const featureIcons = [
  { icon: BedDouble,     label: "6 Bedrooms",    sub: "Sleeps 12" },
  { icon: Waves,         label: "Heated Pool",   sub: "Year-round" },
  { icon: Trophy,        label: "Padel Court",   sub: "Private" },
  { icon: Dumbbell,      label: "Gym & Fitness", sub: "Fully Equipped" },
  { icon: ConciergeBell, label: "Concierge",     sub: "Included" },
];

const highlights = [
  ["Sleeps 12 across 6 double bedrooms",  "Cook & maid service included"],
  ["Padel & basketball court",            "20–25 mins from Marrakech city centre"],
  ["Heated Bali stone pool",              "High-speed WiFi throughout"],
  ["Football pitch & outdoor TV",         "Gated property with full privacy"],
];

const gridImages = [
  { src: livingImage,  alt: "Luxury living area" },
  { src: bedroomImage, alt: "Luxury double bedroom" },
  { src: gymImage,     alt: "Fully equipped gym" },
  { src: padelImage,   alt: "Private padel court" },
];

export default function VillaFeatures() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <section id="features" className="py-10 md:py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 md:px-6">

        {/* Label */}
        <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase text-center mb-2">
          The Villa
        </p>

        {/* Heading */}
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-gray-900 text-center leading-tight mb-3">
          A Private Sports Resort<br />Built for Memories
        </h2>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-500 text-center mb-7 md:mb-8 leading-relaxed">
          Luxury, privacy and world-class facilities –<br className="hidden md:block" /> all in your exclusive villa near Marrakech.
        </p>

        {/* 5 feature icons — horizontal row, scroll on very small screens */}
        <div className="flex items-start justify-between gap-1 mb-8 overflow-x-auto pb-1 -mx-1 px-1">
          {featureIcons.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-1.5 flex-shrink-0 w-[18%] text-center" data-testid={`feature-icon-${i}`}>
                <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-[10px] md:text-xs font-semibold text-gray-800 leading-tight">{item.label}</p>
                <p className="text-[9px] text-gray-400 leading-none">{item.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Large pool image */}
        <div className="rounded-xl overflow-hidden shadow-sm mb-3">
          <img
            src={largePoolImage}
            alt="Luxury Bali stone pool with loungers"
            loading="lazy"
            decoding="async"
            className="w-full h-52 md:h-72 object-cover"
          />
        </div>

        {/* 4-image grid */}
        <div className="grid grid-cols-4 gap-2 mb-7">
          {gridImages.map((img, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-sm">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-20 md:h-28 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Villa Highlights */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-5 mb-7">
          <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase text-center mb-4">
            Villa Highlights
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2.5 gap-x-6">
            {highlights.map((row, ri) =>
              row.map((item, ci) => (
                <div key={`${ri}-${ci}`} className="flex items-start gap-2" data-testid={`highlight-${ri}-${ci}`}>
                  <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-gray-700 leading-snug">{item}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 text-center">
          <CalendarDays className="w-6 h-6 text-primary" />
          <div>
            <p className="font-semibold text-gray-900 text-sm md:text-base">Limited dates available.</p>
            <p className="text-xs text-gray-500">Check availability now to secure your stay.</p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] font-bold rounded-full shadow-sm w-full text-sm"
            data-testid="button-whatsapp-features"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("villa_features")}>
              <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              Check Availability on WhatsApp
            </a>
          </Button>
          <p className="text-xs text-gray-400">No commitment, just fast answers.</p>
        </div>

      </div>
    </section>
  );
}
