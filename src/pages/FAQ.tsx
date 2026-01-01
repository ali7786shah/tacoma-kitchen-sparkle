import { Helmet } from "react-helmet-async";
import MainLayout from "@/components/layout/MainLayout";
import PageHero from "@/components/shared/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const faqs = [
  { q: "How long does a kitchen remodel take?", a: "Typically, a full kitchen remodel takes 6–10 weeks, depending on complexity and material availability. Minor updates may take 2-3 weeks." },
  { q: "Do you offer free consultations?", a: "Yes! We offer a complimentary design consultation and estimate for homeowners in the Tacoma area. There's no obligation." },
  { q: "What's the average cost of a kitchen remodel?", a: "Costs vary based on size, materials, and scope. A typical kitchen remodel ranges from $25,000 to $75,000. We provide detailed, transparent proposals." },
  { q: "Do you handle permits and inspections?", a: "Absolutely. We handle all necessary permits and coordinate inspections to ensure your remodel meets all local building codes." },
  { q: "Can I stay in my home during the remodel?", a: "Yes, most homeowners stay in their home. We set up temporary kitchen areas and minimize disruption to your daily routine." },
  { q: "What type of warranty do you offer?", a: "We offer a comprehensive 5-year workmanship warranty on all installations, plus manufacturer warranties on materials and appliances." },
  { q: "Do you offer financing options?", a: "Yes, we partner with trusted lenders to offer flexible financing options with competitive rates and monthly payment plans." },
  { q: "What areas do you serve?", a: "We serve Tacoma and surrounding areas including Puyallup, Lakewood, Federal Way, Fircrest, Ruston, Fife, and more." },
];

export default function FAQ() {
  return (
    <MainLayout>
      <Helmet>
        <title>FAQ | Kitchen Remodeling Questions Answered</title>
        <meta name="description" content="Common questions about kitchen remodeling answered. Learn about timelines, costs, process, and what to expect." />
      </Helmet>

      <PageHero title="Frequently Asked Questions" subtitle="Find answers to common questions about our kitchen remodeling services." badge="❓ FAQ" showCTA={false} />

      <section className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border/50 bg-card px-6 shadow-sm">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-foreground/80">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="container py-20">
        <div className="rounded-3xl bg-primary p-12 text-center md:p-16">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Still Have Questions?</h2>
          <p className="mt-4 text-primary-foreground/90">Our team is here to help. Contact us for personalized answers.</p>
          <Button size="xl" variant="cta" asChild className="mt-8"><Link to="/contact"><Phone className="mr-2 h-5 w-5" />Contact Us<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
        </div>
      </section>
    </MainLayout>
  );
}
