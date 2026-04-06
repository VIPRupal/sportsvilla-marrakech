import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { heroContent, whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero_section');
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasInteracted) return;

    video.muted = true;
    video.volume = 0;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const attemptPlay = () => {
      if (hasInteracted) return;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => { setHasInteracted(true); })
          .catch(() => {});
      }
    };

    const tryImmediatePlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => { setHasInteracted(true); })
          .catch(() => {});
      }
    };

    if (video.readyState >= 3) {
      tryImmediatePlay();
    } else {
      video.addEventListener('canplay', tryImmediatePlay, { once: true });
    }

    window.addEventListener('scroll', attemptPlay, { once: true, passive: true });
    window.addEventListener('touchstart', attemptPlay, { once: true, passive: true });
    window.addEventListener('click', attemptPlay, { once: true });

    return () => {
      window.removeEventListener('scroll', attemptPlay);
      window.removeEventListener('touchstart', attemptPlay);
      window.removeEventListener('click', attemptPlay);
      video.removeEventListener('canplay', tryImmediatePlay);
    };
  }, [hasInteracted]);

  return (
    <section id="home" className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden bg-gray-800">
      {heroContent.videoUrl ? (
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            preload="auto"
            poster={heroContent.videoPoster}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroContent.videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </div>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </div>
      )}

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/80 text-xs md:text-sm font-medium tracking-widest uppercase mb-3 md:mb-4">
            Marrakech, Morocco
          </p>
          <h1 className="font-serif font-bold text-2xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg mb-3 md:mb-5">
            6-Bed Luxury Sports Villa in Marrakech
          </h1>
          <p className="text-sm md:text-xl text-white/90 mb-2 md:mb-3 drop-shadow-md">
            Private padel court, heated pool & full staff.
          </p>
          <p className="text-sm md:text-xl text-white/90 mb-4 md:mb-6 drop-shadow-md">
            Perfect for groups of 8–12.
          </p>

          <div className="inline-block bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-5 md:mb-8">
            <p className="text-white text-xs md:text-sm font-semibold">
              Limited availability — weekends book fast
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 md:gap-3">
            <Button
              asChild
              size="lg"
              className="w-full max-w-xs md:max-w-sm text-sm md:text-base font-bold bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] px-6 md:px-10 py-3 md:py-4 rounded-full shadow-lg"
              data-testid="button-whatsapp-hero"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Check Availability on WhatsApp
              </a>
            </Button>
            <p className="text-white/70 text-xs">
              Takes 30 seconds • No commitment • Fast reply
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
