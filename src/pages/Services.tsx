import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { ArrowRight, ChefHat, Paintbrush, Lightbulb, Hammer, Layers, Grid3X3, Box, CircleDot, Phone, Check } from "lucide-react";

import heroImg from "@/assets/hero-kitchen.jpg";
import teamImg from "@/assets/team-kitchen.jpg";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";
import after1 from "@/assets/after-1.jpg";

const services = [
  { 
    title: "Kitchen Renovation", 
    icon: ChefHat, 
    img: heroImg, 
    desc: "Full redesign and transformation of your kitchen space.",
    features: ["Complete demolition & rebuild", "Layout optimization", "Appliance integration", "Final walkthrough"]
  },
  { 
    title: "Kitchen Pricing", 
    icon: Layers, 
    img: b2, 
    desc: "Transparent, upfront estimates tailored to your budget.",
    features: ["Free consultation", "Detailed cost breakdown", "Flexible financing", "No hidden fees"]
  },
  { 
    title: "Kitchen Cabinets", 
    icon: Paintbrush, 
    img: b3, 
    desc: "Custom and pre-fabricated cabinet installation.",
    features: ["Custom designs", "Premium materials", "Soft-close hardware", "Professional installation"]
  },
  { 
    title: "Kitchen Islands", 
    icon: Grid3X3, 
    img: after1, 
    desc: "Functional, stylish island designs for added workspace.",
    features: ["Custom sizing", "Storage solutions", "Seating options", "Built-in appliances"]
  },
  { 
    title: "Countertops", 
    icon: Hammer, 
    img: b1, 
    desc: "Granite, quartz, and other premium surface materials.",
    features: ["Granite & quartz", "Marble & solid surface", "Precise measurements", "Seamless installation"]
  },
  { 
    title: "Tile Backsplashes", 
    icon: Box, 
    img: b2, 
    desc: "Stylish designs to complement your kitchen theme.",
    features: ["Subway & mosaic tiles", "Custom patterns", "Waterproof sealing", "Easy maintenance"]
  },
  { 
    title: "Pantry Storage", 
    icon: Layers, 
    img: teamImg, 
    desc: "Smart storage solutions for maximum efficiency.",
    features: ["Custom shelving", "Pull-out drawers", "Lazy susans", "Maximized space"]
  },
  { 
    title: "Stainless Steel Sinks", 
    icon: CircleDot, 
    img: b3, 
    desc: "Durable, modern sink installations.",
    features: ["Undermount & drop-in", "Single & double bowl", "Commercial grade", "Faucet coordination"]
  },
  { 
    title: "Modern Lighting", 
    icon: Lightbulb, 
    img: heroImg, 
    desc: "Ambient and task lighting installations.",
    features: ["Under-cabinet LEDs", "Pendant fixtures", "Recessed lighting", "Smart controls"]
  },
];

const process = [
  { step: "01", title: "Free Consultation", desc: "We visit your home to discuss your vision, needs, and budget." },
  { step: "02", title: "Design & Planning", desc: "Our designers create detailed 3D plans and material selections." },
  { step: "03", title: "Build & Install", desc: "Expert craftsmen bring your design to life with precision." },
  { step: "04", title: "Final Walkthrough", desc: "We ensure every detail meets your expectations before handover." },
];

export default function Services() {
  return (
    <MainLayout>
      <Helmet>
        <title>Kitchen Remodeling Services | Tacoma WA</title>
        <meta name="description" content="Comprehensive kitchen remodeling services in Tacoma: cabinets, countertops, islands, backsplashes, and full renovations. Free estimates." />
      </Helmet>

      <PageHero
        title="Our Kitchen Remodeling Services"
        subtitle="From concept to completion, we handle every aspect of your kitchen transformation with expert craftsmanship."
        backgroundImage={heroImg}
        badge="✨ Comprehensive Solutions"
      />

      {/* Services Grid */}
      <section className="container py-20 md:py-28">
        <SectionHeading
          title="What We Offer"
          subtitle="Explore our full range of kitchen remodeling services designed to meet your needs."
          badge="Services"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, img, desc, features }) => (
            <Card key={title} className="group overflow-hidden border-border/50 transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative h-48 overflow-hidden">
                <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cta text-cta-foreground shadow-lg">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary">{title}</h3>
                <p className="mt-2 text-foreground/70">{desc}</p>
                <ul className="mt-4 space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-cta" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Our Seamless Process"
            subtitle="We make your kitchen remodel stress-free with a proven 4-step process."
            badge="How It Works"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="mb-4 text-6xl font-bold text-cta/20">{step}</div>
                <h3 className="text-xl font-bold text-primary">{title}</h3>
                <p className="mt-2 text-foreground/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-12 text-center md:p-16">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cta/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
              Get a free consultation and detailed estimate for your kitchen remodel.
            </p>
            <Button size="xl" variant="cta" asChild className="mt-8 shadow-lg">
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Estimate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
