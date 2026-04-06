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

          {/* Social proof — builds instant trust */}
          <div className="flex items-center justify-center gap-1.5 mb-4 md:mb-5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-white/90 text-xs md:text-sm font-medium">
              Trusted by 100+ groups · UK-based team
            </p>
          </div>

          {/* Headline — clear, benefit-led, no ambiguity */}
          <h1 className="font-serif font-bold text-2xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg mb-3 md:mb-5">
            Marrakech's No.1 Luxury Sports Villa for Groups
          </h1>

          {/* Subheadline — scannable bullet format */}
          <p className="text-sm md:text-lg text-white/90 mb-5 md:mb-7 drop-shadow-md">
            Private padel court &nbsp;•&nbsp; Heated pool &nbsp;•&nbsp; Cook & maid included
          </p>

          {/* Urgency bar */}
          <div className="inline-block bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-5 md:mb-8">
            <p className="text-white text-xs md:text-sm font-semibold">
              🔥 Limited dates remaining — weekends book out fast
            </p>
          </div>

          {/* CTA + friction-reducing microcopy */}
          <div className="flex flex-col items-center gap-2 md:gap-3">
            <Button
              asChild
              size="lg"
              className="w-full max-w-xs md:max-w-sm text-sm md:text-base font-bold bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] px-6 md:px-10 py-3 md:py-4 rounded-full shadow-lg"
              data-testid="button-whatsapp-hero"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Check Live Availability on WhatsApp
              </a>
            </Button>
            <p className="text-white/70 text-xs">
              Takes 30 seconds &nbsp;•&nbsp; No commitment &nbsp;•&nbsp; We reply instantly
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
