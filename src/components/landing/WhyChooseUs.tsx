import { ShieldCheck, Star, Gem, Wallet } from "lucide-react";

const items = [
  { title: "Licensed & Insured", icon: ShieldCheck, desc: "[Placeholder: Fully compliant and protected]" },
  { title: "5-Star Rated on Google", icon: Star, desc: "[Placeholder: Dozens of glowing reviews]" },
  { title: "Premium Quality Materials", icon: Gem, desc: "[Placeholder: Built to last]" },
  { title: "Affordable Financing Available", icon: Wallet, desc: "[Placeholder: Flexible options]" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="container py-16 md:py-24">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">Why Choose Us</h2>
        <p className="mt-2 text-foreground/70">[Placeholder: Our commitment to quality and your satisfaction]</p>
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
