import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, BedDouble, Waves, Trophy, ConciergeBell } from "lucide-react";
import { heroContent, whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

const featureIcons = [
  { icon: BedDouble, label: "6 Bedrooms", sub: "Sleeps 12" },
  { icon: Waves, label: "Heated Pool", sub: "Year-round" },
  { icon: Trophy, label: "Padel Court", sub: "Private" },
  { icon: ConciergeBell, label: "Concierge", sub: "Included" },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("hero_section");
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasInteracted) return;
    video.muted = true;
    video.volume = 0;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      if (hasInteracted) return;
      video.play().then(() => setHasInteracted(true)).catch(() => {});
    };

    if (video.readyState >= 3) tryPlay();
    else video.addEventListener("canplay", tryPlay, { once: true });

    window.addEventListener("scroll", tryPlay, { once: true, passive: true });
    window.addEventListener("touchstart", tryPlay, { once: true, passive: true });
    window.addEventListener("click", tryPlay, { once: true });

    return () => {
      window.removeEventListener("scroll", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("click", tryPlay);
      video.removeEventListener("canplay", tryPlay);
    };
  }, [hasInteracted]);

  return (
    <section id="home" className="relative h-[88vh] md:h-screen w-full overflow-hidden bg-gray-900">
      {/* Background video */}
      {heroContent.videoUrl ? (
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay loop muted playsInline preload="auto"
            poster={heroContent.videoPoster}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroContent.videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75" />
        </div>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75" />
        </div>
      )}

      {/* Top nav bar */}
      <div className="relative z-20 w-full px-4 md:px-8 pt-4 md:pt-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span className="text-white font-serif font-bold text-base md:text-xl tracking-wide">VIP</span>
          <span className="text-primary font-semibold text-[9px] md:text-[11px] tracking-[0.2em] uppercase">Concierge</span>
        </div>

        {/* Trust — centre */}
        <div className="hidden md:flex flex-col items-center gap-0.5">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-white/80 text-[10px] tracking-wide">Trusted by 15,000+ Marrakech travellers since 2016</p>
        </div>

        {/* Location — right */}
        <div className="hidden md:flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
          <div className="text-right">
            <p className="text-white/90 text-[10px] font-semibold">Local Team in Marrakech</p>
            <p className="text-white/60 text-[9px]">24/7 Concierge Service</p>
          </div>
        </div>

        {/* Mobile: stars only */}
        <div className="flex md:hidden items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-white/70 text-[9px] ml-0.5">15,000+ guests</span>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-12 lg:px-20 pt-16 md:pt-20">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="font-serif font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg mb-2 md:mb-3">
            The Ultimate Sports Villa in Marrakech
          </h1>

          {/* Subheadline */}
          <p className="text-xs md:text-sm font-semibold tracking-[0.15em] text-primary uppercase mb-4 md:mb-6">
            For Groups, Events &amp; Unforgettable Stays
          </p>

          {/* Feature icons — 2x2 grid on mobile, single row on desktop */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-5 mb-4 md:mb-5">
            {featureIcons.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-white text-[10px] md:text-xs font-semibold leading-none">{item.label}</p>
                    <p className="text-white/60 text-[9px] md:text-[10px] leading-none mt-0.5">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Airport transfer badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md px-3 py-1.5 mb-5 md:mb-7">
            <span className="text-white text-xs md:text-sm font-semibold">Free Airport Transfer on Arrival</span>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-stretch md:items-start gap-2">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] font-bold px-7 rounded-full shadow-lg text-sm md:text-base w-full md:w-auto max-w-xs"
              data-testid="button-whatsapp-hero"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Check Availability on WhatsApp
              </a>
            </Button>
            <p className="text-white/60 text-xs">Get a fast response within 15 minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
