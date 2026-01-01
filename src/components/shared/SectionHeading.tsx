import { Sparkles } from "lucide-react";

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
    <header className={`mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
          <Sparkles className="h-3.5 w-3.5" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-primary md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-muted-foreground md:text-xl ${centered ? "mx-auto max-w-2xl" : ""}`}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
