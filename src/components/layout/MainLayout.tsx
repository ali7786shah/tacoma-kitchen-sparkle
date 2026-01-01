import HeaderNav from "@/components/landing/HeaderNav";
import SiteFooter from "@/components/landing/SiteFooter";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeaderNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
