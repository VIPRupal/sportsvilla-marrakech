import { useCallback, useState } from "react";
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

const TRUNCATE_AT = 130;

const reviews = [
  {
    name: "Jamie Llewellyn",
    rating: 5,
    date: "July 2026",
    text: "i have used VIP Marrakesh three times now and the service gets better every trip. Excellent communication and personalised trip for me and 14 of my friends, they managed expectations and delivered on everything we asked for. Our driver Yusef was exceptional and always on call whenever we needed him, the chefs in the villa were also amazing. Highly recommend anyone travelling with a big group to use VIP Marrakesh.",
  },
  {
    name: "Simran Ghai",
    rating: 5,
    date: "July 2026",
    text: "Outstanding service from start to finish! VIP Marrakech sorted everything for our group trip; the villa, transport, transfers, supermarket runs, cash runs, and every booking. We changed plans and added last-minute requests constantly, and Rups and the team handled it all without a hitch. If you want a stress-free trip in Marrakech, use these guys. Can't recommend them enough.",
  },
  {
    name: "Wafiq O",
    rating: 5,
    date: "July 2026",
    text: "Better than you'd imagine it to be. The support team are also amazing, the staff on ground are amazing.",
  },
  {
    name: "Harry Atwal",
    rating: 5,
    date: "June 2026",
    text: "VIP from the moment I contacted them were professional and extremely accommodating. The staff engaged to identify what we wanted from our stay in Marrakech. Presented lovely villas and events to do throughout our stay. The hospitality was fantastic with the driver and at the events we attended. Occasionally checked in with me to see if we had settled and if we ever needed anything that they could support us on. Would highly recommend and would do the trip again. Thanks VIP.",
  },
  {
    name: "Cameron Lee",
    rating: 5,
    date: "March 2026",
    text: "",
  },
  {
    name: "Kishan Sankrecha",
    rating: 5,
    date: "February 2026",
    text: "Brilliant from start to finish. Made our trip seamless with Hind and Selma on hand to support. Our driver Anouir was also fantastic. Will deffo use again.",
  },
  {
    name: "Kacey Parmar",
    rating: 5,
    date: "January 2026",
    text: "I can't thank VIP Concierge Marrakech enough for helping to organise my brother's stag. From the very beginning they were so helpful, supportive, and always quick to sort anything out. The villa they recommended was perfect, and the whole experience exceeded our expectations. Everyone on the trip kept saying how amazing it was and how smoothly everything ran. We genuinely can't recommend them highly enough and I'll 100% be using them again for my own holiday. Incredible service from an amazing team.",
  },
  {
    name: "Manoj Banger",
    rating: 5,
    date: "December 2025",
    text: "Brilliant service quick and easy. From start to finish. I can not fault the team. They made every step of the trip simple and always gave good suggestions. I would recommend VIP to anyone looking to go.",
  },
  {
    name: "Niren Patel",
    rating: 5,
    date: "December 2025",
    text: "VIP at Marrakech were excellent. They made the whole trip so easy to plan. Really good communication all around. I would really recommend them for a big family trip to Marrakech!!",
  },
  {
    name: "Qammar Nazir",
    rating: 5,
    date: "July 2025",
    text: "Amazing Service by the VIP Group. From start to finish a smooth process. Highly recommend and will use again.",
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
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const toggleExpand = (i: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

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
            {reviews.map((review, i) => {
              const isExpanded = expanded.has(i);
              const isLong = review.text.length > TRUNCATE_AT;
              const displayText = isLong && !isExpanded
                ? review.text.slice(0, TRUNCATE_AT).trimEnd()
                : review.text;

              return (
                <div
                  key={i}
                  className="flex-[0_0_78%] sm:flex-[0_0_38%] lg:flex-[0_0_24%] min-w-0"
                  data-testid={`card-review-${i}`}
                >
                  <div className="bg-white rounded-lg border border-gray-100 p-3 h-full flex flex-col gap-2 shadow-sm">
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
                      <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FcGoogle className="w-4 h-4 flex-shrink-0" />
                      </a>
                    </div>

                    {/* Stars */}
                    <StarRating rating={review.rating} />

                    {/* Review text */}
                    {review.text ? (
                      <p className="text-xs text-gray-500 leading-relaxed flex-1">
                        &ldquo;{displayText}{isLong && !isExpanded && (
                          <>
                            {"... "}
                            <button
                              className="text-gray-700 font-medium underline underline-offset-2 hover:text-gray-900"
                              onClick={(e) => toggleExpand(i, e)}
                            >
                              more
                            </button>
                          </>
                        )}
                        {isLong && isExpanded && (
                          <>
                            {" "}
                            <button
                              className="text-gray-700 font-medium underline underline-offset-2 hover:text-gray-900"
                              onClick={(e) => toggleExpand(i, e)}
                            >
                              less
                            </button>
                          </>
                        )}
                        &rdquo;
                      </p>
                    ) : (
                      <p className="text-xs text-gray-400 italic flex-1">No written review</p>
                    )}
                  </div>
                </div>
              );
            })}
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
