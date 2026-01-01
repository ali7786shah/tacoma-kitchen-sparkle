import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  badge?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  showCTA = true,
  ctaText = "Get Free Estimate",
  ctaLink = "/contact",
  badge,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-20">
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/95 to-background/80" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
        </>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 -z-10 aurora-bg" />
      )}
      
      {/* Decorative elements - Modern glassmorphism */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cta/10 blur-3xl animate-pulse-soft" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 -z-5 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="container relative py-20 md:py-28 lg:py-36">
        <div className="max-w-4xl animate-fade-up">
          {badge && (
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cta/30 bg-cta/10 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-cta" />
              {badge}
            </span>
          )}
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg text-foreground/70 md:text-xl lg:text-2xl" style={{ animationDelay: '0.1s' }}>
              {subtitle}
            </p>
          )}
          {showCTA && (
            <div className="mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.2s' }}>
              <Button size="xl" variant="cta" asChild className="group">
                <Link to={ctaLink}>
                  <Phone className="mr-2 h-5 w-5" />
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="xl" variant="primaryOutline" asChild>
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
