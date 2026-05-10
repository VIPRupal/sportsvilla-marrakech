import { Instagram, MessageCircle, Mail, Star, Award, Shield, Tag } from "lucide-react";
import { socialLinks, whatsappConfig } from "@/data/villa-content";

const trustBadges = [
  { icon: Star, label: "4.9/5 Rated" },
  { icon: Award, label: "Established 2016" },
  { icon: Shield, label: "Secure Booking" },
  { icon: Tag, label: "Best Price Guarantee" },
];

export default function Footer() {
  const whatsappNumber = whatsappConfig.phoneNumber;
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

  return (
    <footer className="bg-[#1a1008] border-t border-white/5">
      {/* Trust badges bar */}
      <div className="border-b border-white/5 py-3 md:py-4">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-center gap-1.5" data-testid={`footer-badge-${index}`}>
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs text-white/60 font-medium">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

            {/* Logo + company info */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col leading-none mb-1">
                <span className="text-white font-serif font-bold text-lg tracking-wide">VIP</span>
                <span className="text-primary font-semibold text-[10px] tracking-[0.2em] uppercase">Concierge</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed max-w-xs">
                VIP Concierge Group Ltd<br />
                20-22 Wenlock Road, London, N1 7GU<br />
                Company No: 12936161
              </p>
              <p className="text-xs text-white/30">© 2025 All Rights Reserved</p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors text-xs font-medium"
                aria-label="Instagram"
                data-testid="link-instagram-footer"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors text-xs font-medium"
                aria-label="WhatsApp"
                data-testid="link-whatsapp-footer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:enquiry@vipatmarrakech.com"
                className="flex items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors text-xs font-medium"
                aria-label="Email"
                data-testid="link-email-footer"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
