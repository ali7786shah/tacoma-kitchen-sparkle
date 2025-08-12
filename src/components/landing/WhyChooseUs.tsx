import { ShieldCheck, Star, Gem, Wallet } from "lucide-react";

const items = [
  { title: "Licensed & Insured", icon: ShieldCheck, desc: "Fully licensed, bonded, and insured in Washington." },
  { title: "5-Star Rated on Google", icon: Star, desc: "Trusted by local homeowners with hundreds of glowing reviews." },
  { title: "Premium Quality Materials", icon: Gem, desc: "Durable cabinetry, quartz surfaces, and pro-grade finishes." },
  { title: "Affordable Financing Available", icon: Wallet, desc: "Flexible monthly options to fit your budget." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="container py-16 md:py-24">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">Why Choose Us</h2>
        <p className="mt-2 text-foreground/70">Trusted local team focused on quality, timelines, and your peace of mind.</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ title, icon: Icon, desc }) => (
          <div key={title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary">
              <Icon className="text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-sm text-foreground/80">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
