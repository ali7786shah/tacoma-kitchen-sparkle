import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import MainLayout from "@/components/layout/MainLayout";
import PageHero from "@/components/shared/PageHero";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import mapImg from "@/assets/service-area-map.png";

const neighborhoods = ["Old Tacoma", "Tacoma Junction", "Browns Point", "Fircrest", "Hillsdale", "Caledonia", "Dash Point", "Excelsior", "Fern Hill", "Fife", "Fife Heights", "Northeast Tacoma", "Waller", "Ruston", "South Tacoma", "Salishan"];

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    }, 1000);
  };

  return (
    <MainLayout>
      <Helmet>
        <title>Contact Us | Free Kitchen Remodel Estimate | Tacoma</title>
        <meta name="description" content="Contact Tacoma's top kitchen remodelers for a free estimate. Call, email, or fill out our form. Serving Tacoma and surrounding areas." />
      </Helmet>

      <PageHero title="Get Your Free Estimate" subtitle="Ready to transform your kitchen? Contact us today for a no-obligation consultation." badge="📞 Contact Us" showCTA={false} />

      <section className="container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-3xl border border-border/50 bg-card p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-primary">Send Us a Message</h2>
            <p className="mt-2 text-foreground/70">Fill out the form and we'll get back to you within 24 hours.</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label htmlFor="name">Full Name</Label><Input id="name" placeholder="[Your Name]" required className="mt-1" /></div>
                <div><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" placeholder="[Your Phone]" required className="mt-1" /></div>
              </div>
              <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="[Your Email]" required className="mt-1" /></div>
              <div><Label htmlFor="message">Message</Label><Textarea id="message" placeholder="Tell us about your project..." rows={5} className="mt-1" /></div>
              <Button type="submit" size="lg" variant="cta" disabled={loading} className="w-full"><Send className="mr-2 h-5 w-5" />{loading ? "Sending..." : "Send Message"}</Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary">Contact Information</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cta/10"><Phone className="h-6 w-6 text-cta" /></div><div><p className="font-semibold">Phone</p><p className="text-foreground/70">[Placeholder: +1 (555) 123-4567]</p></div></div>
                <div className="flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cta/10"><Mail className="h-6 w-6 text-cta" /></div><div><p className="font-semibold">Email</p><p className="text-foreground/70">[Placeholder: hello@example.com]</p></div></div>
                <div className="flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cta/10"><MapPin className="h-6 w-6 text-cta" /></div><div><p className="font-semibold">Address</p><p className="text-foreground/70">[Placeholder: 1234 Market St, Tacoma, WA]</p></div></div>
                <div className="flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cta/10"><Clock className="h-6 w-6 text-cta" /></div><div><p className="font-semibold">Hours</p><p className="text-foreground/70">Mon-Fri: 8am-6pm, Sat: 9am-4pm</p></div></div>
              </div>
            </div>

            {/* Service Area */}
            <div className="rounded-2xl border border-border/50 bg-secondary/30 p-6">
              <h3 className="font-semibold text-primary">Service Areas</h3>
              <img src={mapImg} alt="Service area map" className="mt-4 rounded-xl" loading="lazy" />
              <div className="mt-4 flex flex-wrap gap-2">
                {neighborhoods.map((n) => <span key={n} className="rounded-full bg-card px-3 py-1 text-xs text-foreground/70">{n}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
