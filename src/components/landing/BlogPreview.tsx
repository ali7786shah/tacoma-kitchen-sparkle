import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  { title: "Top 5 Kitchen Trends for 2025", desc: "Quick insights into layouts, finishes, and features trending now.", img: b1 },
  { title: "How to Choose the Perfect Countertop", desc: "Compare quartz, granite, and more for performance and style.", img: b2 },
  { title: "Budget-Friendly Kitchen Upgrades That Look Luxurious", desc: "High-impact ideas that maximize value without overspending.", img: b3 },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="container py-16 md:py-24">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">Kitchen Remodeling Insights & Inspiration</h2>
        <p className="mt-2 text-foreground/70">Fresh tips and ideas from our remodel experts.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.title} className="transition-transform hover:-translate-y-0.5 hover:shadow">
            <img src={p.img} alt={`${p.title} thumbnail`} className="h-44 w-full rounded-t-lg object-cover" loading="lazy" />
            <CardHeader>
              <CardTitle className="text-xl">{p.title}</CardTitle>
              <CardDescription>{p.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="#" className="text-sm font-medium text-primary underline-offset-4 hover:underline">Read more</a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
