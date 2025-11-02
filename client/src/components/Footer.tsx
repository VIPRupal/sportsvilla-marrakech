import { Instagram, Globe } from "lucide-react";
import { socialLinks } from "@/data/villa-content";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Visit our Instagram"
              data-testid="link-instagram-footer"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href={socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Visit our website"
              data-testid="link-website-footer"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm">Website</span>
            </a>
          </div>

          {/* Company Information */}
          <div className="text-center">
            <p className="text-xs md:text-sm text-muted-foreground mb-1">
              Registered in England and Wales: THE VIP CONCIERGE GROUP LIMITED – Company No: 12936161
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mb-1">
              Registered Address: 20-22 Wenlock Road, London, N1 7GU
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mb-3">
              Telephone: 0207 846 0075
            </p>
            <p className="text-xs md:text-sm text-muted-foreground font-semibold">
              © 2024 THE VIP CONCIERGE GROUP LIMITED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
