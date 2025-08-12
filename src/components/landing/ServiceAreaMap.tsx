import mapImg from "@/assets/service-area-map.png";

export default function ServiceAreaMap() {
  return (
    <section id="service-area" className="container py-16 md:py-24">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">Service Area</h2>
        <p className="mt-2 text-foreground/70">Tacoma, Puyallup, Lakewood, Federal Way, University Place, Gig Harbor</p>
      </header>
      <div className="overflow-hidden rounded-lg border border-border shadow-sm">
        <img src={mapImg} alt="Map of Tacoma service area with nearby cities" className="h-auto w-full object-cover" loading="lazy" />
      </div>
    </section>
  );
}
