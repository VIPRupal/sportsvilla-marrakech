export default function PressBar() {
  const publications = [
    { name: "Forbes", cls: "font-bold text-sm md:text-base tracking-tight" },
    { name: "Luxury Travel", cls: "font-serif italic text-xs md:text-sm" },
    { name: "Traveller", cls: "font-semibold text-[10px] md:text-xs tracking-widest uppercase" },
    { name: "Bloomberg", cls: "font-bold text-sm md:text-base tracking-tight" },
    { name: "yahoo!", cls: "font-bold text-sm md:text-base" },
  ];

  return (
    <section className="py-3 md:py-4 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
          <span className="text-[9px] md:text-[10px] text-gray-400 tracking-[0.2em] uppercase font-semibold whitespace-nowrap">
            As featured in
          </span>
          <div className="w-px h-3 bg-gray-200 hidden md:block" />
          {publications.map((pub, i) => (
            <span key={i} className={`text-gray-400 select-none ${pub.cls}`} data-testid={`press-logo-${i}`}>
              {pub.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
