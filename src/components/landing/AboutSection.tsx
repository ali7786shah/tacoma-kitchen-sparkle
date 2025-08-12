import teamImg from "@/assets/team-kitchen.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="container py-16 md:py-24">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <img
          src={teamImg}
          alt="Our remodeling team collaborating on a kitchen design"
          className="h-full w-full rounded-lg border border-border object-cover shadow-sm"
          loading="lazy"
        />
        <div>
          <h2 className="text-3xl font-bold text-primary md:text-4xl">About Us</h2>
          <p className="mt-4 text-foreground/80">
            [Placeholder: Short company intro] We specialize in transforming kitchens with a blend of thoughtful design and meticulous craftsmanship. Our local Tacoma team guides you from concept to completion with transparency and care.
          </p>
          <p className="mt-4 font-semibold text-primary">Over 15 years serving Tacoma homeowners.</p>
        </div>
      </div>
    </section>
  );
}
