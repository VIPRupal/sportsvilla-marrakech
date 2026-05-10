import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function FinalCTA() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("final_cta");
  };

  return (
    <section id="book" className="py-12 md:py-16 bg-[#2D1B0E] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a2210] via-[#2D1B0E] to-[#1e1008]" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Left: copy */}
          <div className="max-w-lg">
            <h2 className="font-serif text-2xl md:text-4xl font-semibold mb-3 text-white leading-snug">
              Ready to Book Your Marrakech Experience?
            </h2>
            <p className="text-sm md:text-base text-white/60">
              Dates fill up fast, especially on weekends. Check availability now.
            </p>
          </div>

          {/* Right: CTA block */}
          <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] font-bold px-8 md:px-10 rounded-full shadow-lg text-sm md:text-base w-full md:w-auto"
              data-testid="button-final-cta"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Check Availability on WhatsApp
              </a>
            </Button>
            <p className="text-white/40 text-xs">
              Get a fast response within 15 minutes · Our team is ready to help you
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
