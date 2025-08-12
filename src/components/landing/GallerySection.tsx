import BeforeAfterSlider from "./BeforeAfterSlider";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

export default function GallerySection() {
  return (
    <section id="gallery" className="container py-16 md:py-24">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">See Our Transformations: Before & After</h2>
        <p className="mt-2 text-foreground/70">[Placeholder: From outdated to outstanding]</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        <BeforeAfterSlider
          beforeSrc={before1}
          afterSrc={after1}
          altBefore="Before: outdated kitchen with dark cabinets"
          altAfter="After: modern bright kitchen with white cabinets"
        />
        <BeforeAfterSlider
          beforeSrc={before2}
          afterSrc={after2}
          altBefore="Before: small dated kitchen"
          altAfter="After: open airy remodeled kitchen"
        />
      </div>
    </section>
  );
}
