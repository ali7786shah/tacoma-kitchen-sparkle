import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";
import PageHero from "@/components/shared/PageHero";
import { Star, Phone, ArrowRight } from "lucide-react";

import img1 from "@/assets/testimonial-1.jpg";
import img2 from "@/assets/testimonial-2.jpg";
import img3 from "@/assets/testimonial-3.jpg";
import heroImg from "@/assets/hero-kitchen.jpg";

const testimonials = [
  { name: "Sarah M.", city: "Tacoma", quote: "Our kitchen remodel exceeded expectations. Professional team, stunning results. The entire process was smooth and the team kept us informed every step of the way.", img: img1 },
  { name: "Daniel R.", city: "Puyallup", quote: "They managed everything flawlessly and kept us updated. We love our new kitchen! Best decision we ever made for our home.", img: img2 },
  { name: "Priya K.", city: "Lakewood", quote: "Top-notch craftsmanship and great design advice. Highly recommend to anyone looking for quality work at fair prices.", img: img3 },
  { name: "Michael T.", city: "Federal Way", quote: "From design to completion, everything was handled professionally. Our kitchen is now the heart of our home.", img: img1 },
  { name: "Jennifer L.", city: "Fircrest", quote: "The attention to detail was impressive. Every cabinet, every tile was placed with precision and care.", img: img2 },
  { name: "Robert & Lisa H.", city: "Ruston", quote: "We couldn't be happier with our new kitchen. The team was respectful of our home and delivered on time.", img: img3 },
];

export default function Testimonials() {
  return (
    <MainLayout>
      <Helmet>
        <title>Customer Reviews | Tacoma Kitchen Remodeling</title>
        <meta name="description" content="Read what our customers say about their kitchen remodeling experience. 5-star reviews from Tacoma, Puyallup, Lakewood homeowners." />
      </Helmet>

      <PageHero title="Customer Reviews" subtitle="See what homeowners across Tacoma are saying about their kitchen transformations." backgroundImage={heroImg} badge="⭐ 5-Star Rated" />

      <section className="container py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border/50 transition-all hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1 text-cta">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}</div>
                <p className="text-lg text-foreground/90">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                  <div><p className="font-semibold text-primary">{t.name}</p><p className="text-sm text-foreground/70">{t.city}</p></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <div className="rounded-3xl bg-primary p-12 text-center md:p-16">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Join Our Happy Customers</h2>
          <Button size="xl" variant="cta" asChild className="mt-8"><Link to="/contact"><Phone className="mr-2 h-5 w-5" />Get Free Estimate<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
      </section>
    </MainLayout>
  );
}
