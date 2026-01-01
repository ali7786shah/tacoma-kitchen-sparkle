import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";
import PageHero from "@/components/shared/PageHero";
import { ArrowRight, Calendar } from "lucide-react";

import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  { slug: "kitchen-trends-2025", title: "Top 5 Kitchen Trends for 2025", desc: "Discover the latest design trends transforming modern kitchens this year.", date: "Dec 15, 2024", img: b1, category: "Trends" },
  { slug: "choose-countertops", title: "How to Choose the Perfect Countertop", desc: "Compare quartz, granite, marble and more to find your ideal surface.", date: "Dec 10, 2024", img: b2, category: "Guide" },
  { slug: "budget-upgrades", title: "Budget-Friendly Kitchen Upgrades", desc: "High-impact improvements that maximize value without breaking the bank.", date: "Dec 5, 2024", img: b3, category: "Tips" },
  { slug: "kitchen-island-ideas", title: "10 Kitchen Island Ideas for Any Space", desc: "From compact to grand, find the perfect island design for your kitchen.", date: "Nov 28, 2024", img: b1, category: "Ideas" },
  { slug: "cabinet-styles", title: "Cabinet Styles: Shaker vs Flat Panel", desc: "Understanding the differences to make the right choice for your home.", date: "Nov 20, 2024", img: b2, category: "Guide" },
  { slug: "lighting-tips", title: "Kitchen Lighting: A Complete Guide", desc: "Layer your lighting for function and ambiance in every corner.", date: "Nov 15, 2024", img: b3, category: "Guide" },
];

export default function Blog() {
  return (
    <MainLayout>
      <Helmet>
        <title>Kitchen Remodeling Blog | Tips & Inspiration</title>
        <meta name="description" content="Kitchen remodeling tips, trends, and inspiration from Tacoma's top remodelers. Expert advice for your next project." />
      </Helmet>

      <PageHero title="Kitchen Insights & Inspiration" subtitle="Expert tips, trends, and ideas to help you plan your perfect kitchen." badge="📚 Our Blog" showCTA={false} />

      <section className="container py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Card key={p.slug} className="group overflow-hidden border-border/50 transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <span className="absolute left-4 top-4 rounded-full bg-cta px-3 py-1 text-xs font-medium text-cta-foreground">{p.category}</span>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-foreground/60"><Calendar className="h-4 w-4" />{p.date}</div>
                <CardTitle className="text-xl group-hover:text-cta transition-colors">{p.title}</CardTitle>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={`/blog/${p.slug}`} className="inline-flex items-center text-sm font-medium text-primary hover:text-cta">Read More<ArrowRight className="ml-1 h-4 w-4" /></Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
