import { Helmet } from "react-helmet-async";
import HeaderNav from "@/components/landing/HeaderNav";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import GallerySection from "@/components/landing/GallerySection";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import Certifications from "@/components/landing/Certifications";
import Testimonials from "@/components/landing/Testimonials";
import ServiceAreaMap from "@/components/landing/ServiceAreaMap";
import BlogPreview from "@/components/landing/BlogPreview";
import FAQSection from "@/components/landing/FAQSection";
import CTABanner from "@/components/landing/CTABanner";
import SiteFooter from "@/components/landing/SiteFooter";

const Index = () => {
  const canonical = typeof window !== "undefined" ? window.location.href : "https://example.com/";

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "[Your Company Name] Remodelers",
    url: canonical,
    areaServed: "Tacoma, WA",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tacoma",
      addressRegion: "WA",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "120",
    },
    telephone: "+1 (555) 123-4567",
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a remodel take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically, a full kitchen remodel takes 6–10 weeks, depending on complexity and material availability.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer free consultations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer a complimentary design consultation and estimate for Tacoma-area homeowners.",
        },
      },
      {
        "@type": "Question",
        name: "What’s the average cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Costs vary based on size, materials, and scope. We provide a detailed, transparent proposal after the initial consultation.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Tacoma Kitchen Remodeling | Your Dream Kitchen Starts Here</title>
        <meta
          name="description"
          content="Tacoma kitchen remodeling: Beautiful designs, expert craftsmanship, licensed & insured. Free estimates from trusted local experts."
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Tacoma Kitchen Remodeling | Your Dream Kitchen Starts Here" />
        <meta property="og:description" content="Beautiful designs. Professional craftsmanship. Local experts you can trust." />
        <script type="application/ld+json">{JSON.stringify(localBusinessLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      <HeaderNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <WhyChooseUs />
        <Certifications />
        <Testimonials />
        <ServiceAreaMap />
        <BlogPreview />
        <FAQSection />
        <CTABanner />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
