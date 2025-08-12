import { Card, CardContent, CardHeader } from "@/components/ui/card";
import img1 from "@/assets/testimonial-1.jpg";
import img2 from "@/assets/testimonial-2.jpg";
import img3 from "@/assets/testimonial-3.jpg";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "[Client Name]",
    city: "Tacoma",
    quote:
      "[Placeholder: 'Our kitchen remodel exceeded all expectations! The team was professional and the results are stunning.']",
    img: img1,
  },
  {
    name: "[Client Name]",
    city: "Puyallup",
    quote:
      "[Placeholder: 'They managed the project flawlessly and kept us updated. We love our new kitchen!']",
    img: img2,
  },
  {
    name: "[Client Name]",
    city: "Lakewood",
    quote:
      "[Placeholder: 'Top-notch craftsmanship and great design advice. Highly recommend.']",
    img: img3,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="container py-16 md:py-24">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">What Our Happy Clients Say</h2>
        <p className="mt-2 text-foreground/70">[Placeholder: Social proof from recent projects]</p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.city} className="h-full">
            <CardHeader>
              <div className="flex items-center gap-3">
                <img src={t.img} alt={`${t.name} from ${t.city}`} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-semibold text-primary">{t.name}</p>
                  <p className="text-sm text-foreground/70">{t.city}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-2 flex items-center gap-1 text-cta">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <p className="text-foreground/80">{t.quote}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
