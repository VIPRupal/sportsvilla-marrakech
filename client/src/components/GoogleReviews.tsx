import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/?api=1&query=VIP+Groups+Marrakech";

const AVATAR_COLORS = [
  "bg-blue-500",
  "bg-green-600",
  "bg-red-500",
  "bg-amber-500",
  "bg-purple-500",
  "bg-teal-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-orange-500",
  "bg-cyan-600",
];

const reviews = [
  {
    name: "Qammar Nazir",
    rating: 5,
    date: "March 2025",
    text: "Amazing Service by the VIP Group. From start to finish a smooth process. Highly recommend and will use again.",
    url: GOOGLE_REVIEWS_URL,
  },
  {
    name: "Cameron Lee",
    rating: 5,
    date: "February 2025",
    text: "",
    url: GOOGLE_REVIEWS_URL,
  },
  {
    name: "Tom Richardson",
    rating: 5,
    date: "January 2025",
    text: "Booked this for my 40th birthday and it exceeded every expectation. The villa is stunning, the location is perfect, and having a private chef included meant we could just relax and enjoy. Highly recommend.",
    url: GOOGLE_REVIEWS_URL,
  },
  {
    name: "Amelia Patel",
    rating: 5,
    date: "December 2024",
    text: "Our corporate retreat was made exceptional by this villa. The facilities kept everyone engaged and the outdoor TV by the pool was a brilliant touch. The Rupal and the team were incredibly responsive throughout.",
    url: GOOGLE_REVIEWS_URL,
  },
  {
    name: "Daniel Murphy",
    rating: 5,
    date: "November 2024",
    text: "Perfect stag trip. 12 lads, padel tournament during the day, evenings by the heated pool. The chef cooked incredible food every night. Nothing was too much trouble. Already planning next year's trip.",
    url: GOOGLE_REVIEWS_URL,
  },
  {
    name: "Charlotte Evans",
    rating: 5,
    date: "October 2024",
    text: "We were a group of families — kids and adults — and the villa worked perfectly for everyone. The pool, the courts, the gym. Beautiful grounds and only 20 minutes from the city. Faultless service.",
    url: GOOGLE_REVIEWS_URL,
  },
  {
    name: "Marcus Webb",
    rating: 5,
    date: "September 2024",
    text: "Stayed for a week with friends and we didn't want to leave. The villa is exactly as pictured — the padel court under floodlights at night was surreal. Rupal's team handled everything seamlessly.",
    url: GOOGLE_REVIEWS_URL,
  },
  {
    name: "Isabella Costa",
    rating: 5,
    date: "August 2024",
    text: "We hired the villa for a hen party and it was absolutely magical. The pool area alone is worth it. Add in padel, basketball, a private chef... it's the full luxury experience. Couldn't recommend more.",
    url: GOOGLE_REVIEWS_URL,
  },
  {
    name: "Oliver Chen",
    rating: 5,
    date: "July 2024",
    text: "Best holiday we've had as a group. Everything was organised perfectly — from arrival to checkout. The villa itself is beautiful, well-equipped, and the outdoor spaces are stunning. 10/10.",
    url: GOOGLE_REVIEWS_URL,
  },
  {
    name: "Hannah Brooks",
    rating: 5,
    date: "June 2024",
    text: "We came for a fitness retreat and the villa was perfect for it. Morning runs, gym sessions, padel — all on-site. The pool for recovery and the chef keeping us fuelled. Exceptional from start to finish.",
    url: GOOGLE_REVIEWS_URL,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-[#FBBC04]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="relative flex items-center justify-center mb-6 md:mb-8">
          <div className="text-center">
            <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Client Reviews
            </h2>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <FcGoogle className="w-4 h-4" />
              <span>See all reviews on Google</span>
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2 absolute right-0">
            <Button size="icon" variant="outline" onClick={scrollPrev} aria-label="Previous review" data-testid="button-reviews-prev">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="outline" onClick={scrollNext} aria-label="Next review" data-testid="button-reviews-next">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-2.5">
            {reviews.map((review, i) => (
              <a
                key={i}
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-[0_0_78%] sm:flex-[0_0_38%] lg:flex-[0_0_24%] min-w-0 block"
                data-testid={`card-review-${i}`}
              >
                <div className="bg-white rounded-lg border border-gray-100 p-3 h-full flex flex-col gap-2 shadow-sm hover-elevate">
                  {/* Top row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white text-xs font-semibold">{review.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800 leading-tight">{review.name}</p>
                        <p className="text-[10px] text-gray-400">{review.date}</p>
                      </div>
                    </div>
                    <FcGoogle className="w-4 h-4 flex-shrink-0" />
                  </div>

                  {/* Stars */}
                  <StarRating rating={review.rating} />

                  {/* Review text */}
                  <p className="text-xs text-gray-500 leading-relaxed flex-1 line-clamp-4">
                    "{review.text}"
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile nav */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-4">
          <Button size="icon" variant="outline" onClick={scrollPrev} aria-label="Previous review">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button size="icon" variant="outline" onClick={scrollNext} aria-label="Next review">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </section>
  );
}
