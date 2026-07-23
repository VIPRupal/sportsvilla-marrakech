import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages, visualTourContent } from "@/data/villa-content";

export default function VisualTour() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex(i => i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex(i => i === null ? null : (i + 1) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, goPrev, goNext]);

  const mainImage = galleryImages[0];
  const thumbImages = galleryImages.slice(1, 4);

  return (
    <section id="gallery" className="py-6 md:py-8 bg-background">
      {/* Section heading — constrained */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center mb-6 md:mb-8">
        <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold mb-1 md:mb-2 text-foreground">
          {visualTourContent.sectionTitle}
        </h2>
        <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">
          {visualTourContent.sectionSubtitle}
        </p>
      </div>

      {/* Images — edge to edge */}
      <div className="w-full">
        {/* Big hero image */}
        <div
          className="relative w-full aspect-[16/9] overflow-hidden cursor-pointer mb-1"
          onClick={() => openLightbox(0)}
          data-testid="image-gallery-main"
        >
          <img
            srcSet={`${mainImage.srcMobile} 800w, ${mainImage.src} 3200w`}
            sizes="100vw"
            src={mainImage.src}
            alt={mainImage.caption}
            width={mainImage.width}
            height={mainImage.height}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>

        {/* Three thumbnails */}
        <div className="grid grid-cols-3 gap-1">
          {thumbImages.map((image, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden cursor-pointer"
              onClick={() => openLightbox(i + 1)}
              data-testid={`image-gallery-thumb-${i}`}
            >
              <img
                srcSet={`${image.srcMobile} 800w, ${image.src} 3200w`}
                sizes="33vw"
                src={image.src}
                alt={image.caption}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.04]"
              />
              {i === 2 && galleryImages.length > 4 && (
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded backdrop-blur-sm">
                  +{galleryImages.length - 4} more
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <div
            className="relative rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              srcSet={`${galleryImages[lightboxIndex].srcMobile} 800w, ${galleryImages[lightboxIndex].src} 3200w`}
              sizes="(max-width: 768px) 100vw, 90vw"
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].caption}
              width={galleryImages[lightboxIndex].width}
              height={galleryImages[lightboxIndex].height}
              className="w-full h-auto max-h-[85vh] object-contain block"
            />

            {/* Counter + close — top overlay */}
            <div className="absolute top-0 inset-x-0 flex items-center justify-between px-3 py-2 bg-gradient-to-b from-black/50 to-transparent">
              <span className="text-xs text-white/90 font-medium">
                {lightboxIndex + 1} of {galleryImages.length}
              </span>
              <button
                className="text-white/80 hover:text-white transition-colors"
                onClick={closeLightbox}
                data-testid="button-close-lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Caption — bottom overlay */}
            {galleryImages[lightboxIndex].caption && (
              <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-sm text-white text-center">
                  {galleryImages[lightboxIndex].caption}
                </p>
              </div>
            )}

            {/* Prev arrow */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md rounded-full p-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              data-testid="button-lightbox-prev"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            {/* Next arrow */}
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-md rounded-full p-2 transition-colors"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              data-testid="button-lightbox-next"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
