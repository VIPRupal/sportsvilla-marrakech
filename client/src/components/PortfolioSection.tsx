import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Users, BedDouble, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioVillas } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

function PhotoSlider({ photos, villaName }: { photos: string[]; villaName: string }) {
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 rounded-t-xl">
      {photos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${villaName} photo ${i + 1}`}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Prev / Next */}
      {photos.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                style={{ width: 8, height: 8, borderRadius: "50%", flexShrink: 0, display: "block", cursor: "pointer", padding: 0, border: "none", background: "none" }}
                className={`transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function PortfolioSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="portfolio" aria-label="Villa portfolio" className="py-3 md:py-5 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="relative flex items-center justify-center mb-6 md:mb-8">
          <div className="text-center">
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-card-foreground">
              Some of Our Villas
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              More stunning properties available for your group
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 absolute right-0">
            <Button size="icon" variant="outline" onClick={scrollPrev} aria-label="Previous villa">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="outline" onClick={scrollNext} aria-label="Next villa">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3">
            {portfolioVillas.map((villa, i) => {
              const waMessage = encodeURIComponent(
                `Hi! I'm interested in ${villa.name} — can you send me more info and availability?`
              );
              const waUrl = `https://wa.me/447454454984?text=${waMessage}`;

              return (
                <div
                  key={i}
                  className="flex-[0_0_80%] sm:flex-[0_0_42%] lg:flex-[0_0_28%] min-w-0"
                >
                  <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">

                    {/* Photos */}
                    <PhotoSlider photos={villa.photos} villaName={villa.name} />

                    {/* Info */}
                    <div className="p-3 flex flex-col gap-2 flex-1">

                      {/* Name + location */}
                      <div>
                        <h3 className="font-semibold text-xs text-gray-900 leading-tight whitespace-nowrap overflow-hidden" style={{fontSize: "clamp(9px, 2vw, 13px)"}}>{villa.name}</h3>
                        <p className="text-[10px] text-muted-foreground">{villa.location}</p>
                      </div>

                      {/* Stats row */}
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-600 whitespace-nowrap overflow-hidden">
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3 text-gray-400" />
                          {villa.guests} guests
                        </span>
                        <span className="flex items-center gap-1">
                          <BedDouble className="w-3 h-3 text-gray-400" />
                          {villa.bedrooms} beds
                        </span>
                        {villa.priceFrom && (
                          <span className="ml-auto font-semibold text-gray-800">
                            {villa.priceFrom}
                          </span>
                        )}
                      </div>

                      {/* Features */}
                      {villa.highlights.length > 0 && (
                        <ul className="flex flex-wrap gap-1 mt-0.5">
                          {villa.highlights.map((h, j) => (
                            <li
                              key={j}
                              className="text-[10px] bg-gray-50 border border-gray-100 rounded-full px-2 py-0.5 text-gray-600"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* WhatsApp CTA */}
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick("portfolio_villa_card")}
                        className="mt-auto flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-semibold transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Enquire on WhatsApp
                      </a>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile nav */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-4">
          <Button size="icon" variant="outline" onClick={scrollPrev} aria-label="Previous villa">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="outline" onClick={scrollNext} aria-label="Next villa">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </section>
  );
}
