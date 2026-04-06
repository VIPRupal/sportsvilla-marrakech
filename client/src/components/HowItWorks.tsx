import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { whatsappConfig } from "@/data/villa-content";
import { trackWhatsAppClick } from "@/lib/tracking";

const steps = [
  {
    number: "1",
    title: "Send your dates on WhatsApp",
    description: "It takes 30 seconds."
  },
  {
    number: "2",
    title: "We confirm availability instantly",
    description: "Real-time & accurate."
  },
  {
    number: "3",
    title: "We organise everything for your group",
    description: "Sit back and relax."
  }
];

export default function HowItWorks() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappMessage = encodeURIComponent(whatsappConfig.defaultMessage);
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <section id="how-it-works" className="py-10 md:py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-foreground">
            Booking is easier than you think:
          </h2>
          <div className="gold-divider mt-3" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-4 mb-8 md:mb-12 relative">
          <div className="hidden md:block absolute top-7 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-border" />

          {steps.map((step, index) => (
            <div key={index} className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 md:flex-1 md:text-center" data-testid={`step-${index}`}>
              <div className="flex-shrink-0 w-14 h-14 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-xl md:text-2xl shadow-md relative z-10">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base text-foreground leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center flex flex-col items-center gap-2">
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] font-bold px-8 rounded-full"
            data-testid="button-whatsapp-howitworks"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('how_it_works')}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Send Your Dates — Takes 30 Seconds
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">No forms. No phone calls. Just WhatsApp.</p>
        </div>
      </div>
    </section>
  );
}
