import { ourTeamContent } from "@/data/villa-content";

function WhatsAppCheck() {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      className="flex-shrink-0 mt-0.5"
    >
      <path 
        d="M4 10L8 14L16 6" 
        stroke="#25D366" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M7 10L11 14L19 6" 
        stroke="#25D366" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OurTeamSection() {
  return (
    <section className="py-8 md:py-10 lg:py-12 px-4 md:px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-center text-card-foreground">
          {ourTeamContent.sectionTitle}
        </h2>
        <div className="space-y-4">
          {ourTeamContent.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3" data-testid={`benefit-${index}`}>
              <WhatsAppCheck />
              <p 
                className="text-base md:text-lg text-card-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: benefit }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
