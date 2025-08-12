import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section id="faq" className="container py-16 md:py-24">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-primary md:text-4xl">Common Questions About Kitchen Remodeling</h2>
        <p className="mt-2 text-foreground/70">[Placeholder: Helpful answers to get you started]</p>
      </header>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How long does a remodel take?</AccordionTrigger>
            <AccordionContent>
              Typically, a full kitchen remodel takes 6–10 weeks, depending on complexity and material availability. [Placeholder]
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do you offer free consultations?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer a complimentary design consultation and estimate for Tacoma-area homeowners. [Placeholder]
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What’s the average cost?</AccordionTrigger>
            <AccordionContent>
              Costs vary based on size, materials, and scope. We provide a detailed, transparent proposal after the initial consultation. [Placeholder]
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
