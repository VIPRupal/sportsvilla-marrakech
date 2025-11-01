import { experienceContent } from "@/data/villa-content";

export default function ExperienceSection() {
  return (
    <section className="py-8 md:py-10 lg:py-12 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-4">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 text-foreground">
            {experienceContent.sectionTitle}
          </h2>
        </div>
        
        <div className="space-y-3 text-base md:text-lg leading-relaxed text-foreground">
          {experienceContent.experiences.map((experience, index) => (
            <p 
              key={index} 
              className="text-center"
              dangerouslySetInnerHTML={{ 
                __html: experience.replace(/<strong>/g, '<span class="font-semibold text-primary">').replace(/<\/strong>/g, '</span>') 
              }}
            />
          ))}
          
          {experienceContent.closingStatement && (
            <div className="pt-4 border-t border-border mt-4">
              <p className="text-center text-lg md:text-xl font-serif italic text-card-foreground">
                {experienceContent.closingStatement}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
