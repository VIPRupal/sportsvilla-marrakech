import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";
import courtImage from "@assets/generated_images/Basketball_Court.webp";
import courtImageMobile from "@assets/generated_images/Basketball_Court_mobile.webp";

const steps = [
  {
    number: "1",
    title: "Send your dates",
    description: "Tap the WhatsApp button and tell us your dates, group size and preferences.",
  },
  {
    number: "2",
    title: "We recommend the best villa",
    description: "We'll send you the best options, photos, pricing and extras.",
  },
  {
    number: "3",
    title: "We plan everything",
    description: "Our concierge team organises your entire Marrakech experience.",
  },
  {
    number: "4",
    title: "You relax & enjoy",
    description: "Arrive, unwind and enjoy an unforgettable experience.",
  },
];

export default function HowItWorks() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <section id="how-it-works" className="py-10 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">

          {/* Left: steps */}
          <div className="w-full md:w-[58%]">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-2">
              How it works
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-foreground mb-1">
              Simple. Fast. Personal.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-7 md:mb-9">
              From enquiry to an unforgettable trip.
            </p>

            {/* Steps — vertical on mobile, horizontal on desktop */}
            <div className="flex flex-col md:flex-row gap-5 md:gap-2 mb-7 md:mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex md:flex-col gap-3 md:gap-2 md:flex-1 items-start md:items-center md:text-center" data-testid={`step-${index}`}>
                  <div className="flex-shrink-0 flex items-center gap-2 md:flex-col md:items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                      {step.number}
                    </div>
                    {/* Arrow on desktop between steps */}
                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden md:block w-4 h-4 text-muted-foreground/30 absolute" style={{ display: "none" }} />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground leading-snug mb-0.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col items-start gap-2">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] font-bold px-8 rounded-full"
                data-testid="button-whatsapp-howitworks"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("how_it_works")}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Check Availability on WhatsApp
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">No commitment, just fast answers.</p>
            </div>
          </div>

          {/* Right: image */}
          <div className="w-full md:w-[42%] rounded-xl overflow-hidden shadow-md flex-shrink-0">
            <img
              srcSet={`${courtImageMobile} 800w, ${courtImage} 3200w`}
              sizes="(max-width: 768px) 100vw, 42vw"
              src={courtImage}
              alt="Private sports facilities at the Marrakech villa"
              width={3200}
              height={2344}
              loading="lazy"
              decoding="async"
              className="w-full h-56 md:h-[420px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
