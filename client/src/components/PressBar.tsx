export default function PressBar() {
  const publications = [
    { name: "Forbes", style: "font-bold tracking-tight text-base md:text-lg" },
    { name: "Luxury Travel", style: "font-serif italic text-sm md:text-base tracking-wide" },
    { name: "Traveller", style: "font-semibold tracking-widest text-xs md:text-sm uppercase" },
    { name: "Bloomberg", style: "font-bold tracking-tight text-base md:text-lg" },
    { name: "Yahoo Finance", style: "font-bold text-sm md:text-base" },
  ];

  return (
    <section className="py-4 md:py-5 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <p className="text-xs text-muted-foreground tracking-widest uppercase font-medium whitespace-nowrap">
            As featured in
          </p>
          <div className="hidden md:block w-px h-4 bg-border" />
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
            {publications.map((pub, i) => (
              <span
                key={i}
                className={`text-muted-foreground/70 hover-elevate select-none ${pub.style}`}
                data-testid={`press-logo-${i}`}
              >
                {pub.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
