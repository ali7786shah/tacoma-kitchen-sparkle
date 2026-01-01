import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { ArrowRight, Phone, ShieldCheck, Star, Gem, Wallet, Users, Award, Clock, Heart } from "lucide-react";

import teamImg from "@/assets/team-kitchen.jpg";
import heroImg from "@/assets/hero-kitchen.jpg";
import logoBbb from "@/assets/logo-bbb.png";
import logoHouzz from "@/assets/logo-houzz.png";
import logoNkba from "@/assets/logo-nkba.png";
import logoCabinetpro from "@/assets/logo-cabinetpro.png";

const stats = [
  { value: "15+", label: "Years Experience", icon: Clock },
  { value: "500+", label: "Projects Completed", icon: Award },
  { value: "4.9", label: "Google Rating", icon: Star },
  { value: "100%", label: "Satisfaction", icon: Heart },
];

const values = [
  { title: "Licensed & Insured", icon: ShieldCheck, desc: "Fully licensed, bonded, and insured in Washington state for your peace of mind." },
  { title: "5-Star Rated", icon: Star, desc: "Trusted by local homeowners with hundreds of glowing Google reviews." },
  { title: "Premium Materials", icon: Gem, desc: "We use only the highest quality materials from trusted suppliers." },
  { title: "Affordable Financing", icon: Wallet, desc: "Flexible payment options to make your dream kitchen a reality." },
];

const team = [
  { name: "[Team Member 1]", role: "Founder & Lead Designer", desc: "Over 20 years of experience in kitchen design and remodeling." },
  { name: "[Team Member 2]", role: "Project Manager", desc: "Ensures every project runs smoothly from start to finish." },
  { name: "[Team Member 3]", role: "Master Craftsman", desc: "Expert cabinetry and finishing work specialist." },
  { name: "[Team Member 4]", role: "Customer Relations", desc: "Your point of contact throughout the remodeling journey." },
];

const certifications = [
  { name: "NKBA", logo: logoNkba },
  { name: "BBB", logo: logoBbb },
  { name: "Houzz", logo: logoHouzz },
  { name: "CabinetPro", logo: logoCabinetpro },
];

export default function About() {
  return (
    <MainLayout>
      <Helmet>
        <title>About Us | Tacoma Kitchen Remodeling Company</title>
        <meta name="description" content="Learn about our 15+ years of kitchen remodeling experience in Tacoma. Licensed, insured, and committed to quality craftsmanship." />
      </Helmet>

      <PageHero
        title="About Our Company"
        subtitle="Transforming Tacoma kitchens with passion, expertise, and unwavering commitment to excellence."
        backgroundImage={teamImg}
        badge="👋 Meet Our Team"
      />

      {/* Stats Section */}
      <section className="relative -mt-16 z-10">
        <div className="container">
          <div className="grid gap-4 rounded-3xl bg-card p-8 shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-cta/10">
                  <Icon className="h-7 w-7 text-cta" />
                </div>
                <p className="text-4xl font-bold text-primary">{value}</p>
                <p className="text-sm text-foreground/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-cta/10" />
            <img src={heroImg} alt="Our kitchen work" className="relative z-10 rounded-3xl border border-border object-cover shadow-2xl" loading="lazy" />
          </div>
          <div>
            <span className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              Our Story
            </span>
            <h2 className="text-4xl font-bold text-primary md:text-5xl">
              Building Dream Kitchens Since 2009
            </h2>
            <p className="mt-6 text-lg text-foreground/80">
              [Placeholder: Company founding story] We started with a simple mission: to transform outdated kitchens into beautiful, functional spaces that families love. What began as a small team of passionate craftsmen has grown into Tacoma's most trusted kitchen remodeling company.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              [Placeholder: Company values] Our commitment to quality craftsmanship, transparent pricing, and exceptional customer service has earned us hundreds of 5-star reviews and the trust of homeowners across the Puget Sound region.
            </p>
            <p className="mt-4 text-xl font-semibold text-primary">
              Locally owned and operated in Tacoma, WA.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Why Choose Us"
            subtitle="What sets us apart from other kitchen remodeling companies."
            badge="Our Values"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, icon: Icon, desc }) => (
              <Card key={title} className="group border-border/50 transition-all hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-cta/10">
                    <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-cta" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-foreground/70">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="container py-20 md:py-28">
        <SectionHeading
          title="Meet Our Team"
          subtitle="The dedicated professionals behind your kitchen transformation."
          badge="Our People"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-secondary">
                <Users className="h-16 w-16 text-primary/30" />
              </div>
              <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
              <p className="text-sm font-medium text-cta">{member.role}</p>
              <p className="mt-2 text-sm text-foreground/70">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-secondary/30 py-16">
        <div className="container">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-foreground/60">
            Trusted Certifications & Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {certifications.map((cert) => (
              <img
                key={cert.name}
                src={cert.logo}
                alt={cert.name}
                className="h-12 object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-12 text-center md:p-16">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cta/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Meet Our Team?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
              Schedule your free consultation and let's discuss your dream kitchen.
            </p>
            <Button size="xl" variant="cta" asChild className="mt-8 shadow-lg">
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
