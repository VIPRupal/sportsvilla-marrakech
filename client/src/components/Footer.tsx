import { Instagram, Globe } from "lucide-react";
import { socialLinks } from "@/data/villa-content";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-6 md:py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          {/* Social Media Links */}
          <div className="flex items-center gap-6">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Visit our Instagram"
              data-testid="link-instagram-footer"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm font-medium">Instagram</span>
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
              <span className="text-sm font-medium">Website</span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md border-t border-border"></div>

          {/* Company Information */}
          <div className="text-center space-y-1">
            <p className="text-xs md:text-sm text-muted-foreground">
              THE VIP CONCIERGE GROUP LIMITED
            </p>
            <p className="text-xs text-muted-foreground">
              Company No: 12936161 | Registered in England and Wales
            </p>
            <p className="text-xs text-muted-foreground">
              20-22 Wenlock Road, London, N1 7GU
            </p>
            <p className="text-xs text-muted-foreground">
              Tel: 0207 846 0075
            </p>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © 2025 The VIP Concierge Group Ltd · All Rights Reserved · Proudly based in Marrakech & London
          </p>
        </div>
      </div>
    </footer>
  );
}
