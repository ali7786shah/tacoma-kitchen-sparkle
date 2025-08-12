import mapImg from "@/assets/service-area-map.png";

export default function ServiceAreaMap() {
  return (
    <section id="service-area" className="container py-16 md:py-24">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">Service Area</h2>
        <p className="mt-2 text-foreground/70">Tacoma, Puyallup, Lakewood, Federal Way, University Place, Gig Harbor</p>
      </header>
      <div className="overflow-hidden rounded-lg border border-border shadow-sm">
        <img src={mapImg} alt="Map of Tacoma region highlighting nearby neighborhoods" className="h-auto w-full object-cover" loading="lazy" />
      </div>
      <div className="mt-6">
        <p className="mb-3 text-center text-sm text-foreground/70">Neighborhoods we serve</p>
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {[
            "Old Tacoma","Tacoma Junction","Browns Point","Fircrest","Hillsdale","Caledonia","Dash Point","Excelsior","Fern Hill","Fife","Fife Heights","Northeast Tacoma","Waller","Ruston","South Tacoma","Salishan"
          ].map((n) => (
            <li key={n} className="shrink-0">
              <span className="inline-flex items-center rounded-full border border-border bg-accent/40 px-3 py-1 text-xs font-medium text-foreground/80">{n}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
