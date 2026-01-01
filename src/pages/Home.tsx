import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";
import { ArrowRight, Star, ShieldCheck, BadgeCheck, Phone, ChefHat, Paintbrush, Lightbulb, Hammer } from "lucide-react";

import heroImg from "@/assets/hero-kitchen.jpg";
import teamImg from "@/assets/team-kitchen.jpg";
import after1 from "@/assets/after-1.jpg";
import after2 from "@/assets/after-2.jpg";
import img1 from "@/assets/testimonial-1.jpg";
import img2 from "@/assets/testimonial-2.jpg";
import img3 from "@/assets/testimonial-3.jpg";

const tags = ["Kitchen Renovation", "Cabinets", "Islands", "Countertops", "Tile Backsplashes"];

const featuredServices = [
  { title: "Full Kitchen Renovation", icon: ChefHat, desc: "Complete transformation from design to final touches." },
  { title: "Custom Cabinetry", icon: Paintbrush, desc: "Tailored storage solutions for every style." },
  { title: "Modern Lighting", icon: Lightbulb, desc: "Ambient and task lighting installations." },
  { title: "Premium Countertops", icon: Hammer, desc: "Granite, quartz, and solid surface options." },
];

const testimonials = [
  { name: "Sarah M.", city: "Tacoma", quote: "Our kitchen remodel exceeded expectations. Professional team, stunning results.", img: img1 },
  { name: "Daniel R.", city: "Puyallup", quote: "They managed everything flawlessly and kept us updated. We love our new kitchen!", img: img2 },
  { name: "Priya K.", city: "Lakewood", quote: "Top-notch craftsmanship and great design advice. Highly recommend.", img: img3 },
];

export default function Home() {
  const canonical = typeof window !== "undefined" ? window.location.origin : "https://example.com";

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "[Your Company Name] Remodelers",
    url: canonical,
    areaServed: "Tacoma, WA",
    address: { "@type": "PostalAddress", addressLocality: "Tacoma", addressRegion: "WA", addressCountry: "US" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "120" },
    telephone: "+1 (555) 123-4567",
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Tacoma Kitchen Remodeling | Your Dream Kitchen Starts Here</title>
        <meta name="description" content="Tacoma kitchen remodeling: Beautiful designs, expert craftsmanship, licensed & insured. Free estimates from trusted local experts." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(localBusinessLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Modern remodeled kitchen" className="absolute inset-0 -z-10 h-[85vh] w-full object-cover" loading="eager" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        
        {/* Glassmorphism decorative blobs */}
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-cta/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="container flex min-h-[80vh] flex-col items-start justify-center py-16">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-cta/30 bg-cta/10 px-4 py-2 text-sm font-medium text-cta-foreground backdrop-blur-sm">
              ✨ Tacoma's #1 Kitchen Remodelers
            </span>
            <h1 className="text-balance text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl">
              Your Dream Kitchen Starts Here
            </h1>
            <p className="mt-6 text-xl text-foreground/80 md:text-2xl">
              Beautiful Designs. Professional Craftsmanship. Local Experts You Can Trust.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="xl" variant="cta" asChild className="group shadow-lg shadow-cta/30">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Request Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="xl" variant="primaryOutline" asChild>
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>

            {/* Trust badges - modern card style */}
            <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card/80 p-4 shadow-lg backdrop-blur-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cta/10">
                  <Star className="h-6 w-6 text-cta" />
                </div>
                <div>
                  <p className="font-semibold">Google Reviews</p>
                  <p className="text-sm text-muted-foreground">4.9/5 rating</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card/80 p-4 shadow-lg backdrop-blur-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <BadgeCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">10+ Years</p>
                  <p className="text-sm text-muted-foreground">In Business</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card/80 p-4 shadow-lg backdrop-blur-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Licensed & Insured</p>
                  <p className="text-sm text-muted-foreground">Peace of mind</p>
                </div>
              </div>
            </div>

            {/* Tag menu */}
            <nav aria-label="Popular services" className="mt-8">
              <ul className="flex flex-wrap items-center gap-2">
                {tags.map((t) => (
                  <li key={t}>
                    <Link to="/services" className="inline-flex items-center rounded-full border border-border bg-accent/50 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground">
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="container py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-cta/10" />
            <img src={teamImg} alt="Our team at work" className="relative z-10 rounded-3xl border border-border object-cover shadow-2xl" loading="lazy" />
          </div>
          <div>
            <span className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              About Us
            </span>
            <h2 className="text-4xl font-bold text-primary md:text-5xl">
              Transforming Kitchens, Enhancing Homes
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              We specialize in transforming kitchens with a blend of thoughtful design and meticulous craftsmanship. Locally rooted in Tacoma, WA—licensed, bonded, and insured.
            </p>
            <p className="mt-4 text-xl font-semibold text-primary">
              Over 15 years serving Tacoma homeowners.
            </p>
            <Button variant="primaryOutline" asChild className="mt-8 group">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <span className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-primary md:text-5xl">
              Comprehensive Kitchen Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
              From concept to completion, we handle every aspect of your kitchen transformation.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map(({ title, icon: Icon, desc }) => (
              <Card key={title} className="group relative overflow-hidden border-border/50 bg-card transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cta/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <CardContent className="relative p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-foreground/70">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="cta" size="lg" asChild className="group">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="container py-20 md:py-28">
        <div className="text-center">
          <span className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Our Work
          </span>
          <h2 className="text-4xl font-bold text-primary md:text-5xl">
            See Our Transformations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
            From outdated to outstanding — explore dramatic kitchen makeovers.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl">
            <img src={after1} alt="Kitchen transformation 1" className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-lg font-semibold">Modern White Kitchen</p>
              <p className="text-sm text-primary-foreground/80">Complete renovation in Tacoma</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl">
            <img src={after2} alt="Kitchen transformation 2" className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-lg font-semibold">Open Concept Design</p>
              <p className="text-sm text-primary-foreground/80">Full remodel in Lakewood</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button variant="primaryOutline" size="lg" asChild className="group">
            <Link to="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <span className="mb-3 inline-flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-primary-foreground md:text-5xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-1 text-cta">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-primary-foreground/90">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="font-semibold text-primary-foreground">{t.name}</p>
                      <p className="text-sm text-primary-foreground/70">{t.city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="cta" size="lg" asChild className="group">
              <Link to="/testimonials">
                Read More Reviews
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary to-primary/90 p-12 text-center md:p-16">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cta/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
              Ready to Transform Your Kitchen?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
              Book your free design consultation today. No pressure, just expert advice.
            </p>
            <Button size="xl" variant="cta" asChild className="mt-8 shadow-lg shadow-cta/30">
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get Your Free Estimate
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
