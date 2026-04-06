import { MessageCircle } from "lucide-react";
import { whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

export default function WhatsAppButton() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  const handleClick = () => {
    trackWhatsAppClick('floating_button');
  };

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      onClick={handleClick}
      data-testid="button-whatsapp-floating"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-60" />
        <div className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl px-4 py-3">
          <MessageCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-bold whitespace-nowrap">Check Availability</span>
        </div>
      </div>
    </a>
  );
}
