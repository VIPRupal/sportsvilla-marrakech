import { ourTeamContent } from "@/data/villa-content";

export default function OurTeamSection() {
  return (
    <section className="py-6 md:py-8 lg:py-10 px-4 md:px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl mb-2 text-foreground">
          {ourTeamContent.sectionTitle}
        </h2>
        <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
          {ourTeamContent.description}
        </p>
      </div>
    </section>
  );
}
