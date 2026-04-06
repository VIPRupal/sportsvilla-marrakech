import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function FinalCTA() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('final_cta');
  };

  return (
    <section id="book" className="py-14 md:py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 text-white">
          Ready to book your dates?
        </h2>
        <p className="text-sm md:text-lg text-white/70 mb-6 md:mb-8">
          Dates go quickly — especially weekends.
        </p>
        <div className="flex flex-col items-center gap-2 md:gap-3">
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] font-bold px-8 md:px-12 rounded-full text-sm md:text-base shadow-lg w-full max-w-sm"
            data-testid="button-final-cta"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Check Availability on WhatsApp
            </a>
          </Button>
          <p className="text-white/50 text-xs">
            We reply fast • No pressure • Just real availability
          </p>
        </div>
      </div>
    </section>
  );
}
