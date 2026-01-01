import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import BeforeAfterSlider from "@/components/landing/BeforeAfterSlider";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Phone, ArrowRight, X } from "lucide-react";

import heroImg from "@/assets/hero-kitchen.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import teamImg from "@/assets/team-kitchen.jpg";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const categories = ["All", "Modern", "Traditional", "Transitional", "Contemporary"];

const projects = [
  { id: 1, title: "Modern White Kitchen", category: "Modern", location: "Tacoma", img: after1 },
  { id: 2, title: "Open Concept Design", category: "Contemporary", location: "Lakewood", img: after2 },
  { id: 3, title: "Classic Oak Cabinets", category: "Traditional", location: "Puyallup", img: heroImg },
  { id: 4, title: "Minimalist Island Kitchen", category: "Modern", location: "Federal Way", img: teamImg },
  { id: 5, title: "Warm Transitional Style", category: "Transitional", location: "Fircrest", img: b1 },
  { id: 6, title: "Bright & Airy Remodel", category: "Contemporary", location: "Ruston", img: b2 },
  { id: 7, title: "Dark Moody Kitchen", category: "Modern", location: "Tacoma", img: b3 },
  { id: 8, title: "Farmhouse Renovation", category: "Traditional", location: "Fife", img: heroImg },
];

const transformations = [
  { before: before1, after: after1, title: "Complete Modern Overhaul", location: "Tacoma" },
  { before: before2, after: after2, title: "Open Floor Plan Conversion", location: "Lakewood" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <MainLayout>
      <Helmet>
        <title>Kitchen Remodel Gallery | Before & After Photos | Tacoma</title>
        <meta name="description" content="Browse our stunning kitchen remodel gallery featuring before and after transformations in Tacoma, Lakewood, Puyallup and surrounding areas." />
      </Helmet>

      <PageHero
        title="Our Kitchen Gallery"
        subtitle="Explore our portfolio of stunning kitchen transformations and get inspired for your own project."
        backgroundImage={after1}
        badge="📸 Our Work"
      />

      {/* Before & After Section */}
      <section className="container py-20 md:py-28">
        <SectionHeading
          title="Before & After Transformations"
          subtitle="Slide to see the dramatic transformations we've achieved for our clients."
          badge="Transformations"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {transformations.map((t, i) => (
            <div key={i} className="space-y-4">
              <BeforeAfterSlider
                beforeSrc={t.before}
                afterSrc={t.after}
                altBefore={`Before: ${t.title}`}
                altAfter={`After: ${t.title}`}
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary">{t.title}</h3>
                <p className="text-sm text-foreground/70">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Gallery */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Project Gallery"
            subtitle="Filter by style to find inspiration for your kitchen."
            badge="Portfolio"
          />

          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground/70 hover:bg-accent hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-card shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
                onClick={() => setSelectedImage(project.img)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="font-semibold">{project.title}</p>
                    <p className="text-sm text-primary-foreground/80">{project.location}</p>
                  </div>
                </div>
                <div className="p-4">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -right-2 -top-2 z-50 rounded-full bg-card p-2 shadow-lg"
          >
            <X className="h-5 w-5" />
          </button>
          {selectedImage && (
            <img src={selectedImage} alt="Gallery preview" className="w-full rounded-2xl" />
          )}
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="container py-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-12 text-center md:p-16">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cta/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Love What You See?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
              Let's discuss how we can create your dream kitchen.
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
