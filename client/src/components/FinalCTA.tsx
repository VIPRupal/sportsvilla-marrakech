import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function FinalCTA() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <section id="book" className="py-12 md:py-16 bg-[#2D1B0E] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a2210] via-[#2D1B0E] to-[#1e1008]" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">

          {/* Left */}
          <div>
            <h2 className="font-serif text-2xl md:text-4xl font-semibold text-white leading-snug mb-2">
              Ready to Book Your<br />Marrakech Experience?
            </h2>
            <p className="text-sm text-white/55">
              Dates fill up fast, especially on weekends. Check availability now.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2 md:flex-shrink-0 md:min-w-[280px]">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] font-bold rounded-full shadow-lg w-full text-sm md:text-base"
              data-testid="button-final-cta"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("final_cta")}>
                <MessageCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                Check Availability on WhatsApp
              </a>
            </Button>
            <p className="text-white/40 text-xs text-center md:text-left">
              Get a fast response within 15 minutes · Our team is ready to help
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
