interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  centered = true,
}: SectionHeadingProps) {
  return (
    <header className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
          {subtitle}
        </p>
      )}
    </header>
  );
}
