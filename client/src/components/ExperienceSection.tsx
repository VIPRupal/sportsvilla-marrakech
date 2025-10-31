import { experienceContent } from "@/data/villa-content";

export default function ExperienceSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
            {experienceContent.sectionTitle}
          </h2>
        </div>
        
        <div className="space-y-6 text-lg md:text-xl leading-loose text-foreground">
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
            <div className="pt-8 border-t border-border mt-8">
              <p className="text-center text-2xl md:text-3xl font-serif italic text-card-foreground">
                {experienceContent.closingStatement}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
