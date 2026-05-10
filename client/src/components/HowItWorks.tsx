import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";
import courtImage from "@assets/generated_images/Pristine_padel_court_sunset_48cbb9e6.png";

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
    <section id="how-it-works" className="py-10 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-center">

          {/* Left: content — full width on mobile */}
          <div className="w-full md:w-[58%]">
            <p className="text-[10px] font-bold tracking-[0.22em] text-primary uppercase mb-2">
              How it works
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-gray-900 mb-1">
              Simple. Fast. Personal.
            </h2>
            <p className="text-sm text-gray-500 mb-7">
              From enquiry to an unforgettable trip.
            </p>

            {/* Steps — vertical list on mobile */}
            <div className="space-y-5 mb-7">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4" data-testid={`step-${index}`}>
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-base shadow-sm">
                    {step.number}
                  </div>
                  <div className="pt-1">
                    <p className="font-semibold text-sm text-gray-900 leading-tight mb-0.5">{step.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] font-bold rounded-full w-full md:w-auto md:px-8"
                data-testid="button-whatsapp-howitworks"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("how_it_works")}>
                  <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  Check Availability on WhatsApp
                </a>
              </Button>
              <p className="text-xs text-gray-400">No commitment, just fast answers.</p>
            </div>
          </div>

          {/* Right: image — hidden on mobile, shown on desktop */}
          <div className="hidden md:block w-full md:w-[42%] rounded-xl overflow-hidden shadow-md flex-shrink-0">
            <img
              src={courtImage}
              alt="Private padel court at sunset"
              loading="lazy"
              decoding="async"
              className="w-full h-[440px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
