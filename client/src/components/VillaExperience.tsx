import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";
import { whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";
import poolImage from "@assets/generated_images/swimming_pool.webp";
import poolImageMobile from "@assets/generated_images/swimming_pool_mobile.webp";

const bullets = [
  "No stress planning",
  "Everything arranged for your group",
  "The kind of place people don't want to leave"
];

export default function VillaExperience() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <section id="experience" className="py-10 md:py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
            <img
              srcSet={`${poolImageMobile} 800w, ${poolImage} 3200w`}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={poolImage}
              alt="Luxury villa pool — Marrakech Sports Villa"
              width={3200}
              height={2344}
              loading="lazy"
              decoding="async"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-card-foreground leading-snug mb-4 md:mb-6">
              This isn't just a villa — it's your trip sorted.
            </h2>

            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm md:text-base text-card-foreground">{bullet}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] font-bold px-8 rounded-full w-full md:w-auto"
              data-testid="button-whatsapp-experience"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('experience_section')}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Plan My Trip on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
