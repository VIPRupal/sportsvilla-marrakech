import { useRef, useEffect, useState } from "react";
import "./_group.css";
import "./ChristmasRibbon.css";
import { FaSwimmer, FaBed } from "react-icons/fa";
import { GiTennisRacket, GiBasketballBall, GiSoccerBall } from "react-icons/gi";
const heroContent = {videoUrl: "", videoPoster: "/__mockup/images/hero-poster.webp", backgroundImage: "/__mockup/images/hero-poster.webp", title: "Marrakech's Private Sports Villa"};
const whatsappConfig = {phoneNumber: "", defaultMessage: ""};
const trackWhatsAppClick = (_location: string) => {};

export default function ChristmasRibbon() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero_section');
  };

  // Play video on first user interaction (scroll, touch, click)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasInteracted) return;

    // Ensure video is properly configured for autoplay
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
          .then(() => {
            console.log('Video playing after interaction');
            setHasInteracted(true);
          })
          .catch((error) => {
            console.log('Play attempt failed:', error.name);
          });
      }
    };

    // Try immediate autoplay first (works on desktop)
    const tryImmediatePlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Video autoplay successful');
            setHasInteracted(true);
          })
          .catch(() => {
            // Silent fail, will wait for user interaction
          });
      }
    };

    // Listen for ANY user interaction
    const handleInteraction = () => {
      attemptPlay();
    };

    // Try immediate play when ready
    if (video.readyState >= 3) {
      tryImmediatePlay();
    } else {
      video.addEventListener('canplay', tryImmediatePlay, { once: true });
    }

    // Set up interaction listeners
    window.addEventListener('scroll', handleInteraction, { once: true, passive: true });
    window.addEventListener('touchstart', handleInteraction, { once: true, passive: true });
    window.addEventListener('click', handleInteraction, { once: true });

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      video.removeEventListener('canplay', tryImmediatePlay);
    };
  }, [hasInteracted]);

  return (
    <section id="home" className="relative h-[70vh] md:h-[75vh] lg:h-[80vh] w-full overflow-hidden bg-gray-500">
      {/* Video Background - Full Screen */}
      {heroContent.videoUrl ? (
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay={true}
            loop={true}
            muted={true}
            playsInline={true}
            preload="none"
            poster={heroContent.videoPoster}
            aria-label="Aerial view of luxury sports villa in Marrakech"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroContent.videoUrl} type="video/mp4" />
            <track kind="captions" src="/captions.vtt" label="No dialogue" default />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-700/50 via-gray-600/25 to-transparent" />
        </div>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700/40 via-transparent to-gray-600/30" />
        </div>
      )}
      
      {/* Layout: tagline top, title centred, icons bottom */}
      <div className="christmas-ribbon-content relative z-10 h-full flex flex-col items-center justify-between pt-4 md:pt-6 pb-4 md:pb-6 lg:pb-8 px-4 md:px-6 lg:px-8">

        {/* Tagline — pinned to top */}
        <div className="flex items-center gap-3 w-full max-w-xs sm:max-w-sm mx-auto px-4">
          <span className="flex-1 h-px bg-white/30" />
          <p className="text-xs sm:text-[13px] font-light tracking-[0.15em] uppercase text-white/90 whitespace-nowrap">
            Marrakech Villa Specialists
          </p>
          <span className="flex-1 h-px bg-white/30" />
        </div>

        <aside className="christmas-ribbon" aria-label="Special Early Bird Offer: £100 off per night and heated pool included free">
          <div className="christmas-ribbon__ornament" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <path d="M24 4v40M4 24h40M10 10l28 28M38 10 10 38" stroke="currentColor" strokeWidth="1.15" />
              <circle cx="24" cy="24" r="4.5" fill="#9d2c35" stroke="#e7c88d" strokeWidth="1.2" />
              <circle cx="24" cy="6" r="1.7" fill="#e7c88d" />
              <circle cx="42" cy="24" r="1.7" fill="#e7c88d" />
              <circle cx="24" cy="42" r="1.7" fill="#e7c88d" />
              <circle cx="6" cy="24" r="1.7" fill="#e7c88d" />
            </svg>
          </div>
          <div className="christmas-ribbon__copy">
            <span className="christmas-ribbon__label">Special Early Bird Offer</span>
            <span className="christmas-ribbon__saving">£100 off per night</span>
          </div>
          <span className="christmas-ribbon__rule" aria-hidden="true" />
          <div className="christmas-ribbon__pool">
            <span className="christmas-ribbon__pool-kicker">A little extra, on us</span>
            <span>Heated pool included free</span>
          </div>
          <div className="christmas-ribbon__holly" aria-hidden="true">
            <svg viewBox="0 0 64 44" fill="none">
              <path d="M31 35C17 33 9 25 8 12c9 0 17 3 23 10C31 12 40 6 54 6c-1 14-8 23-23 29Z" fill="#42765D" stroke="#b9c99e" strokeWidth="1.2" />
              <path d="M31 36c-2-7-8-14-16-19m16 19c4-10 11-18 19-23" stroke="#d6dfc7" strokeWidth="1" />
              <circle cx="29" cy="29" r="3" fill="#b9373a" stroke="#f1d49d" strokeWidth="1" />
              <circle cx="36" cy="32" r="3" fill="#b9373a" stroke="#f1d49d" strokeWidth="1" />
              <circle cx="36" cy="25" r="3" fill="#b9373a" stroke="#f1d49d" strokeWidth="1" />
            </svg>
          </div>
        </aside>

        {/* Title — absolutely centred */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center px-4">
          <h1 className="font-serif font-bold text-xl md:text-3xl lg:text-4xl text-white leading-tight drop-shadow-lg">
            {heroContent.title}
          </h1>
          <p className="mt-1 text-xs md:text-sm tracking-[0.12em] text-white/80 drop-shadow-md">
            6 Bedrooms | Sleeps 12
          </p>
        </div>

        {/* Icons bar — pinned to bottom */}
        <div className="w-full">
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex items-center justify-around">
            {[
              { icon: FaBed, label: "6 Bed Villa" },
              { icon: FaSwimmer, label: "Heated Pool" },
              { icon: GiTennisRacket, label: "Padel Court" },
              { icon: GiBasketballBall, label: "Basketball Court" },
              { icon: GiSoccerBall, label: "Football Pitch" },
            ].map(({ icon: Icon, label }, i, arr) => (
              <div key={label} className="flex items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  <span className="text-xs text-white/90 font-medium text-center leading-tight">
                    {label}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-px h-8 bg-white/20 ml-4 md:ml-8 mr-4 md:mr-8 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
