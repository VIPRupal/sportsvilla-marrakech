import { ourTeamContent } from "@/data/villa-content";

export default function OurTeamSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 text-foreground">
          {ourTeamContent.sectionTitle}
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
          {ourTeamContent.description}
        </p>
      </div>
    </section>
  );
}
