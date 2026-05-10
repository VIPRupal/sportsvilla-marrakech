import { Check } from "lucide-react";
import poolImage from "@assets/generated_images/swimming_pool.webp";
import poolImageMobile from "@assets/generated_images/swimming_pool_mobile.webp";
import livingImage from "@assets/generated_images/Living_Area.webp";
import livingImageMobile from "@assets/generated_images/Living_Area_mobile.webp";

const features = [
  "Sleeps 12 across 6 bedrooms",
  "Padel court, football pitch & basketball",
  "Heated Bali stone pool",
  "Fully equipped gym & outdoor TV",
  "Cook & maid service included",
  "20–25 mins from Marrakech city centre",
];

export default function VillaFeatures() {
  return (
    <section id="features" className="py-10 md:py-16 bg-[#1C1A14]">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">

          {/* Left: content */}
          <div className="w-full md:w-[52%]">
            <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase mb-2">
              Every detail. Every comfort.
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-white mb-6 md:mb-8 leading-snug">
              A Private Sports Resort Built for Memories
            </h2>

            <ul className="space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3" data-testid={`feature-${index}`}>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm md:text-base text-white/90 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: images — side by side on desktop, single image on mobile */}
          <div className="w-full md:w-[48%] flex-shrink-0">
            {/* Mobile: one image full width */}
            <div className="md:hidden rounded-xl overflow-hidden shadow-lg">
              <img
                srcSet={`${poolImageMobile} 800w, ${poolImage} 3200w`}
                sizes="100vw"
                src={poolImage}
                alt="Heated Bali stone pool"
                width={3200} height={2344}
                loading="lazy" decoding="async"
                className="w-full h-52 object-cover"
              />
            </div>

            {/* Desktop: two images side by side */}
            <div className="hidden md:grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={poolImage}
                  alt="Heated Bali stone pool"
                  loading="lazy" decoding="async"
                  className="w-full h-52 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  srcSet={`${livingImageMobile} 800w, ${livingImage} 3200w`}
                  sizes="24vw"
                  src={livingImage}
                  alt="Luxury living area"
                  loading="lazy" decoding="async"
                  className="w-full h-52 object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
