declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const trackWhatsAppClick = (location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-930043638',
      'event_category': 'engagement',
      'event_label': `whatsapp_click_${location}`,
    });
    
    console.log(`WhatsApp click tracked from: ${location}`);
  }
};
