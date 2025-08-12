import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import heroImg from "@/assets/hero-kitchen.jpg";
import teamImg from "@/assets/team-kitchen.jpg";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const services = [
  { title: "Kitchen Renovation", img: heroImg, desc: "Full redesign and transformation of your kitchen space." },
  { title: "Kitchen Pricing", img: b2, desc: "Transparent, upfront estimates tailored to your budget." },
  { title: "Kitchen Cabinets", img: b3, desc: "Custom and pre-fabricated cabinet installation." },
  { title: "Kitchen Islands", img: heroImg, desc: "Functional, stylish island designs for added workspace." },
  { title: "Countertops", img: b1, desc: "Granite, quartz, and other premium surface materials." },
  { title: "Tile Backsplashes", img: b2, desc: "Stylish designs to complement your kitchen theme." },
  { title: "Pantry Storage", img: teamImg, desc: "Smart storage solutions for maximum efficiency." },
  { title: "Stainless Steel Sinks", img: b3, desc: "Durable, modern sink installations." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="container py-16 md:py-24">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">Our Comprehensive Kitchen Remodeling Services</h2>
        <p className="mt-2 text-foreground/70">Explore our most-requested kitchen services.</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, img, desc }) => (
          <Card key={title} className="transition-transform hover:-translate-y-0.5 hover:shadow">
            <img src={img} alt={`${title} example`} className="h-40 w-full rounded-t-lg object-cover" loading="lazy" />
            <CardHeader>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
