import logoNKBA from "@/assets/logo-nkba.png";
import logoBBB from "@/assets/logo-bbb.png";
import logoHouzz from "@/assets/logo-houzz.png";
import logoCabinetPro from "@/assets/logo-cabinetpro.png";

export default function Certifications() {
  const logos = [
    { src: logoNKBA, alt: "NKBA" },
    { src: logoBBB, alt: "BBB Accredited" },
    { src: logoHouzz, alt: "Houzz" },
    { src: logoCabinetPro, alt: "CabinetPro Supplier" },
  ];
  return (
    <section className="container py-12">
      <div className="rounded-lg border border-border bg-card p-6">
        <p className="mb-4 text-center text-sm text-foreground/70">Certifications & Partners</p>
        <div className="grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-4">
          {logos.map((l) => (
            <img
              key={l.alt}
              src={l.src}
              alt={`${l.alt} logo`}
              className="h-10 w-auto opacity-80"
              loading="lazy"
            />)
          )}
        </div>
      </div>
    </section>
  );
}
