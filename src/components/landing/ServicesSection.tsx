import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ruler, Boxes, Lightbulb, Layers, Home, Leaf } from "lucide-react";

const services = [
  { title: "Kitchen Design & Planning", icon: Ruler, desc: "[Placeholder: Tailored layouts for flow and function]" },
  { title: "Custom Cabinets & Countertops", icon: Boxes, desc: "[Placeholder: Built for your style and storage needs]" },
  { title: "Lighting & Fixtures Installation", icon: Lightbulb, desc: "[Placeholder: Bright, efficient, beautiful]" },
  { title: "Flooring & Tiling", icon: Layers, desc: "[Placeholder: Durable, timeless surfaces]" },
  { title: "Full Kitchen Renovation", icon: Home, desc: "[Placeholder: From demo to final polish]" },
  { title: "Eco-Friendly Upgrades", icon: Leaf, desc: "[Placeholder: Sustainable materials & options]" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="container py-16 md:py-24">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">Our Comprehensive Kitchen Remodeling Services</h2>
        <p className="mt-2 text-foreground/70">[Placeholder: Brief overview of services offered]</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, icon: Icon, desc }) => (
          <Card key={title} className="transition-transform hover:-translate-y-0.5 hover:shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
                  <Icon className="text-primary" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
              </div>
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
