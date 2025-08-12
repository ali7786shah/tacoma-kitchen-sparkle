import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <section id="contact" className="py-16">
      <div className="container">
        <div className="relative overflow-hidden rounded-xl border border-border bg-primary text-primary-foreground">
          <div className="absolute inset-0 bg-[image:var(--gradient-primary)] opacity-10" aria-hidden="true" />
          <div className="relative flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">Book Your Free Kitchen Design Consultation Today!</h3>
              <p className="mt-1 text-primary-foreground/90">No-pressure consultation. Clear timelines and transparent pricing.</p>
            </div>
            <Button size="lg" variant="cta" className="shadow-md">Request Free Estimate</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
